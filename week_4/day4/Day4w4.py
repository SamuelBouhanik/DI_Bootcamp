matrix = [
    [7,"i",3],
    ["T","s","i"],
    ["h","%","x"],
    ["i"," ","#"],
    ["s","M"," "],
    ["$","a"," "],
    ["#","t","%"],
    ["^","r","!"]
]
length1 = len(matrix)
tab = matrix[0]
length = len(tab)
message = ""
for i in range(0,length):
    for j in range(0,length1):
        cara = matrix[j][i]
        cara = str(cara)
        cara = cara.lower()
        if(ord(cara) >= 97 and ord(cara) <= 122):
            message+=cara
        else:
            message+=" "
print(message)



