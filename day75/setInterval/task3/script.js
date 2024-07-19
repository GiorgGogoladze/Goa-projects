function generateRandomNumber() {
    setInterval(() => {
        console.log(Math.floor(Math.random() * 100) + 1);
    }, 2000);
}

generateRandomNumber();
