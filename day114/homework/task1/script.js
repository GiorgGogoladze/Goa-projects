const fs = require('fs');

for (let i = 1; i <= 10; i++) {
    const folderName = `folder${i}`;

    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log(`შექმნილია ${folderName}`);
    }


    const classworkFolder = `${folderName}/classwork`;
    const homeworkFolder = `${folderName}/homework`;

    if (!fs.existsSync(classworkFolder)) {
        fs.mkdirSync(classworkFolder);
        console.log(`შექმნილია ${classworkFolder}`);
    }

    if (!fs.existsSync(homeworkFolder)) {
        fs.mkdirSync(homeworkFolder);
        console.log(`შექმნილია ${homeworkFolder}`);
    }


    const classworkFile = `${classworkFolder}/classwork.js`;
    const homeworkFile = `${homeworkFolder}/homework.js`;


    fs.writeFileSync(classworkFile, 'console.log("goa best");');
    fs.writeFileSync(homeworkFile, 'console.log("goa best");');
    
    console.log(`დაამზადეს ფაილები ${classworkFile} და ${homeworkFile}`);
}
