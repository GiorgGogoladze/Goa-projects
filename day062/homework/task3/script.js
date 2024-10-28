function sumAllNumbers(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

// ფუნქციის გამოძახება და შედეგის დაბეჭდვა
let start = 1;
let end = 5;
let result = sumAllNumbers(start, end);
console.log(`რიცხვები ${start} და ${end} შორის ჯამი არის: ${result}`);
