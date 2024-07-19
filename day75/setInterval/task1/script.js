function countdown(seconds) {
    const intervalId = setInterval(() => {
        console.log(`Time left: ${seconds} seconds`);
        seconds--;
        if (seconds < 0) {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);
}

countdown(10);
