def multi_table(number):
    result = ""
    for i in range(1, 11):
        result += f"{i} * {number} = {i * number}"
        if i < 10: 
            result += "\n"
    return result