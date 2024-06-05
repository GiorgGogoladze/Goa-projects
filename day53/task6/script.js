let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        if (b === 0) {
            return "Error: Division by zero!";
        }
        return a / b;
    },

    calculateQuality: function(a, b, c, d) {
        let sum = a + b + c + d;
        return sum / 4;
    }
};

// Example usage
let result1 = calculator.add(10, 5);
let result2 = calculator.subtract(20, 7);
let result3 = calculator.multiply(4, 3);
let result4 = calculator.divide(15, 3);
let quality = calculator.calculateQuality(4, 3, 5, 2);

// Output results
console.log("Result of addition:", result1);
console.log("Result of subtraction:", result2);
console.log("Result of multiplication:", result3);
console.log("Result of division:", result4);
console.log("Quality calculation result:", quality);
