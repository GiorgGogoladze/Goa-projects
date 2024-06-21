function checkLeapYear(year) {
    let isLeapYear = false;
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    }

    if (isLeapYear) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

// Example usage:
checkLeapYear(2020); // Output: 2020 is a leap year.
checkLeapYear(2021); // Output: 2021 is not a leap year.
checkLeapYear(1900); // Output: 1900 is not a leap year.
checkLeapYear(2000); // Output: 2000 is a leap year.
