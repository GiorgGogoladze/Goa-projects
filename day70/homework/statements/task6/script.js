function findSmallestNumber(num1, num2, num3) {
    let smallest = num1;

    if (num2 < smallest) {
        smallest = num2;
    }

    if (num3 < smallest) {
        smallest = num3;
    }

    return smallest;
}

// Example usage:
console.log(findSmallestNumber(5, 3, 8)); // Output: 3
console.log(findSmallestNumber(12, 7, 9)); // Output: 7
console.log(findSmallestNumber(15, 15, 15)); // Output: 15
