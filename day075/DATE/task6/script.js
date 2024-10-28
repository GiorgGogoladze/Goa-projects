function compareDates(date1, date2) {
    if (date1 < date2) return `${date1} is earlier than ${date2}`;
    else if (date1 > date2) return `${date1} is later than ${date2}`;
    else return `${date1} and ${date2} are the same`;
}

const dateA = new Date('2024-01-01');
const dateB = new Date('2024-01-01');
console.log(compareDates(dateA, dateB)); 