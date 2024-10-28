const numbers = [1, 2, 3, 4, 3, 2, 5, 6, 7, 6];
const uniqueNumbersSet = new Set();

numbers.forEach((num) => {
  if (!uniqueNumbersSet.has(num)) {
    uniqueNumbersSet.add(num);
  }
});

console.log(uniqueNumbersSet); // Output: Set { 1, 2, 3, 4, 5, 6, 7 }
