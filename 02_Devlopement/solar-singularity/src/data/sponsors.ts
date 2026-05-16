export interface Sponsor {
  id: string;
  name: string;
  nameEn: string;
  tier: 'gold' | 'silver' | 'bronze';
  url: string;
  description: string;
  descriptionEn: string;
  location: string;
  logoAlt: string;
  logoPath?: string; // Neuer Pfad für lokale Logos
}

export const sponsors: Sponsor[] = [
  // === GOLD: Grand Slam Burgau ===
  {
    id: 'einfach-online',
    name: 'einfach-online.dev',
    nameEn: 'einfach-online.dev',
    tier: 'gold',
    url: 'https://einfach-online.dev',
    description:
      'Digitale Exzellenz aus Burgau: Als Webagentur & Projektpartner realisieren wir moderne Online-Präsenzen.',
    descriptionEn:
      'Digital excellence from Burgau: As a web agency & project partner, we create modern online presences.',
    location: 'Burgau',
    logoAlt: 'einfach-online.dev Logo',
    logoPath: '/assets/images/logos/einfach-online.dev-logo.svg', // Lokaler Pfad
  },
  {
    id: 'heiltherme-bad-waltersdorf',
    name: 'Heiltherme Bad Waltersdorf',
    nameEn: 'Heiltherme Bad Waltersdorf',
    tier: 'gold',
    url: 'https://www.heiltherme.at',
    description:
      'Die größte Therme der Region: Entspannung, Wellness & Aktivurlaub – der perfekte Partner für dein Match.',
    descriptionEn:
      'The largest thermal spa in the region: relaxation, wellness & active holidays – the perfect match for your game.',
    location: 'Bad Waltersdorf',
    logoAlt: 'Heiltherme Bad Waltersdorf Logo',
    logoPath: '/assets/images/logos/heiltherme.at-logo-heiltherme.svg', // Lokaler Pfad
  },
  {
    id: 'steirerhof',
    name: 'Hotel & Spa Der Steirerhof',
    nameEn: 'Hotel & Spa Der Steirerhof',
    tier: 'silver',
    url: 'https://www.steirerhof.at',
    description:
      '5-Sterne-Wellnesshotel mit exklusivem Spa-Bereich – Premium-Gastgeber in der Thermenregion.',
    descriptionEn:
      '5-star wellness hotel with an exclusive spa area – premium hospitality in the thermal region.',
    location: 'Bad Waltersdorf',
    logoAlt: 'Der Steirerhof Logo',
    logoPath: '/assets/images/logos/steirerhof.at-logo.svg', // Lokaler Pfad
  },
  {
    id: 'vulkanland',
    name: 'Vulkanland Steiermark',
    nameEn: 'Vulkanland Styria',
    tier: 'silver',
    url: 'https://www.vulkanland.at',
    description:
      'Offizielle Dachmarke der Region: Gemeinsam für Genuss, Kulinarik und sportliche Erlebnisse.',
    descriptionEn:
      'Official umbrella brand of the region: Together for enjoyment, cuisine & sporting adventures.',
    location: 'Steiermark',
    logoAlt: 'Vulkanland Steiermark Logo',
    logoPath: '/assets/images/logos/vulkanland.at-logo-vulkanland.png', // Lokaler Pfad
  },
  {
    id: 'raiffeisen-thermenregion',
    name: 'Raiffeisenbank Thermenregion',
    nameEn: 'Raiffeisenbank Thermenregion',
    tier: 'silver',
    url: 'https://www.raiffeisen.at',
    description:
      'Starke regionale Bank mit Herz für die Region – finanziert Zukunft und Gemeinschaft.',
    descriptionEn:
      'Strong regional bank with a heart for the region – financing future and community.',
    location: 'Bad Waltersdorf / Burgau',
    logoAlt: 'Raiffeisenbank Logo',
    logoPath: '/assets/images/logos/raiffeisen.at-rb-thermenregion.svg', // Lokaler Pfad
  },

  // === BRONZE: Local Hero ===
  {
    id: 'tischlerei-zotter',
    name: 'Tischlerei Zotter',
    nameEn: 'Tischlerei Zotter',
    tier: 'bronze',
    url: 'https://www.tischlerei-zotter.at', // Aktualisierte URL
    description:
      'Traditionelles Handwerk aus Burgau: Maßarbeit in Holz – regional, präzise, zuverlässig.',
    descriptionEn:
      'Traditional craftsmanship from Burgau: Custom woodwork – regional, precise, reliable.',
    location: 'Burgau',
    logoAlt: 'Tischlerei Zotter Logo',
    logoPath: '/assets/images/logos/tischlerei-zotter.at-logo.svg', // Lokaler Pfad
  },
  {
    id: 'busreisen-postl',
    name: 'Busreisen Postl',
    nameEn: 'Busreisen Postl',
    tier: 'bronze',
    url: 'https://www.postl-reisen.at', // Aktualisierte URL
    description:
      'Regionale Mobilität für Gruppen, Vereine & Events – bringt Gäste sicher ins Match.',
    descriptionEn:
      'Regional mobility for groups, clubs & events – brings guests safely to their match.',
    location: 'Burgau',
    logoAlt: 'Busreisen Postl Logo',
    logoPath: '/assets/images/logos/postl-reisen.at-logo.png', // Lokaler Pfad
  },
  {
    id: 'nah-und-frisch',
    name: 'Nah&Frisch Burgau',
    nameEn: 'Nah&Frisch Burgau',
    tier: 'bronze',
    url: 'https://www.nahundfrisch.at', // Aktualisierte URL
    description:
      'Der Nahversorger in Burgau: täglich frisch, immer erreichbar – Lebensqualität vor Ort.',
    descriptionEn:
      'The local grocer in Burgau: daily fresh, always accessible – quality of life on site.',
    location: 'Burgau',
    logoAlt: 'Nah&Frisch Burgau Logo',
    logoPath: '/assets/images/logos/nahundfrisch.at-logo.svg', // Lokaler Pfad
  },
  {
    id: 'vulkanlandbrauerei',
    name: 'Steirische Vulkanlandbrauerei',
    nameEn: 'Styrian Vulkanland Brewery',
    tier: 'bronze',
    url: 'https://www.lavabraeu.at', // Aktualisierte URL
    description:
      'Regionale Braukunst aus dem Vulkanland – perfekt für Turniere, Events & das 19. Loch.',
    descriptionEn:
      'Regional brewing art from the Vulkanland – perfect for tournaments, events & the 19th hole.',
    location: 'Vulkanland',
    logoAlt: 'Vulkanlandbrauerei Logo',
    logoPath: '/assets/images/logos/lavabraeu.at-logo.svg', // Lokaler Pfad
  },
];

export function sponsorsByTier(tier: Sponsor['tier']): Sponsor[] {
  return sponsors.filter((s) => s.tier === tier);
}