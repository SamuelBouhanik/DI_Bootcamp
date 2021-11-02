# exo 2

# class Currency():
#     def __init__(self,money,price):
#         self.money=money
#         self.price=price
#
#     def __str__(self):
#         return str(self.money)
#
#     def __int__(self):
#         return int(self.price)
#
#     def __repr__(self):
#         return f"{self.money}:{self.price}"
#
#     def __add__(self, other):
#         if isinstance(other,int):
#             self.price+=other
#             print(self.price)
#         elif isinstance(other,float):
#             self.price += other
#             print(self.price)
#         else:
#             if self.money == other.money:
#                 self.price += other.price
#                 print(self.price)
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c1+6
# print(repr(c1))
# print(int(c1))

# exo 1
from datetime import date
import datetime


def print_date():
    today = date.today()
    print("Today s date ", today)


print_date()

x = datetime.datetime.now()
print(x)


def january():
    today = date.today()
    january = datetime.date(2022, 1, 1)

    time_difference = january - today
    day = time_difference.days

    print(f'the 1st of January is in {day} days and ')


january()


def Time_lived(y, m, d):
    today = date.today()
    bth = datetime.date(y, m, d)
    time_difference = -(bth - today)
    day = time_difference.days
    print(day)
    return day


print(f"{Time_lived(2003, 10, 1) * 24 * 60 * 60} sec")


def next_holiday():
    today = date.today()
    print("Today's date:", today)
    hanoucca_holiday = datetime.date(2021, 11, 28)
    time_difference = hanoucca_holiday - today
    day = time_difference.days

    print(f'the next are vacation are in {day} days and minutes ')


next_holiday()


def Mercury(day):
    return round(day * 0.2408467 / 365)


def Venus(day):
    return round(day * 0.61519726 / 365)


def Mars(day):
    return round(day * 1.8808158 / 365)


def Jupiter(day):
    return round(day * 11.862615 / 365)


def Saturn(day):
    return round(day * 29.447498 / 365)


def Uranus(day):
    return round(day * 84.016846 / 365)


def Neptune(day):
    return round(day * 164.79132 / 365)


print(Venus(Time_lived(2003, 3, 3)))

from faker import Faker
users = []
fake_name = Faker()
for i in range(10):
    users.append({
        "name": fake_name.name(),
        "address": fake_name.address(),
    })
# for i in range(10):
#     print(users[i]["name"],users[i]["address"])

print([users[i]["name"] for i in range(0, 10)])