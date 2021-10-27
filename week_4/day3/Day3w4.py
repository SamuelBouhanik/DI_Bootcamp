text = input("give your text")
newtext =""
shift = int(input("shift"))
rep = input("you want to script or unscript")
if rep =="script":
    for letter in text:
        code = ord(letter)
        if (code - shift < 97):
            print("je suis la")
            number = code - shift
            chifre = 97 - number
            newletter = 122 - chifre + 1
            newtext += chr(newletter)
        else:
            newtext += chr(ord(letter) - shift)
else:
    for letter in text:
        code = ord(letter)
        if (code + shift > 122):
            print("je suis la")
            number = code + shift
            chifre = number - 122
            newletter = 96 + chifre
            newtext += chr(newletter)
        else:
            newtext += chr(ord(letter) - shift)

print(newtext)