class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // super გამოიყენება მშობლის კონსტრუქტორის გამოძახებისთვის
      this.grade = grade;
    }
  
    study() {
      return `${this.name} is studying.`;
    }
  }
  
  // მაგალითი:
  const student1 = new Student('Alice', 20, 'A');
  console.log(student1.greet()); // "Hello, my name is Alice and I am 20 years old."
  console.log(student1.study()); // "Alice is studying."
  