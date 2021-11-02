import math
class Circle():
    def __init__(self, radius ):
        self.radius = radius

    def area(self):
        x = 2*(math.pi)*self.radius
        return x
    def make_circle(self):
        print("   ****   ")
        print("  *    *  ")
        print("   ****   ")

    def __add__(self, other):
        if isinstance(other, int):
            self.radius += other
            print(self.radius)
        elif isinstance(other, float):
            self.radius += other
            print(self.radius)
        else:
           self.radius += other.radius
           print(self.radius)

    def __gt__(self,other):
        if isinstance(other, int):
            if self.radius > other:
                return True
        elif isinstance(other, float):
            if self.radius > other:
                return True
        else:
            if self.radius > other.radius:
                return True
        return False

    def __eq__(self, other):
        if isinstance(other, int):
            return self.radius == other
        elif isinstance(other, float):
            return self.radius == other
        else:
            return self.radius == other.age


c = Circle(5)
# x = c.area()
x = c == 5
print(x)
# c.make_circle()
arr = [Circle(6),Circle(4),Circle(9),Circle(4),Circle(10),Circle(3),Circle(6)]
newlist = sorted(arr, key=lambda x: x.radius)
print(newlist[0])
