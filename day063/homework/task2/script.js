function compareNumbers() {
    const number1 = parseFloat(prompt("Enter the first number:"));
    const number2 = parseFloat(prompt("Enter the second number:"));

    const result = number1 > number2;
    console.log(`Is Number 1 (${number1}) greater than Number 2 (${number2})? ${result}`);
}

compareNumbers();
