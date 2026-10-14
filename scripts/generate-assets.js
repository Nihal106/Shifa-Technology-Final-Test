import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateIcons() {
  console.log('Generating site icons and favicons...');
  const svgPath = 'public/favicon.svg';

  if (!fs.existsSync(svgPath)) {
    console.error('favicon.svg not found!');
    return;
  }

  // 1. 32x32 favicon
  await sharp(svgPath)
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  // 2. 48x48 favicon.png
  await sharp(svgPath)
    .resize(48, 48)
    .png()
    .toFile('public/favicon.png');

  // 3. Apple Touch Icon (180x180)
  await sharp(svgPath)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // 4. Android Chrome 192x192
  await sharp(svgPath)
    .resize(192, 192)
    .png()
    .toFile('public/android-chrome-192x192.png');

  // 5. Android Chrome 512x512
  await sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile('public/android-chrome-512x512.png');

  console.log('Icons generated successfully.');
}

async function generateOgImage() {
  console.log('Generating Open Graph social card (og-image.jpg)...');
  
  // Render logo SVG to 200x200 buffer
  const logoBuffer = await sharp('public/favicon.svg')
    .resize(180, 180)
    .png()
    .toBuffer();

  const svgCard = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="60%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="10" fill="url(#accent)"/>

  <!-- Decorative circles -->
  <circle cx="1120" cy="80" r="280" fill="#2563eb" opacity="0.08"/>
  <circle cx="80" cy="560" r="220" fill="#10b981" opacity="0.05"/>

  <!-- Region Tag -->
  <rect x="80" y="70" width="230" height="36" rx="18" fill="#1e3a8a" fill-opacity="0.7" stroke="#3b82f6" stroke-width="1"/>
  <text x="195" y="93" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle" letter-spacing="1.5">SAUDI ARABIA • JEDDAH</text>

  <!-- Content text -->
  <text x="80" y="175" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="#ffffff">Shifa Technologies</text>
  <text x="80" y="235" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="38" font-weight="700" fill="#38bdf8">شركة شفاء للتقنيات</text>

  <text x="80" y="305" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600" fill="#e2e8f0">Medical Equipment &amp; Healthcare Solutions</text>
  <text x="80" y="350" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="400" fill="#94a3b8">Biomedical Spare Parts • Hospital Furniture • Medical Disposables • PPM Service</text>

  <!-- Divider line -->
  <line x1="80" y1="410" x2="1120" y2="410" stroke="#334155" stroke-width="1.5"/>

  <!-- Features list -->
  <rect x="80" y="445" width="280" height="42" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="220" y="471" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#38bdf8" text-anchor="middle">✓ Hospital-Grade Equipment</text>

  <rect x="380" y="445" width="280" height="42" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="520" y="471" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#34d399" text-anchor="middle">✓ SFDA Compliant Standards</text>

  <rect x="680" y="445" width="280" height="42" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="820" y="471" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#60a5fa" text-anchor="middle">✓ Fast Kingdom-Wide Delivery</text>

  <!-- Footer contact info -->
  <text x="80" y="555" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="600" fill="#f8fafc">🌐 www.shifatechnologies.com</text>
  <text x="420" y="555" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#94a3b8">📞 +966 53 384 5516</text>
  <text x="680" y="555" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#94a3b8">✉️ shifatech279@gmail.com</text>
</svg>
`;

  await sharp(Buffer.from(svgCard))
    .composite([
      {
        input: logoBuffer,
        top: 80,
        left: 920,
      },
    ])
    .jpeg({ quality: 90, progressive: true })
    .toFile('public/images/og-image.jpg');

  console.log('og-image.jpg generated.');
}

async function optimizeLargeImages() {
  console.log('Optimizing large images...');

  // 1. logo.png (originally 2.05 MB)
  if (fs.existsSync('public/images/logo.png')) {
    const origSize = fs.statSync('public/images/logo.png').size;
    const buf = await sharp('public/images/logo.png')
      .resize({ width: 320, withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync('public/images/logo.png', buf);
    console.log(`logo.png: ${(origSize/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
  }

  // 2. hero.jpg (originally 1.93 MB)
  if (fs.existsSync('public/images/hero.jpg')) {
    const origSize = fs.statSync('public/images/hero.jpg').size;
    const buf = await sharp('public/images/hero.jpg')
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync('public/images/hero.jpg', buf);
    console.log(`hero.jpg: ${(origSize/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
  }

  // 3. Scan all images in public/images > 250KB and optimize them
  function walk(dir) {
    let files = [];
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
      else files.push(full);
    }
    return files;
  }

  const all = walk('public/images');
  for (const file of all) {
    if (file.endsWith('og-image.jpg') || file.endsWith('logo.png') || file.endsWith('hero.jpg')) continue;
    const size = fs.statSync(file).size;
    if (size > 250 * 1024) {
      try {
        const ext = path.extname(file).toLowerCase();
        let buf;
        if (ext === '.jpg' || ext === '.jpeg') {
          buf = await sharp(file)
            .resize({ width: 800, withoutEnlargement: true })
            .jpeg({ quality: 80, progressive: true, mozjpeg: true })
            .toBuffer();
        } else if (ext === '.png') {
          buf = await sharp(file)
            .resize({ width: 800, withoutEnlargement: true })
            .png({ quality: 80, compressionLevel: 9 })
            .toBuffer();
        }
        if (buf && buf.length < size) {
          fs.writeFileSync(file, buf);
          console.log(`Optimized ${file}: ${(size/1024).toFixed(1)} KB -> ${(buf.length/1024).toFixed(1)} KB`);
        }
      } catch (err) {
        console.warn(`Could not optimize ${file}:`, err.message);
      }
    }
  }
}

async function main() {
  try {
    await generateIcons();
    await generateOgImage();
    await optimizeLargeImages();
    console.log('All asset optimizations complete!');
  } catch (err) {
    console.error('Error in asset optimization:', err);
    process.exit(1);
  }
}

main();
