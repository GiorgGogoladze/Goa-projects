function digitalClock() {
    setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString());
    }, 1000);
}

digitalClock();
