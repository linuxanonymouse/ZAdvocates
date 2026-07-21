const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace template literals: `http://localhost:4001...`
      if (content.includes('`http://localhost:4001')) {
        content = content.replace(/`http:\/\/localhost:4001([^`]+)`/g, "getApiUrl(`$1`)");
        changed = true;
      }
      
      // Replace normal strings: "http://localhost:4001..."
      if (content.includes('"http://localhost:4001')) {
        content = content.replace(/"http:\/\/localhost:4001([^"]+)"/g, "getApiUrl('$1')");
        changed = true;
      }

      if (content.includes("'http://localhost:4001")) {
        content = content.replace(/'http:\/\/localhost:4001([^']+)'/g, "getApiUrl('$1')");
        changed = true;
      }

      if (changed) {
        // Add import statement at top if not present
        if (!content.includes('getApiUrl')) {
          // This should never happen if we just replaced it, but check for the import
        }
        if (!content.includes("import { getApiUrl }")) {
          // Calculate relative path to lib/api.ts
          // e.g., from src/app/(public)/insights/page.tsx to src/lib/api.ts
          // The distance is: app/(public)/insights/page.tsx (depth 4 relative to src)
          // lib/api.ts is at depth 1 relative to src
          // A naive way: just use a relative path from the current file's dir to frontend/src/lib/api
          const srcDir = path.resolve(__dirname, 'frontend/src');
          const fileDir = path.dirname(fullPath);
          const libDir = path.join(srcDir, 'lib');
          let relativePath = path.relative(fileDir, libDir).replace(/\\/g, '/');
          if (!relativePath.startsWith('.')) relativePath = './' + relativePath;
          
          const importStmt = `import { getApiUrl } from '${relativePath}/api';\n`;
          content = importStmt + content;
        }
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir(path.resolve(__dirname, 'frontend/src'));
