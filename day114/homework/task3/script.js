const fs = require('fs');
const path = require('path');


function findTextInFolder(folder, textToFind) {
    let result = {
        foundIn: []
    };


    if (!fs.existsSync(folder)) {
        console.log(`ფოლდერი ${folder} არ არსებობს!`);
        return result;
    }

    const items = fs.readdirSync(folder); 

    items.forEach(item => {
        const itemPath = path.join(folder, item);

        if (fs.statSync(itemPath).isDirectory()) {

            const subFolderResults = findTextInFolder(itemPath, textToFind);
            result.foundIn.push(...subFolderResults.foundIn);
        } else {

            const content = fs.readFileSync(itemPath, 'utf8');
            if (content.includes(textToFind)) {
                result.foundIn.push(itemPath);
            }
        }
    });

    return result;
}


const folderPath = './homework'; 
const searchText = 'goa'; 
const result = findTextInFolder(folderPath, searchText);

console.log(JSON.stringify(result, null, 2)); 
