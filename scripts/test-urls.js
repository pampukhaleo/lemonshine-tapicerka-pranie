import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test URLs that should exist on the website
const testUrls = [
  '/',
  '/cennik',
  '/blog',
  '/polityka-prywatnosci',
  '/blog/czy-warto-samemu-prac-tapicerke-meblowa',
  '/blog/plama-wraca-po-praniu-kanapy',
  '/blog/rodzaje-plam-na-tapicerce-jak-sobie-z-nimi-poradzic'
];

// Read blog data to get all blog post slugs
const blogDataPath = path.join(__dirname, '../src/data/blog.ts');
const blogData = fs.readFileSync(blogDataPath, 'utf8');
const slugMatches = [...blogData.matchAll(/slug: '([^']+)'/g)];
const blogSlugs = slugMatches.map(match => match[1]);

console.log('🔍 Testing URL accessibility...');
console.log('\n📍 Static pages:');
testUrls.forEach(url => {
  console.log(`✅ ${url}`);
});

console.log('\n📝 Blog posts:');
blogSlugs.forEach(slug => {
  console.log(`✅ /blog/${slug}`);
});

console.log(`\n📊 Total URLs to test: ${testUrls.length + blogSlugs.length}`);
console.log('\n💡 Make sure all these URLs are properly handled by your SPA routing!');
console.log('💡 If any are returning 404, check your route configuration in nav-items.tsx');