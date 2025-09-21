import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create static route shells for GitHub Pages to serve 200 status
const createRouteShells = () => {
  const distPath = path.join(__dirname, '../dist');
  const indexPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.warn('⚠️  dist/index.html not found - skipping route shells creation');
    return;
  }

  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Static routes that need physical files
  const staticRoutes = [
    'cennik',
    'blog',
    'polityka-prywatnosci'
  ];

  // Read blog data to get all blog post slugs
  const blogDataPath = path.join(__dirname, '../src/data/blog.ts');
  const blogData = fs.readFileSync(blogDataPath, 'utf8');
  const slugMatches = [...blogData.matchAll(/slug: '([^']+)'/g)];
  const blogSlugs = slugMatches.map(match => match[1]);

  let createdFiles = 0;

  // Create static route directories and index.html files
  staticRoutes.forEach(route => {
    const routeDir = path.join(distPath, route);
    const routeIndexPath = path.join(routeDir, 'index.html');
    
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    fs.writeFileSync(routeIndexPath, indexContent);
    createdFiles++;
    console.log(`✅ Created /${route}/index.html`);
  });

  // Create blog post route shells
  blogSlugs.forEach(slug => {
    const blogPostDir = path.join(distPath, 'blog', slug);
    const blogPostIndexPath = path.join(blogPostDir, 'index.html');
    
    if (!fs.existsSync(blogPostDir)) {
      fs.mkdirSync(blogPostDir, { recursive: true });
    }
    
    fs.writeFileSync(blogPostIndexPath, indexContent);
    createdFiles++;
    console.log(`✅ Created /blog/${slug}/index.html`);
  });

  console.log(`\n🎉 Created ${createdFiles} route shell files for GitHub Pages`);
  console.log('📍 This ensures all routes return 200 status instead of 404');
};

createRouteShells();