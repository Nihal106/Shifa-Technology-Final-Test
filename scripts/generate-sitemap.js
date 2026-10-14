import fs from 'fs';

const SITE_URL =
  process.env.VITE_SITE_URL || 'https://shifa-technology-final-test.vercel.app';
const today = new Date().toISOString().split('T')[0];

const categories = JSON.parse(
  fs.readFileSync('./src/data/categories.json', 'utf8')
);

const brands = JSON.parse(
  fs.readFileSync('./src/data/brands.json', 'utf8')
);

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
];

const categoryPages = categories.map((cat) => ({
  url: `/category/${cat.slug}`,
  priority: '0.9',
  changefreq: 'weekly',
}));

const brandPages = brands.map((brand) => ({
  url: `/brands/${brand.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
}));

const allUrls = [...staticPages, ...categoryPages, ...brandPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${page.url}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${SITE_URL}${page.url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${page.url}" />
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync('./public/sitemap.xml', xml.trim() + '\n', 'utf8');
console.log(`Generated sitemap.xml with ${allUrls.length} URLs.`);
