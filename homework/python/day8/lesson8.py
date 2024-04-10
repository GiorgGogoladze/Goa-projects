x = [2, 4, 6, 2, 4, 7, 2, 9]
for i in range (2):  
    x.remove(4)  
print(x) 

#2nd
family = ["tania", "vova", "tina"]
age = [38, 37, 9]
add_age =[10, 10, 10]

sentence_1 = "my mom's name is {}, she is {} years.".format(family[0],age[0] + add_age[0])
print(sentence_1)

sentence_2 = "my name is {} and i am {} years.".format(family[2],age[2] + add_age[2])
print(sentence_2)

sentence_3 = "my father's name is {}, he is {} years old.".format(family[1],age[1] + add_age[1])
print(sentence_3)

#3rd
for i in range (5, 100 , 5):
    print(i)