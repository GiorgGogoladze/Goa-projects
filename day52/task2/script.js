function ageCheck(age) {
    if (age > 18) {
        console.log("ასაკი მეტია 18-ზე");
    } else if (age < 18) {
        console.log("ასაკი ნაკლებია 18-ზე");
    } else {
        console.log("ასაკი ტოლია 18-ის");
    }
}

// მაგალითები
ageCheck(20);  // ასაკი მეტია 18-ზე
ageCheck(16);  // ასაკი ნაკლებია 18-ზე
ageCheck(18);  // ასაკი ტოლია 18-ის
