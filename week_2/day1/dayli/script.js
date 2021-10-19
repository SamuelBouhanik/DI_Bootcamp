// ex1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits=fruits.reverse();
fruits.pop();
fruits=fruits.reverse();
fruits.sort();
fruits.push("kiwi");
fruits.splice(0,1);
fruits=fruits.reverse();
console.log(fruits)






// ex 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);

