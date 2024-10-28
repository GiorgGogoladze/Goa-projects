class CollectionManager {
    constructor() {
      this.myMap = new Map();
      this.mySet = new Set();
    }
  
    addToMap(key, value) {
      this.myMap.set(key, value);
    }
  
    removeFromMap(key) {
      this.myMap.delete(key);
    }
  
    addToSet(item) {
      this.mySet.add(item);
    }
  
    clearSet() {
      this.mySet.clear();
    }
  
    showMap() {
      console.log('Map elements:');
      this.myMap.forEach((value, key) => {
        console.log(`Key: ${key}, Value: ${value}`);
      });
    }
  
    showSet() {
      console.log('Set elements:');
      this.mySet.forEach((item) => {
        console.log(item);
      });
    }
  }
  
  // კლასის ტესტირება
  const manager = new CollectionManager();
  manager.addToMap('city', 'Tbilisi');
  manager.addToMap('country', 'Georgia');
  manager.showMap();
  
  manager.removeFromMap('city');
  manager.showMap();
  
  manager.addToSet('Apple');
  manager.addToSet('Banana');
  manager.showSet();
  
  manager.clearSet();
  manager.showSet();
  