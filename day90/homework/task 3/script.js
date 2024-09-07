const updatedPerson = {
    ...person, // ეს გვაძლევს ყველა properties-ს, რაც person ობიექტს აქვს
    email: "giogogoladze2010@gmail.com",
};

const myHouse = {
    address: "Tbilisi , Temqa"
};
// განახლებული ობიექტი
const extendedPerson = Object.assign({}, updatedPerson, myHouse);

const { name, age } = extendedPerson;
// ახლა გვყავს ცვლადები name და age, რომლებიც extendedPerson ობიექტიდან დესტრუქციულად აღებულია
