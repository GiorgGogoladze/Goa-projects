// 1. მივმართავთ პარაგრაფს ID-ის მეშვეობით
let paragraph = document.getElementById("myParagraph");

// 2. ვქმნით ფუნქციას, რომელიც ცვლილებებს განახორციელებს
function changeParagraphStyle() {
    // 3. ელემენტის ფერის შეცვლა
    paragraph.style.color = "white"; 
    // 4. ტექსტის შეცვლა
    paragraph.textContent = "ტექსტი შეიცვალა!";
    // 5. ფონდის ფერის შეცვლა
    paragraph.style.backgroundColor = "blue"; // ფონდის ფერი ლურჯი
}

// 6. setTimeout გამოიყენება
setTimeout(changeParagraphStyle, 3000); 
