age = int(input("which day you born"))
arr=[age]
age = int(input("which month you born"))
arr.append(age)
age = int(input("which year you born"))
arr.append(age)
print(arr)
age = 2021-arr[2]
count = 0
while age % 10 != 0:
    count = count + 1
    age = age - 1
space = 10-count
if space % 2 == 0:
    space = space/2
    space = int(space)
    print( " "+"_" * space + "i" * count + "_" * space+" ")
else:
    space = space + 1
    space = space / 2
    space = int(space)
    print(" "+"_" * space + "i" * count + "_" * space+" ")
print(" |H:A:P:P:Y| ")
print("_|_________|_")
print("|^^^^^^^^^^^|")
print("|:B:i:r:t:h:|")
print("| D : A : Y |")
print("~~~~~~~~~~~~~")


