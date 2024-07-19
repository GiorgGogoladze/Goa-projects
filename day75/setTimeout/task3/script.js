function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 5000);
}

showMessage();
