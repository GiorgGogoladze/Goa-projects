const fs = require('fs');
const path = require('path');


function deleteFoldersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        const folderName = `folder${i}`;
        

        if (fs.existsSync(folderName)) {

            fs.rmSync(folderName, { recursive: true, force: true });
            console.log(`წაიშალა ფოლდერი ${folderName}`);
        } else {
            console.log(`ფოლდერი ${folderName} არ არსებობს.`);
        }
    }
}

deleteFoldersInRange(3, 7);
