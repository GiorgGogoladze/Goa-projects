function* infiniteNumbers() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  
  const numbersGenerator = infiniteNumbers();
  console.log(numbersGenerator.next().value); // 0
  console.log(numbersGenerator.next().value); // 1
  console.log(numbersGenerator.next().value); // 2
  