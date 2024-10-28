const person = {
    name: "Giorgi",
    age: 13,
    occupation: "member of GOA"
};

const updatedPerson = {
    ...person, // ეს გვაძლევს ყველა properties-ს, რაც person ობიექტს აქვს
    email: "giogogoladze2010@gmail.com",
};
