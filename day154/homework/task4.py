def remove_consecutive_duplicates(s):
    words = s.split()  
    result = []  
    
    for word in words: 
        if not result or result[-1] != word:  
            result.append(word) 
    
    return " ".join(result)