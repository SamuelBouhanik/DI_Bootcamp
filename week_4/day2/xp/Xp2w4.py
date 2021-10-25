# exo1
# my_fav_numbers = set()
# my_fav_numbers.add(8)
# my_fav_numbers.add(12)
# my_fav_numbers.remove(12)
# print(my_fav_numbers)
# friend_fav_numbers = set()
# friend_fav_numbers.add("le poulet")
# all = set.union(my_fav_numbers,friend_fav_numbers)
# print(all)

# exo2
# my_tuple = (5,6,7)
# a,b,c =my_tuple
# print(a)

# exo3
# arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
# for x in arr:
#     print(x)
# i = 0
# while i is not 20:
#     i+=1
#     print(i)

# exo4
# lst = [ 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
# newlst = []
# i = 1.5
# while i is not 5.5:
#     newlst.append(i)
#     i+=0.5

# exo5
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.pop(0)
# basket.remove("Blueberries")
# basket.append("kiwi")
# basket.insert(0,"Apples")
# count = 0
# for x in basket:
#     if "Apples" == x:
#         count +=1
# for x in basket:
#     basket.pop()


# exo 6
# name =""
# while name == "Samuel":
#     name = input("Give me a name")


# exo 7
# arr = [1,2,3,4,5,6,7,8,9,0]
# i=0
# for x in arr:
#     i+=1
#     if i % 2 ==0:
#         print(x)


# exo 8
# for x in range(1500,2501):
#     if x % 5 == 0 and x % 7 == 0:
#         print(x)

# exo 9
# fruits = input("give me your favorite fruits")
# word=""
# arr=[]
# for x in fruits:
#     if x is not" ":
#         word += x
#     else:
#         arr.append(word)
#         word =""
# arr.append(word)
# print(arr)

# exo 10
# name = ""
# arr = []
# while name is not "quit":
#     name=input("give me a pizza name")
#     if name is not "quit":
#         print("we add to the bag")
#         arr.append(name)
# total = 10+( 2.5 * len(arr))

# exo11
# price = 0
# many = int(input("how many ticket "))
# for x in range(0,many):
#     age = int(input("give your age pls "))
#     if age > 3 and age < 12:
#         price += 10
#     elif age >= 12:
#         price += 15
# print(price)

# exo 12
# newarr = []
# list = ["raf","sam","tom"]
# for x in list:
#     age = int(input(x+" what is your age"))
#     if age <16:
#         newarr.append(x)
#
# for x in newarr:
#     list.remove(x)
# print(list)

# exo 13
# sandwich_orders = ["thon","tomate","salade"]
# finished_sandwiches =[]
# finished_sandwiches = sandwich_orders.pop(0)
# print(sandwich_orders)
# print(finished_sandwiches)

# exo 14
# sandwich_orders = ["pastrami","thon","pastrami","tomate","salade","pastrami"]
# count=0
# while "pastrami" in sandwich_orders:
#     if("pastrami" == sandwich_orders[count]):
#         sandwich_orders.pop(count)
#     count+=1
# print(sandwich_orders)