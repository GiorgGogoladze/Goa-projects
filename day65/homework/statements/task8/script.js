function convertToLetterGrade(numericGrade) {
    if (numericGrade >= 90 && numericGrade <= 100) {
        return 'A';
    } else if (numericGrade >= 80 && numericGrade < 90) {
        return 'B';
    } else if (numericGrade >= 70 && numericGrade < 80) {
        return 'C';
    } else if (numericGrade >= 60 && numericGrade < 70) {
        return 'D';
    } else if (numericGrade >= 0 && numericGrade < 60) {
        return 'F';
    } else {
        return 'Invalid grade';
    }
}

// Example usage:
console.log(convertToLetterGrade(95)); // Output: A
console.log(convertToLetterGrade(85)); // Output: B
console.log(convertToLetterGrade(75)); // Output: C
console.log(convertToLetterGrade(65)); // Output: D
console.log(convertToLetterGrade(55)); // Output: F
console.log(convertToLetterGrade(-5)); // Output: Invalid grade
console.log(convertToLetterGrade(105)); // Output: Invalid grade
