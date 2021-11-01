# # exo 1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals
#
#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())
#
# class Cat():
#     is_lazy = True
#
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
#     def walk(self):
#         return f'{self.name} is just walking around'
#
# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
#
# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
# class Cat_bread(Cat):
#     pass
#
# cat1 = Cat("bob",5)
# cat2 = Cat("toby",9)
# cat3 = Cat("mikey",2)
# cat4 = Cat("kiti",4)
# my_cats = [cat1,cat2,cat3,cat4]
# my_pets = "?"

# exo 2

class Dog():
    def __init__(self,name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking")
    def run_speed(self):
        print(f"{((self.weight/self.age)*10)}")

    def fight(self,obj_dog):
        num = self.run_speed()*self.weight
        num2 = obj_dog.run_speed()*obj_dog.Getweight()
        if(num > num2):
            return f"{self.name} win the fight"
        else:
            return f"{obj_dog.name} win the fight"

    def Getweight(self):
        return self.weight

# exo  3
