let n = 121; // Example value
let original = n;
let reversed = 0;

while (n != 0) {
    reversed = reversed * 10 + n % 10;
    n = Math.floor(n / 10);
}

console.log(original === reversed);
