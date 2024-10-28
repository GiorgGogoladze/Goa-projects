function updateDateTime() {
    document.getElementById('datetime').textContent = new Date().toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();
