class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      return a / b;
    }
  }
  
  // მაგალითი:
  console.log(Calculator.add(10, 5));      // 15
  console.log(Calculator.subtract(10, 5)); // 5
  console.log(Calculator.multiply(10, 5)); // 50
  console.log(Calculator.divide(10, 5));   // 2
  