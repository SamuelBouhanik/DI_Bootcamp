word = input("give your word")
hide_word ="*"*len(word)
print(hide_word)
win = False
vie = 10
alredy_say = []

def check_word(str):
    if "*" in str:
        return False
    else:
        return True

def replace_value(hide,str,ch):
    count = 0
    for i in range(len(str)):
        if(ch == str[i]):
            hide= hide.replace(hide[count],ch,1)
        count += 1
    return hide

while win == False and vie != 0:
    ch = input("give a leter")
    if ch in word:
        hide_word = replace_value(hide_word,word,ch)
    else:
        vie -= 1
    print(f"you have {vie} left ")
    alredy_say.append(ch)
    win = check_word(hide_word)
    print(hide_word)



