const fs = require('fs');

for (let i = 1; i <= 50; i++) {
    const folderName = `კატლეტი${i}`;
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log(`დაამზადეს 50 კატლეტი: ${folderName}`);
    }
}
