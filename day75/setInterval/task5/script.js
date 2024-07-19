function generateRandomWord(words) {
    setInterval(() => {
        console.log(words[Math.floor(Math.random() * words.length)]);
    }, 2000);
}

const words = ["apple", "banana", "cherry", "date", "elderberry"];
generateRandomWord(words);
