# # exo 4
# my_text = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt  culpa qui officia deserunt mollit anim id est laborum."
# length = len(my_text)
# count = 0
# for x in my_text:
#     if x ==" ":
#         count += 1
# length -=count
# print("There is "+length+"Cheracter")

# exo 5
boola = "yes"
while boola=="yes":
    boola = input("do you want to print a String without an a")
    String = input("Write a sentence")
    length = len(String)
    count = 0
    for x in String:
        if x == " ":
            count += 1
    length -= count
    print("your word " + str(length) + " have Character")
print("End")






