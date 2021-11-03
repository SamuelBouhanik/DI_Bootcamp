# import json
# import random
#
#
# def get_words_from_file():
#     file = open("sowpods.txt")
#     # secret_data = file.read()
#     # file.close()
#     # with open(secret_data) as f:
#     #     f = json.load()
#     # print(f)
#     lst = []
#     for mot in file:
#         lst.append(mot.strip())
#     return lst
#
#
#
# def get_random_sentence(length):
#     sentence = ""
#     lst = get_words_from_file()
#     for i in range(length):
#         sentence += " "+ random.choice(lst)
#     print(sentence)
#     print(sentence.lower())
# get_random_sentence(3)
#
# def main():
#     num = int(input("give me a num betwen 2-20 to make a sentence"))
#     if(num>2 and num<20 ):
#         get_random_sentence(num)
#     else:
#         print("a batard tu fume")
#
# main()


import json
sampleJson = """{
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":17000,
            "bonus":800
         }
      }
   }
}"""



y = json.loads(sampleJson)
print(y)
print(y["company"]["employee"]["payable"]["salary"])
change =y["company"]["employee"]
change["birth_day"] = 5
print(y)

import json

with open('data.json', 'w') as f:
    json.dump(y, f)


