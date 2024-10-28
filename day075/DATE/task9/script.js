function daysUntilNextBirthday(birthdate) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextBirthday = new Date(birthdate);
    nextBirthday.setFullYear(currentYear);

    if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    const timeDiff = nextBirthday - now;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
}

const birthdate = new Date('1990-07-20');
console.log(daysUntilNextBirthday(birthdate)); // e.g., "1 day"
