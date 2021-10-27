# exo 1

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dico = dict(zip(keys,values))
# print(dico)


# exo 2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# price = 0
# for key in family:
#     if family[key] > 3 and family[key] < 12:
#         price += 10
#     elif family[key] >= 12:
#         price += 15
# print(price)

# exo 3
# dico = {
#     "name" : "Zara",
#     "creation_date" : 1975,
#     "creator_name" :["Amancio", "Ortega" ,"Gaona" ],
#     "type_of_clothes":["men", "women" ,"children" , "home"],
#     "international_competitors" :["Gap", "H&M" ,"Benetton" ],
#     "number_stores" :7000,
#     "major_color" : {
#         "France":"blue",
#         "Spain":"red",
#         "Us":["pink","green"]
#     }
# }
# dico["number_stores"] = 2
# for key in dico["type_of_clothes"]:
#     print(f'{dico["name"]} are client {key}')
# dico["country_creation"]="spain"
# print(dico)
# for key in dico:
#     if key == "international_competitors":
#         dico[key] += ["Desigual"]
# del dico["creation_date"]
# print(dico)
# l = len(dico["international_competitors"])
# t=-1
# for x in range(0,l):
#    t = t + 1
#    if t == l-1:
#        print(dico["international_competitors"][t])
# num = 0
# for x in dico:
#     if num%2==0:
#         print(dico[x])
#     num+=1
# for x in dico:
#     print(dico[x])
# newdico = {}
# newdico["creation_date"]=1975
# newdico["number_stores"]=10000
# dico.update(newdico)
# print(dico)
# print(dico["number_stores"])


# exo 4
# users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]
# 2/ users = dict(enumerate(users))
# disco= [i for i in range(0,5)]
# print(disco)
# users.sort()
# dico = dict(zip(users,disco))
# print(dico)




