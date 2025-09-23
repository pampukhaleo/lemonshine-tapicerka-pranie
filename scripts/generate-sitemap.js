import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read blog data
const blogDataPath = path.join(__dirname, '../src/data/blog.ts');
const blogData = fs.readFileSync(blogDataPath, 'utf8');

// Extract blog posts using regex
const blogPostsMatch = blogData.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
if (!blogPostsMatch) {
  console.error('Could not find blog posts data');
  process.exit(1);
}

// Extract slug and date information
const slugMatches = [...blogData.matchAll(/slug: '([^']+)'/g)];
const dateMatches = [...blogData.matchAll(/date: '([^']+)'/g)];

const blogPosts = slugMatches.map((slugMatch, index) => ({
  slug: slugMatch[1],
  date: dateMatches[index] ? dateMatches[index][1] : '2024-01-01'
}));

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return today.toISOString().split('T')[0];
};

// Define static pages
const staticPages = [
  { url: '/', lastmod: getCurrentDate(), changefreq: 'weekly', priority: '1.0' },
  { url: '/cennik/', lastmod: getCurrentDate(), changefreq: 'monthly', priority: '0.8' },
  { url: '/blog/', lastmod: getCurrentDate(), changefreq: 'weekly', priority: '0.9' },
  { url: '/polityka-prywatnosci/', lastmod: getCurrentDate(), changefreq: 'yearly', priority: '0.3' }
];

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>https://lemonshine.pl${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// Add blog posts
blogPosts.forEach(post => {
  const postDate = new Date(post.date);
  const today = new Date();
  const lastmod = postDate > today ? today.toISOString().split('T')[0] : post.date;
  
  sitemap += `  <url>
    <loc>https://lemonshine.pl/blog/${post.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += `</urlset>`;

// Write sitemap to public directory
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Sitemap generated with ${staticPages.length + blogPosts.length} URLs`);