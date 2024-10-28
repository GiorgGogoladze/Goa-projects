function countdown(number) {
    if (number > 0) {
        console.log(number);
        setTimeout(() => countdown(number - 1), 1000);
    } else {
        console.log("Done!");
    }
}

countdown(5);
