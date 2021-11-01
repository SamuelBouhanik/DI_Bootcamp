class Farm():
    def __init__(self,name,animal=""):
        print(name)
        self.animal = animal
    def add_animal(self,name,amount=1):
        num = 0
        containe = 0
        for i in range(len(self.animal)):
            if name == self.animal[i][0]:
                containe+=1
        if containe == 1:
            for i in range(len(self.animal)):
                if name == self.animal[i][0]:
                    self.animal[i][1] += amount
                    num = i
        else:
            ans = [name,amount]
            self.animal.append(ans)
            for i in range(len(self.animal)):
                if name == self.animal[i][0]:
                    num = i

        print(f"{name}:{self.animal[i][1]}")

    def get_info(self):
        print("E-I-E-I-0!")

    def get_animal_types(self):
        arr = []
        for x in self.animal:
            arr.append(x[0])
        return sorted(arr)
    def get_short_info(self):
        str = ""
        for x in self.animal:
            str += ","+x[0]
        print(f"we have {str}")


arr = [["",0]]
macdonald = Farm("McDonald",arr)
macdonald.add_animal('cow',5)
macdonald.add_animal('cow',5)
macdonald.add_animal("cow")
macdonald.add_animal("Rafael",6)
macdonald.add_animal("Rafael")







