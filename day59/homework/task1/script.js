function StringAndNumber(str, num, operator) {
    let result;

    switch (operator) {
        case '+':
            result = str + num;
            break;
        case '-':
            result = str - num;
            break;
        case '*':
            result = str * num;
            break;
        case '/':
            result = str / num;
            break;
        default:
            console.log('არასწორი ოპერატორი');
            return;
    }

    console.log(`შედეგი: ${result}`);
}

// ფუნქციის გამოძახება
StringAndNumber('10', 5, '+');  // შედეგი: 105
StringAndNumber('20', 4, '-');  // შედეგი: 16
StringAndNumber('5', 3, '*');   // შედეგი: 15
StringAndNumber('30', 6, '/');  // შედეგი: 5
StringAndNumber('abc', 10, '+'); // არასწორი ოპერატორი
