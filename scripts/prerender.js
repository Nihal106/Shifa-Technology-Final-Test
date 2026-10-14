import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.shifatechnologies.com';

const categories = JSON.parse(
  fs.readFileSync('./src/data/categories.json', 'utf8')
);

const brands = JSON.parse(
  fs.readFileSync('./src/data/brands.json', 'utf8')
);

const routes = [
  {
    path: '/about',
    title: 'About Us | Shifa Technologies Medicals Co.',
    description:
      'Learn more about Shifa Technologies, our mission, vision, and commitment to delivering quality medical equipment across Saudi Arabia.',
  },
  {
    path: '/contact',
    title: 'Contact Us | Shifa Technologies Medicals Co.',
    description:
      'Contact Shifa Technologies for medical equipment quotes, inquiries, biomedical spare parts, and hospital solutions in Jeddah and Saudi Arabia.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Shifa Technologies Medicals Co.',
    description: 'Read the Privacy Policy of Shifa Technologies Medicals Co.',
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | Shifa Technologies Medicals Co.',
    description:
      'Read the Terms & Conditions of Shifa Technologies Medicals Co.',
  },
  ...categories.map((cat) => ({
    path: `/category/${cat.slug}`,
    title: `${cat.name.en} | Shifa Technologies Medicals Co.`,
    description: `${cat.description.en} Explore medical equipment and healthcare solutions from Shifa Technologies in Saudi Arabia.`,
  })),
  ...brands.map((brand) => ({
    path: `/brands/${brand.slug}`,
    title: `${brand.name} Medical Products | Shifa Technologies`,
    description: `Explore authorized ${brand.name} medical equipment, spare parts, and hospital supplies from Shifa Technologies Saudi Arabia.`,
  })),
];

function prerender() {
  const distIndexPath = path.resolve('dist/index.html');
  if (!fs.existsSync(distIndexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    return;
  }

  const baseHtml = fs.readFileSync(distIndexPath, 'utf8');

  // Also create 404.html for GitHub Pages / static hosts SPA fallback
  fs.writeFileSync(path.resolve('dist/404.html'), baseHtml, 'utf8');
  console.log('Created dist/404.html for static routing support.');

  for (const route of routes) {
    const fullUrl = `${SITE_URL}${route.path}`;
    let html = baseHtml;

    // Replace Title
    html = html.replace(
      /<title>.*?<\/title>/i,
      `<title>${route.title}</title>`
    );

    // Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace Canonical Link
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${fullUrl}" />`
    );

    // Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${fullUrl}" />`
    );

    // Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    const outDir = path.resolve(`dist${route.path}`);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
    console.log(`Generated prerendered HTML for: ${route.path}`);
  }

  console.log(`Successfully generated static HTML for ${routes.length} routes.`);
}

prerender();
