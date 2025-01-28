const person = new Map();
person.set("name", "გიორგი");
person.set("surname", "გოგოლაძე");
person.set("age", 14);

console.log(person.get("name"));    
console.log(person.get("surname")); 
console.log(person.get("age"));     

//
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 7, 8];
const uniqueNumbers = new Set(numbers);

console.log([...uniqueNumbers]); //[1, 2, 3, 4, 5, 6, 7, 8]
