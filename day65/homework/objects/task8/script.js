let person = {
    name: "MISTER GIO",
    age: 13,
    city: "TBILISI"
};

// Iterating over all properties and logging them
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
