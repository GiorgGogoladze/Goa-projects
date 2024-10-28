let array = [10, 5, 8, 20, 2];
let largest = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(largest);
