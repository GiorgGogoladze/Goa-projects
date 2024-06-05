# წიგნების სახელები
book_names = [
    "Book 1", "Book 2", "Book 3", "Book 4", "Book 5",
    "Book 6", "Book 7", "Book 8", "Book 9", "Book 10"
]

# წიგნების ფასები
book_prices = [
    30.0, 25.0, 50.0, 45.0, 60.0,
    35.0, 40.0, 55.0, 20.0, 70.0
]

# ფასდაკლება 10% პირველ 5 წიგნზე და 20% დანარჩენ 5 წიგნზე
for i in range(10):
    if i < 5:
        book_prices[i] *= 0.9  # 10% ფასდაკლება
    else:
        book_prices[i] *= 0.8  # 20% ფასდაკლება

# შედეგების დაბეჭდვა
for i in range(10):
    print(f"{book_names[i]}: ${book_prices[i]:.2f}")
