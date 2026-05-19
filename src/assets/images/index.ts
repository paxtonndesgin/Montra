// ─── LOGO ─────────────────────────────────────────────────────────────────────
import LogoMain from './logo/logo.svg';

// ─── BANNERS (shared CTA backgrounds) ─────────────────────────────────────────
import BannerOne from './banner/bannerone.webp';
import BannerTwo from './banner/bannertwo.png';

const SOURCE_PHOTO_BASE = '/images/source_photo';
const sourcePhoto = (fileName: string) => `${SOURCE_PHOTO_BASE}/${fileName}`;

// ─────────────────────────────────────────────────────────────────────────────
// Static-import image map (for components that use next/image with imported files)
// ─────────────────────────────────────────────────────────────────────────────
export const IMAGES = {
  // Logo
  LOGO_MAIN: LogoMain,

  // Banners (CTA backgrounds)
  BANNER_1: BannerOne,
  BANNER_2: BannerTwo,

  // Home
  HOME_HERO:       sourcePhoto('home-1.jpg'),
  HOME_PRACTICE_1: sourcePhoto('home-2.jpg'),
  HOME_PRACTICE_2: sourcePhoto('home-3.jpg'),

  // About
  ABOUT_BANNER_LEFT:    sourcePhoto('about-1.jpg'),
  ABOUT_BANNER_CENTER:  sourcePhoto('about-2.jpg'),
  ABOUT_BANNER_RIGHT:   sourcePhoto('about-3.jpg'),
  ABOUT_ACHIEVEMENT:    sourcePhoto('about-achievement-4.webp'),
  ABOUT_ACHIEVEMENT_2:  sourcePhoto('about-achievement-1.jpg'),
  ABOUT_ACHIEVEMENT_3:  sourcePhoto('about-achievement-2.jpg'),
  ABOUT_ACHIEVEMENT_4:  sourcePhoto('about-achievement-3.jpg'),

  // Service – ACOT (Aged Care OT)
  ACOT_BANNER:    sourcePhoto('acot-1.jpg'),
  ACOT_SERVICE_1: sourcePhoto('acot-2.jpg'),
  ACOT_SERVICE_2: sourcePhoto('acot-3.jpg'),
  ACOT_SERVICE_3: sourcePhoto('acot-4.jpg'),
  ACOT_SERVICE_4: sourcePhoto('acot-5.jpg'),

  // Service – ATA
  ATA_BANNER:      sourcePhoto('ata-0.webp'),
  ATA_PARTICIPANT: sourcePhoto('ata-1.jpg'),
  ATA_COORDINATOR: sourcePhoto('ata-2.jpg'),
  ATA_FAMILY:      sourcePhoto('ata-3.webp'),

  // Service – FCA
  FCA_BANNER:   sourcePhoto('fca-1.webp'),
  FCA_SERVICE:  sourcePhoto('fca-2.jpg'),

  // Service – HMA
  HMA_BANNER:    sourcePhoto('hma-1.jpg'),
  HMA_STRATEGIC: sourcePhoto('hma-2.jpg'),

  // Service – OOT
  OOT_BANNER:        sourcePhoto('oot-5.webp'),
  OOT_TARGETED_CARE: sourcePhoto('oot-1.jpg'),
  OOT_PARTICIPANTS:  sourcePhoto('oot-2.jpg'),
  OOT_INDEPENDENCE:  sourcePhoto('oot-3.jpg'),
  OOT_COGNITIVE:     sourcePhoto('oot-4.jpg'),

  // Service – POT (Paediatric OT)
  POT_BANNER: sourcePhoto('pot-1.jpg'),
};

// ─────────────────────────────────────────────────────────────────────────────
// Public-folder image paths (for content files that pass URLs as strings)
// ─────────────────────────────────────────────────────────────────────────────
export const PUBLIC_IMAGES = {
  // About
  ABOUT_BANNER: sourcePhoto('about-1.jpg'),
  ABOUT_BANNER_CENTER: sourcePhoto('about-2.jpg'),
  ABOUT_BANNER_RIGHT: sourcePhoto('about-3.jpg'),
  ABOUT_ACHIEVEMENT: sourcePhoto('about-achievement-4.webp'),

  // Service – Aged Care (ACOT)
  AGED_CARE_BANNER: sourcePhoto('acot-1.jpg'),
  AGED_CARE_CTA:    sourcePhoto('acot-2.jpg'),

  // Service – Paediatric (POT)
  PAEDIATRIC_BANNER: sourcePhoto('pot-1.jpg'),
  PAEDIATRIC_CTA:    sourcePhoto('pot-1.jpg'),

  // Service – ATA
  ATA_BANNER: sourcePhoto('ata-0.webp'),

  // Service – FCA
  FCA_BANNER: sourcePhoto('fca-1.webp'),

  // Service – HMA (Home Modification Assessments)
  HMA_BANNER:    sourcePhoto('hma-1.jpg'),
  HMA_STRATEGIC: sourcePhoto('hma-2.jpg'),
  HMA_CTA:       sourcePhoto('hma-2.jpg'),

  // Service – OOT
  OOT_BANNER:       sourcePhoto('oot-5.webp'),
  OOT_DAILY_LIVING: sourcePhoto('oot-2.jpg'),
  OOT_INDEPENDENCE: sourcePhoto('oot-3.jpg'),
  OOT_COGNITIVE:    sourcePhoto('oot-4.jpg'),
  OOT_TARGETED:     sourcePhoto('oot-1.jpg'),
};

