import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy index.html to 404.html for GitHub Pages SPA routing
const indexPath = path.join(__dirname, '../dist/index.html');
const notFoundPath = path.join(__dirname, '../dist/404.html');

if (fs.existsSync(indexPath)) {
  // Read the original index.html
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add GitHub Pages SPA routing script before closing </head>
  const spaScript = `
  <script>
    // GitHub Pages SPA routing
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
</head>`;
  
  indexContent = indexContent.replace('</head>', spaScript);
  
  fs.writeFileSync(notFoundPath, indexContent);
  console.log('✅ Created 404.html with SPA routing for GitHub Pages');
} else {
  console.warn('⚠️  dist/index.html not found - skipping 404.html creation');
}