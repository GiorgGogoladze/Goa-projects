let n = 29; // Example value
let isPrime = n > 1;
let i = 2;

while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}

console.log(isPrime);
