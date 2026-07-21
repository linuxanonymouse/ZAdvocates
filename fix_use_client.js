const fs = require('fs');
const path = require('path');

// Fix api.ts
const apiTsPath = path.resolve(__dirname, 'frontend/src/lib/api.ts');
let apiContent = fs.readFileSync(apiTsPath, 'utf8');
apiContent = apiContent.replace(/import \{ getApiUrl \} from '\.\/\/api';\r?\n/, '');
fs.writeFileSync(apiTsPath, apiContent);

// Fix other files
function fixUseClient(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixUseClient(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if "use client" is in the file but not at the very top
      const useClientRegex = /^"use client";\r?\n/m;
      const match = content.match(useClientRegex);
      
      if (match && match.index > 0) {
        // Remove all "use client";
        content = content.replace(/^"use client";\r?\n/gm, '');
        // Add to the top
        content = '"use client";\n' + content;
        fs.writeFileSync(fullPath, content);
        console.log('Fixed ' + fullPath);
      }
    }
  }
}

fixUseClient(path.resolve(__dirname, 'frontend/src/app'));
