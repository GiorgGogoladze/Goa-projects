def is_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        print("ასეთი სამკუთხედი იარსებებს")
    else:
        print("ასეთი სამკუთხედი ვერ იარსებებს")

# ტესტირება
is_triangle(3, 4, 5)  # ასეთია სამკუთხედის მაგალითი
is_triangle(1, 2, 3)  # ასეთი სამკუთხედი ვერ იარსებებს
