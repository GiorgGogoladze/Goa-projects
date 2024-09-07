# ოჯახი და ასაკები
family = ["Tamuna", "Saba", "Mate"]
ages = [38, 20, 13]  # ასაკები იმავე რიგით, როგორც სახელები

# პირველი წინადადება: სახელი და ასაკი
full_sentence = "My mom's name is: {}, She is {} years old; My brother's name is: {}, He is {} years old; My name is: {}, I am {} years old.".format(
    family[0], ages[0], family[1], ages[1], family[2], ages[2]
)
print(full_sentence)

# მეორე წინადადება: ასაკები 10 წლის შემდეგ
ages_in_10_years = [age + 10 for age in ages]

future_sentence = "In 10 years, my mom will be {} years old; my brother will be {} years old; and I will be {} years old.".format(
    ages_in_10_years[0], ages_in_10_years[1], ages_in_10_years[2]
)
print(future_sentence)
