 // ოჯახის წევრები
   const family = {
    father: {
        firstName: "Vova",
        lastName: "Gogoladze",
        age: 38
    },
    mother: {
        firstName: "Tania",
        lastName: "Borovyk",
        age: 39
    },
    sister:{
        firstName:"Tina",
        lastName:"Gogoladze",
        age:10,
    }
};

// ყველა მათგანის დაბეჭდვა კონსოლში
console.log("Father:");
console.log(`Name: ${family.father.firstName} ${family.father.lastName}, Age: ${family.father.age}`);

console.log("\nMother:");
console.log(`Name: ${family.mother.firstName} ${family.mother.lastName}, Age: ${family.mother.age}`);

console.log("\nsister:");
console.log(`Name: ${family.sister.firstName} ${family.sister.lastName}, Age: ${family.sister.age}`);