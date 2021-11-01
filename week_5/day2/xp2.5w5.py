# import math
#
# from XpExo.xp2w5 import Dog
# import random
#
# class PetDog(Dog):
#     def __init__(self,name,age,weight,trained = False):
#         super().__init__(name,age,weight)
#         self.trained = trained
#     def train(self):
#         self.bark()
#         self.trained = True
#     def play(self,*args):
#         for dog_names in args:
#             print(f"{dog_names} play with {self.name}")
#
#     def do_a_trick(self):
#         str = random.choice([f"{self.name} does a barrel roll",f"{self.name} stands on his back legs",f"{self.name} shakes your hand",f"{self.name} plays dead"])
#         print(str)
#
# mon_chien = PetDog("toby",5,20)
# mon_chien.play("tom","coco","tame")


# exo 1 Family

class Family():
    def __init__(self,members,last_name):
        self.members = members
        self.last_name = last_name

    def born(self,**kwargs):
        dico = {}
        # print(kwargs)
        for key,value in kwargs.items():
            dico[key] = value
        self.members.append(dico)
        print("congradulation")

    def is_18(self,name):
        for value in self.members:
            if value["name"] == name:
                if value["age"] > 18 :
                    return True
        return False

    def Tostring(self):
        for x in self.members:
            print(x)





famille = Family([
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
],"levi")

famille.born(name = "San",age = 0,gender = "Male",is_child=True)
# boole = famille.is_18("Sarah")
# print(boole)
famille.Tostring()

# Exercise 2 : TheIncredibles Family

class TheIncredibles(Family):
    def __init__(self,members,last_name):
        super().__init__(members,last_name)
        for dico in self.members:
            dico["power"] = input(f"what is the power of {dico['name']}")
            dico["incredible_name"] =input(f"what is the incredible_name of {dico['name']}")

    def use_power(self):
        for dico in self.members:
            if dico["name"].is_18:
                print(dico["power"])

    def incredible_presentation(self):
        self.Tostring()



