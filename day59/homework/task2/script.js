function showParagraph() {
    let text = prompt("Enter text :");
    let color = prompt("Enter text color :");
    let bgColor = prompt("Enter background color :");

    let outputDiv = document.getElementById('output');
    let outputText = document.getElementById('outputText');

    outputText.innerText = text;
    outputText.style.color = color;
    outputDiv.style.backgroundColor = bgColor;
}