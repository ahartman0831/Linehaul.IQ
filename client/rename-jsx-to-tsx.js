const fs = require('fs');
const path = require('path');

function renameJsxToTsx(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      renameJsxToTsx(fullPath);
    } else if (file.endsWith('.jsx')) {
      const tsxPath = fullPath.replace(/\.jsx$/, '.tsx');
      fs.renameSync(fullPath, tsxPath);
      console.log(`Renamed: ${fullPath} -> ${tsxPath}`);
    }
  });
}

// Change this path if your client directory is elsewhere
renameJsxToTsx('src');