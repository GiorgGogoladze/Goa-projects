const processData = () => {

    const fruits = ['apple', 'banana', 'orange'];


    const person = {
        name: 'giorgi',
        age: 13,
        profession: 'Developer'
    };


    console.log('Fruits:');
    for (let fruit of fruits) {
        console.log(fruit);
    }

    console.log('\nPerson Details:');
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
};

processData();