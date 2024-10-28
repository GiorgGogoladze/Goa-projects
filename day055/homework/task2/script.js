const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const inputs = form.querySelectorAll('input'); 

  inputs.forEach(input => {
    console.log(`ID: ${input.id}, Value: ${input.value}`);
  });
});
