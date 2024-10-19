function* evenNumbers() {
    let i = 0;
    while (true) {
      yield i;
      i += 2;
    }
  }
  
  const evenNumbersGenerator = evenNumbers();
  console.log(evenNumbersGenerator.next().value); // 0
  console.log(evenNumbersGenerator.next().value); // 2
  console.log(evenNumbersGenerator.next().value); // 4
  