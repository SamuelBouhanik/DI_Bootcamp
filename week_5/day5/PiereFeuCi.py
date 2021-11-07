import random
class What():
    def __init__(self, choice ="", Pwin=0,Cwin=0,Ega = 0):
        self.choice = choice
        self.Pwin=Pwin
        self.Cwin=Cwin
        self.Ega = Ega
        self.scor = [Pwin,Cwin,Ega]

    def get_Choice(self):
        self.choice = random.choice(["rock","papers","sisor"])


    def chek_ans(self,obj):
        if self.choice == obj.choice:
            self.Ega += 1
        elif self.choice == "rock" and obj.choice == "sisor":
            self.Pwin+= 1
        elif self.choice == "sisor" and obj.choice == "paper":
            self.Pwin+= 1
        elif self.choice == "paper" and obj.choice == "rock":
            self.Pwin += 1
        elif obj.choice == "sisor" and self.choice == "paper":
            self.Cwin+= 1
        elif obj.choice == "rock" and self.choice == "sisor":
            self.Cwin+=1
        else:
            self.Cwin+=1
        self.Set_Score()

    def Set_Score(self):
        self.scor = [self.Pwin, self.Cwin, self.Ega]
    def ToString(self):
        print(f"the player have {self.scor[0]} wins ")
        print(f"the player Computer have {self.scor[1]} wins ")
        print(f"there is {self.scor[2]} match win no winer ")


def play():
    question = input(f"do you want to play the game : (y) \n show the score and exit : (s) ")
    i = 1
    while(question == "y" ):
        if(i != 1):
            question = input(f"do you want to play the game : (y) \n show the score and exit : (s) ")
        select = input("select (r)ock , (p)aper , (s)isor :")
        if i == 1:
            if select == "r":
                player = What("rock")
            elif select == "p":
                player = What("paper")
            else:
                player = What("sisor")
        else:
            if select == "r":
                player.choice = "rock"
            elif select == "p":
                player.choice= "paper"
            else:
                player.choice= "sisor"

        computer = What()
        computer.get_Choice()
        print(computer.choice)
        player.chek_ans(computer)
        player.ToString()
        i = 2
    player.ToString()

play()



