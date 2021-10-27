def big_world(lst):
    num = 1
    for x in lst:
        temp = len(x)
        if num < temp:
            num = temp
    return num

def box_printer(Hello,World,In,reallylongword,a,frame):
    lst = [Hello,World,In,reallylongword,a,frame]
    lenght = big_world(lst)
    for i in range(0,len(lst)+2):
        if(i == 0 ):
            print("*"*lenght+"**")
        elif(i == len(lst)+1):
            print("*" * lenght + "**")
        else:
            mot= lst[i-1]
            taille = len(lst[i-1])
            if(lenght != taille):
                space = lenght - taille
                print("*" + mot + " " * space + "*")
            else:
                print("*" + mot + "*")

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

