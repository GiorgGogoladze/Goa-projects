function checkArrayLength(numbers) {
    return new Promise((resolve, reject) => {
        if (numbers.length > 6) {
            reject("Error: სიის სიგრძე 6-ზე მეტია!");
        } else {
            resolve(`სია მიღებულია: ${numbers}`);
        }
    });
}
