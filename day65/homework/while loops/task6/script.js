let n = 54321; 
let largest = 0;

while (n != 0) {
    let digit = n % 10;
    if (digit > largest) {
        largest = digit;
    }
    n = Math.floor(n / 10);
}

console.log(largest);
