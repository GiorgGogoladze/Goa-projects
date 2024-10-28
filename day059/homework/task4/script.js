function parseStringData(data) {
    let parsedInt = parseInt(data);
    let parsedFloat = parseFloat(data);

    console.log(`Original String: "${data}"`);
    console.log(`Parsed Int: ${parsedInt}`);
    console.log(`Parsed Float: ${parsedFloat}`);
}

parseStringData("123.45");
parseStringData("456.78");
parseStringData("789");
parseStringData("123abc");

