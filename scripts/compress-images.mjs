import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const IMAGES_DIR = new URL('../src/assets/images', import.meta.url).pathname;
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 80;

const folders = [
  join(IMAGES_DIR, 'Hinh anh 3'),
  join(IMAGES_DIR, 'banner'),
  join(IMAGES_DIR, 'logo'),
];

async function convertToWebP(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const resize = metadata.width > MAX_WIDTH
      ? { width: MAX_WIDTH, withoutEnlargement: true }
      : undefined;

    await sharp(inputPath)
      .resize(resize)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    const inputSize = (await sharp(inputPath).toBuffer()).length;
    const outputSize = (await sharp(outputPath).toBuffer()).length;
    const savings = (((inputSize - outputSize) / inputSize) * 100).toFixed(1);
    console.log(`✓ ${basename(inputPath)} → ${basename(outputPath)} (${(inputSize/1024/1024).toFixed(1)}MB → ${(outputSize/1024/1024).toFixed(1)}MB, -${savings}%)`);
  } catch (err) {
    console.error(`✗ Failed: ${inputPath}`, err.message);
  }
}

async function processFolder(folder) {
  if (!existsSync(folder)) return;
  const files = readdirSync(folder).filter(f =>
    /\.(jpg|jpeg|png)$/i.test(f) && !f.startsWith('.')
  );

  for (const file of files) {
    const inputPath = join(folder, file);
    const outputPath = join(folder, basename(file, extname(file)) + '.webp');
    if (!existsSync(outputPath)) {
      await convertToWebP(inputPath, outputPath);
    } else {
      console.log(`skip (exists): ${basename(outputPath)}`);
    }
  }
}

console.log('Compressing images...\n');
for (const folder of folders) {
  await processFolder(folder);
}
console.log('\nDone!');
