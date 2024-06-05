function changeDiv() {
    let color = document.getElementById("colorInput").value;
    let width = document.getElementById("widthInput").value + "px";
    let height = document.getElementById("heightInput").value + "px";
    let text = document.getElementById("textInput").value;

    let div = document.getElementById("outputDiv");
    div.style.backgroundColor = color;
    div.style.width = width;
    div.style.height = height;
    div.getElementsByTagName("p")[0].innerText = text;
}
