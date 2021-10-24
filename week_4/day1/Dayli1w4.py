import random
str = input("give a string of 10 caracher")
length = len(str)
print(length)
count = 0
for x in str:
    if(x == " "):
        count+=1
length-=count
world =""
if(length==10):
    for x in str:
        world+=x
        print(world)
elif(length<10):
    print("your word is to short ")
else:
    print("your word is to big ")



