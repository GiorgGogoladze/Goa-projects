let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2015,
    owner: {
        name: "MISTER MISTERIO",
        age: 19
    }
};

// Changing the model property
car.model = "Camry";

console.log("Updated Car Model: " + car.model);
console.log(car);
