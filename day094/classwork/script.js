class Animal {
    constructor(name) {
      this.name = "katletyani";
    }
  
    getAction(action) {
      return `${this.name} ${action}-ს.`;
    }
  }
  
  // ცხოველის ობიექტების შექმნა
  const dog = new Animal("ძაღლი");
  const cat = new Animal("კატა");
  
  console.log(dog.getAction("ყეფავს"));
  console.log(cat.getAction("მიალებს"));
  
  console.log("------------ Static მეთოდი ------------");
  
  class AnimalHelper {
    static describe(animal, action) {
      return `${animal.name} ხშირად ${action}-ს!`;
    }
  }
  
  console.log(AnimalHelper.describe(dog, "ყეფავს"));
  console.log(AnimalHelper.describe(cat, "მიალებს"));
  