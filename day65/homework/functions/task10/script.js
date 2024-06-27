function isPerfectNumber(number) {
    if (number < 2) return false;
    let sumDivisors = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sumDivisors += i;
        }
    }
    return sumDivisors === number;
}
