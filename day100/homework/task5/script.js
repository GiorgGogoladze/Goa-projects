function* randomPasswordGenerator() {
    const digits = '0123456789';
    while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += digits[Math.floor(Math.random() * digits.length)];
      }
      yield password;
    }
  }
  
  const passwordGen = randomPasswordGenerator();
  console.log(passwordGen.next().value); 
  console.log(passwordGen.next().value); 
  