function* improvedPasswordGenerator() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?/';
    while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
      yield password;
    }
  }
  
  const improvedPasswordGen = improvedPasswordGenerator();
  console.log(improvedPasswordGen.next().value); 
  console.log(improvedPasswordGen.next().value); 
  