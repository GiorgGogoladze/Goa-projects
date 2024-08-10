// 1. შევქმენი ახალი ელემენტი
const newElement = document.createElement('div');

// 2. შეცვალე ახალი ელემენტის id და textContent
newElement.id = 'myNewElement';
newElement.textContent = 'ეს არის ახალი ელემენტი!';

// 3. დავამატე ახალი ელემენტი body ელემენტში
document.body.appendChild(newElement);  