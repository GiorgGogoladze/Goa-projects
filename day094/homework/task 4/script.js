class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    startEngine() {
      console.log('Engine started');
    }
  
    stopEngine() {
      console.log('Engine stopped');
    }
  }
  
  // მაგალითი:
  const car1 = new Car('Toyota', 'Camry', 2021);
  car1.startEngine(); // "Engine started"
  car1.stopEngine();  // "Engine stopped"
  
  const car2 = new Car('Tesla', 'Model 3', 2022);
  car2.startEngine(); // "Engine started"
  car2.stopEngine();  // "Engine stopped"
  