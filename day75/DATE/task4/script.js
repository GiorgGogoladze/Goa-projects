function daysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = Math.abs(date2 - date1);
    return Math.ceil(diffInTime / oneDay);
}

const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-31');
console.log(daysBetweenDates(date1, date2)); // 30
