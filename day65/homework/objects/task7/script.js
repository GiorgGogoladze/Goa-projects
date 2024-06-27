let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2015,
    owner: {
        name: "MISTER MISTERIO",
        age: 19
    },
    calculateAge: function(currentYear) {
        return currentYear - car.year;
    }
};

console.log("Car Age: " + car.calculateAge(2024));
