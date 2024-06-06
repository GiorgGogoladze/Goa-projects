# ოჯახის წევრების ასაკები (მაგალითად)
family_ages = {
    "Mother": 39,
    "Father": 38,
    "sister":10,

}

# თითოეული წევრის ასაკის გამოთვლა 25 წლის შემდეგ და დაბეჭდვა
for member, age in family_ages.items():
    future_age = age + 25
    print(f"{member} will be {future_age} years old in 25 years.")
