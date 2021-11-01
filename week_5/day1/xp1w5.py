class Cat():
    def __init__(self, name, age):
        self.name = name
        self.age = age
def oldest(cat_obj):
    cat_age = cat_obj[0].age
    cat_name = cat_obj[0].name
    for obj in cat_obj:
        if obj.age < cat_age:
            obj.age = cat_age
            cat_name = obj.name
    print(f"The oldest cat is {cat_name}, and is {cat_age} years old.. Use the function previously created")

# exo 2
class Dog():
    def __init__(self , name , height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"this is {self.name}")
    def jump(self):
        print(f"the dog jump{(self.height)*2}")

davids_dog = Dog("red",50)
sarahs_dog = Dog("Teacup",20)

# exo 3

class Song():
    def __init__(self,lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        str = ""
        for x in self.lyrics:
            str += " "+self.lyrics
        print(str)

# exo 4

class Zoo():
    def __init__(self,zoo_name,animal):
        self.zoo_name = zoo_name
        self.animal = animal

    def add_Name(self,name):
        self.animal.append(name)

    def get_animal(self):
        for x in self.animal:
            print(x)
    def remove(self,name):
        for x in self.animal:
            if x == name:
                x.pop
    def sort(self):
        return sorted(self.animal)



