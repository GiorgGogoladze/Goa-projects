let str = "hello"; // Example value
let reversed = "";
let i = str.length - 1;

while (i >= 0) {
    reversed += str[i];
    i--;
}

console.log(reversed);
