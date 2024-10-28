function removeDuplicates(array) {
    return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // გამოიტანს: [1, 2, 3, 4, 5]
