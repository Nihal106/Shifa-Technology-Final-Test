import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');

const titleMatch = html.match(/<title>(.*?)<\/title>/i);
const title = titleMatch ? titleMatch[1] : '';

const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
const desc = descMatch ? descMatch[1] : '';

const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
const canon = canonMatch ? canonMatch[1] : '';

const h1s = [...html.matchAll(/<h1[^>]*>(.*?)<\/h1>/gis)].map((m) =>
  m[1].replace(/<[^>]+>/g, '').trim()
);
const h2s = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gis)].map((m) =>
  m[1].replace(/<[^>]+>/g, '').trim()
);
const links = [...html.matchAll(/<a\s+[^>]*href=["'](.*?)["'][^>]*>(.*?)<\/a>/gis)].map((m) => ({
  href: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim(),
}));

const textOnly = html
  .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const words = textOnly.split(' ').filter((w) => w.length > 0);

console.log('=== SEO AUDIT VERIFICATION ===');
console.log(`Title (${title.length} chars): "${title}"`);
console.log(`Description (${desc.length} chars): "${desc}"`);
console.log(`Canonical URL: ${canon}`);
console.log(`H1 Count: ${h1s.length}`, h1s);
console.log(`H2 Count: ${h2s.length}`, h2s);
console.log(`Internal Links Count: ${links.length}`);
console.log(`Total Word Count: ${words.length}`);
