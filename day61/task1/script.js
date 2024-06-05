function isTeenager(age, hasPermission) {
    if (age < 18 && !hasPermission) {
        return false;
    } else if (age === 18 && hasPermission) {
        return true;
    } else {
        return false;
    }
}

// მაგ
console.log(isTeenager(17, false)); // false
console.log(isTeenager(17, true));  // false
console.log(isTeenager(18, false)); // false
console.log(isTeenager(18, true));  // true
console.log(isTeenager(19, false)); // false
console.log(isTeenager(19, true));  // false
