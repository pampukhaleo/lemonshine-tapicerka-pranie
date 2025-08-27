const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html for GitHub Pages SPA routing
const indexPath = path.join(__dirname, '../dist/index.html');
const notFoundPath = path.join(__dirname, '../dist/404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✅ Created 404.html for GitHub Pages SPA routing');
} else {
  console.warn('⚠️  dist/index.html not found - skipping 404.html creation');
}