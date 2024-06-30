let n = 123; // Example value
let reversed = '';

while (n > 0) {
    reversed += n % 10;
    n = Math.floor(n / 10);
}

reversed = parseInt(reversed); // Convert the string back to a number if needed
console.log(reversed);
