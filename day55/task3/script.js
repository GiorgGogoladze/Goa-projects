const submitButton = document.getElementById('submitButton');
const textInput = document.getElementById('textInput');
const colorPicker = document.getElementById('colorPicker');
const outputParagraph = document.getElementById('outputParagraph');

submitButton.addEventListener('click', function() {
  const text = textInput.value;
  const color = colorPicker.value;

  outputParagraph.textContent = text;
  outputParagraph.style.color = color;
});
