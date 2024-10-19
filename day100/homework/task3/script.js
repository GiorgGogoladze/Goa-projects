function* randomNumbers() {
    while (true) {
      yield Math.random();
    }
  }
  
  const randomNumberGenerator = randomNumbers();
  console.log(randomNumberGenerator.next().value); // შემთხვევითი რიცხვი
  console.log(randomNumberGenerator.next().value); // შემთხვევითი რიცხვი
  