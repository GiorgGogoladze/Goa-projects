function sumEvenNumbers(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) { // თუ i ლუწია
            sum += i; // ჯამს დაამატებს
        }
    }

    return sum;
}

// ფუნქციის გამოძახება და შედეგის დაბეჭდვა
let start = 1;
let end = 10;
let result = sumEvenNumbers(start, end);
console.log(`რიცხვები ${start} და ${end} შორის ლუწი რიცხვების ჯამი არის: ${result}`);
