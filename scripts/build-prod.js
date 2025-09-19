#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Remove development CSP meta tag from production build
const indexPath = path.join(__dirname, '../dist/index.html');

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Remove the development CSP meta tag
  content = content.replace(
    /<meta id="dev-csp"[^>]*>/g,
    '<!-- CSP handled by Netlify headers in production -->'
  );
  
  fs.writeFileSync(indexPath, content);
  console.log('✅ Removed development CSP from production build');
} else {
  console.log('⚠️  Production index.html not found - CSP cleanup skipped');
}
