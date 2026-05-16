/**
 * ALFA-PADEL Production Server
 * Express + helmet.js für Security-Headers + Nodemailer für DSGVO-konformen Kontakt
 * Agency Standard: SILBER PLUS – CSP, X-Frame-Options, HSTS, Rate-Limiting
 *
 * Usage:
 *   npm run build
 *   npm start
 */
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4321;

// DSGVO-konforme Rate-Limiting: max 5 Kontaktanfragen pro 15 Minuten pro IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Zu viele Anfragen. Bitte versuche es später erneut. / Too many requests. Please try again later.' },
});

// Hinweis: Nonce-basierte CSP wird aktuell nicht genutzt, da Alpine.js
// und Astro-Inline-Styles 'unsafe-inline'/'unsafe-eval' erfordern.
// Nonce-Implementierung würde alle <script>/<style>-Tags in .astro-Dateien
// modifizieren müssen – zu invasiv für den aktuellen Projektstand.
// Siehe public/_headers für die verwendete CSP.

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        // Alpine.js verwendet intern eval() – ohne 'unsafe-eval' keine Alpine.js Interaktivität
        // Auch die Alpine-Expressions in x-data verwenden eval-artige Evaluation
        scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
        // 'unsafe-inline' notwendig für x-cloak und Alpine.js dynamische Klassen
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
        fontSrc: ["'self'"],
        connectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        frameAncestors: ["'none'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    xContentTypeOptions: true,
    xFrameOptions: { action: 'deny' },
    xDnsPrefetchControl: { allow: false },
    permittedCrossDomainPolicies: { permittedPolicies: 'none' },
  })
);

app.use(express.json({ limit: '10kb' }));

// DSGVO-konforme E-Mail-Konfiguration (kein US-Anbieter, kein Tracking)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

/**
 * POST /api/contact
 * DSGVO-konform: Keine Datenbank-Speicherung, nur E-Mail-Versand.
 * Rate-Limiting + Honeypot + Validierung gegen Spam.
 */
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, subject, message, privacy, _gotcha } = req.body;

    // Honeypot: Bots füllen oft hidden Felder aus
    if (_gotcha) {
      return res.status(200).json({ success: true });
    }

    // Pflichtfelder validieren
    if (!name || !email || !subject || !message || !privacy) {
      return res.status(400).json({ error: 'Bitte alle Pflichtfelder ausfüllen. / Please fill in all required fields.' });
    }

    // E-Mail-Format validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Ungültige E-Mail-Adresse. / Invalid email address.' });
    }

    // Nachricht bereinigen (XSS-Schutz)
    const clean = (str) => str.replace(/[<>]/g, '').trim();
    const cleanName = clean(name);
    const cleanMessage = clean(message);
    const cleanPhone = phone ? clean(phone) : '–';

    const subjectLabels = {
      general: 'Allgemeine Anfrage / General inquiry',
      booking: 'Buchungsanfrage / Booking inquiry',
      sponsoring: 'Sponsoring',
      school: 'Schulkooperation / School partnership',
      event: 'Event & Turniere / Events & tournaments',
    };

    const mailOptions = {
      from: `"ALFA-PADEL Kontaktformular" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[ALFA-PADEL] ${subjectLabels[subject] || subject}`,
      text: `
Neue Kontaktanfrage über alfa-padel.at
========================================

Name:     ${cleanName}
E-Mail:   ${email}
Telefon:  ${cleanPhone}
Betreff:  ${subjectLabels[subject] || subject}

Nachricht:
${cleanMessage}

========================================
DSGVO-Einwilligung: Ja (Checkbox bestätigt am ${new Date().toLocaleString('de-AT')})
IP-Adresse: ${req.ip || req.headers['x-forwarded-for'] || 'unbekannt'}
User-Agent: ${req.headers['user-agent'] || 'unbekannt'}
      `.trim(),
      html: `
<h2>Neue Kontaktanfrage über alfa-padel.at</h2>
<table>
<tr><td><strong>Name:</strong></td><td>${cleanName}</td></tr>
<tr><td><strong>E-Mail:</strong></td><td>${email}</td></tr>
<tr><td><strong>Telefon:</strong></td><td>${cleanPhone}</td></tr>
<tr><td><strong>Betreff:</strong></td><td>${subjectLabels[subject] || subject}</td></tr>
</table>
<h3>Nachricht:</h3>
<p style="white-space:pre-wrap">${cleanMessage}</p>
<hr>
<p><small>DSGVO-Einwilligung: Ja (Checkbox bestätigt am ${new Date().toLocaleString('de-AT')})<br>
IP: ${req.ip || req.headers['x-forwarded-for'] || 'unbekannt'}</small></p>
      `.trim(),
    };

    // SMTP-Guard: Ohne konfigurierte SMTP-Credentials (Testumgebung) 
    // wird die Nachricht validiert aber nicht versendet.
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
      return res.status(200).json({ success: true, message: 'Nachricht validiert (Testmodus). / Message validated (test mode).' });
    }

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Nachricht erfolgreich gesendet. / Message sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Fehler beim Senden. Bitte versuche es später erneut. / Error sending message. Please try again later.' });
  }
});

// Static files from Astro build output
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎾 ALFA-PADEL server running on http://localhost:${PORT}`);
  console.log(`🔒 Helmet.js security headers active`);
  console.log(`📧 Contact form endpoint: POST /api/contact (rate-limited)`);
});
