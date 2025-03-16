def string_clean(text):
    new_text = ""  
    for char in text:  
        if not char.isdigit(): 
            new_text += char  
    return new_text