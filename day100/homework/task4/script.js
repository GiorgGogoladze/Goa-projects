function* wordGenerator(word) {
    for (let char of word) {
      yield char;
    }
  }
  
  const wordGen = wordGenerator('JavaScript');
  console.log(wordGen.next().value); // J
  console.log(wordGen.next().value); // a
  console.log(wordGen.next().value); // v
  