function getDayOfWeek(number) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[number % 7];
}

console.log(getDayOfWeek(1)); // "Monday"
