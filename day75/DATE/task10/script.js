function calculateAge(birthdate) {
    const now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();

    // Adjust age if the birthday has not occurred this year
    if (now.getMonth() < birthdate.getMonth() || 
        (now.getMonth() === birthdate.getMonth() && now.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
}

const birthdate2 = new Date('1990-07-20');
console.log(calculateAge(birthdate2));"33"
