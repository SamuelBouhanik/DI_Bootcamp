import random
class Genes():
    def __init__(self):
        self.num = random.randint(0,1)

class Chromosomes(Genes):
    def __init__(self):
        self.list_de_Chro = []
        for j in range(10):
            degeu = Genes()
            self.list_de_Chro.append(degeu.num)
        self.mutation_choro()
    def mutation_choro(self):
        num = random.randint(0,len(self.list_de_Chro))
        for x in range(num):
            if random.randint(0,1) == 0:
                if self.list_de_Chro[x] == 0:
                    self.list_de_Chro[x] = 1
                else:
                    self.list_de_Chro[x] = 0

class DNA(Chromosomes):
    def __init__(self):
        self.list_de_Dna = []
        for j in range(10):
            degeula = Chromosomes()
            self.list_de_Dna.append(degeula)
    def TString(self):
        for x in self.list_de_Dna:
            print(x.list_de_Chro)

    def mutation_Dna(self):
        self = DNA()
        return self

class Organism(DNA):
    def __init__(self,environment,dna=""):
        super().__init__()
        self.environment = environment
        self.dna = DNA()
    def mutan(self):
        num = random.randint(0,100)
        print(num)
        print(self.environment)
        if(num < self.environment):
            return DNA()
        else:
            return self

# choro = Organism(100)
choro = DNA()

# choro = choro.mutation_Dna()
# print("-------")
# choro.TString()



