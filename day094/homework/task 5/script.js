class Animal {
    constructor(breed, color, length, sound) {
      this.breed = breed;
      this.color = color;
      this.length = length; // სიგრძე
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.sound}!`);
    }
  
    getInfo() {
      return `This is a ${this.breed} with ${this.color} color, and it is ${this.length} cm long.`;
    }
  }
  
  // მაგალითი:
  const dog = new Animal('German Shepherd', 'black and tan', 100, 'Woof');
  dog.makeSound();  // "Woof!"
  console.log(dog.getInfo()); // "This is a German Shepherd with black and tan color, and it is 100 cm long."
  
  const cat = new Animal('Siamese', 'gray', 50, 'Meow');
  cat.makeSound();  // "Meow!"
  console.log(cat.getInfo()); // "This is a Siamese with gray color, and it is 50 cm long."
  