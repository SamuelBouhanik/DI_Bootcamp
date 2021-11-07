# dayli 1
# import time
# import requests
#
# start = time.time()
# requests = requests.get("https://www.ynet.co.il/home/0,7340,L-8,00.html")
# end = time.time()
# # print(requests.text)
# print(end - start)

# dayli 2
import random


class Card():
    def __init__(self,value = "", type = ""):
        self.value = value
        self.type = type

class Packet_de_Carte(Card):

    def __init__(self):

        self.packet = [Card("A","Hearts"),Card("2","Hearts"),Card("3","Hearts"),Card("4","Hearts"),Card("5","Hearts"),Card("6","Hearts"),Card("7","Hearts"),Card("8","Hearts"),Card("9","Hearts"),Card("10","Hearts"),Card("J","Hearts"),Card("D","Hearts"),Card("R","Hearts"),
                       Card("A","Diamonds"),Card("2","Diamonds"),Card("3","Diamonds"),Card("4","Diamonds"),Card("5","Diamonds"),Card("6","Diamonds"),Card("7","Diamonds"),Card("8","Diamonds"),Card("9","Diamonds"),Card("10","Diamonds"),Card("J","Diamonds"),Card("D","Diamonds"),Card("R","Diamonds"),
                       Card("A","Clubs"), Card("2","Clubs"), Card("3","Clubs"), Card("4","Clubs"), Card("5","Clubs"), Card("6","Clubs"), Card("7","Clubs"), Card("8","Clubs"),Card("9","Clubs"), Card("10","Clubs"), Card("J","Clubs"), Card("D","Clubs"), Card("R","Clubs"),
                       Card("A","Spades"), Card("2","Spades"), Card("3","Spades"), Card("4","Spades"), Card("5","Spades"), Card("6","Spades"), Card("7","Spades"), Card("8","Spades"),Card("9","Spades"), Card("10","Spades"), Card("J","Spades"), Card("D","Spades"), Card("R","Spades")]


class Deck():
    def __init__(self):
        self.dec = Packet_de_Carte()

    def Shufle(self):
        random.shuffle(self.dec.packet)
    def deal(self):
        carte = self.dec.packet[0]
        x = self.dec.packet.pop()
        return carte.value , carte.type

Decos = Deck()
Decos.Shufle()
carton = Decos.deal()
print(carton)






