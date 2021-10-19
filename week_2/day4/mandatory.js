// // exo 1
function aboutMe() {
	console.log("my name is sam ");
}
aboutMe()
function infoAboutPerson (name , age , color){
	alert(`the name of my pet is ${name} is age is ${age} and is favorite color is ${color}`);
}
console.log(infoAboutPerson("David", 45, "blue"))
console.log(infoAboutPerson("Josh", 12, "yellow"))
function infoAboutPerson (personName, personAge, personFavoriteColor ,personHobbies){
	let hobbies = "";
	for (let i = 0; i< personHobbies.length; i++)
	{
		hobbies +=personHobbies[i];
	}
	console.log(`You name is ${personName} , you are ${personAge} years old ,your favorite color is ${personFavoriteColor} ${hobbies}`);

//Exercise 2 : Keyless Car
function checkDriverAge()
{
	let userAge = parseInt(prompt('Please enter your age'));
	if (userAge < 18)
		alert("Sorry, you are too young to drive this car. Powering off");
	else if (userAge > 18)
		alert("You are old enough to drive, Powering On. Enjoy the ride!");
	else
		alert ("Congratulations on your first year of driving. Enjoy the ride!");
}
function checkDriverAge(age)
{
	if (age < 18)
		alert("Sorry, you are too young to drive this car. Powering off");
	else if (age > 18)
		alert("You are old enough to drive, Powering On. Enjoy the ride!");
	else
		alert ("Congratulations on your first year of driving. Enjoy the ride!");
}
//Exercise 3: Odd Or Even
function checkNumber ()
{
	for(let i= 0; i <100 ; i++)
	{
		if (i %2 === 0)
		{
			console.log("the number " + i + " is even");
		}
		else
		{
			console.log("the number " + i + "is odd");
		}
	}
}
checkNumber();
// Exercise 4: Find The Numbers Divisible By 23
let sum = 0;
function isDivisible()
{
	for(let i= 0; i <500 ; i++)
	{
		if(i %23 === 0)
			sum += i;
		console.log(i);
	}
	console.log(sum)
}
isDivisible();
// Exercise 5 : Amazon Shopping
let amazonBasket =
{
	glasses: 1,
	books: 2,
	floss: 100
}
function checkBasket()
{
	let userChoice= prompt("What do you want to buy");
	if (userChoice in amazonBasket)
		console.log ("your items is in the basket")
	else
		console.log("yours is not in the basket")
}
checkBasket();
// exo 6
function claculate(arr , num ) {
	let sum = 0 ;
	for(let i = 0 ; i < arr.length ; i++){
		if(i == 0){
			sum += 0.25*arr[i]; 
		}if(i == 1){
			sum += 0.1*arr[i]; 
		}if(i == 2){
			sum += 0.05*arr[i]; 
		}if(i == 3){
			sum += 0.01*arr[i]; 
		}
	}
	if(sum > num ){
		return true;
	}
	return false;
}
console.log(claculate([2, 100, 0, 0], 14.11));
// Exercise 7 : Shopping List
let stock = {
	"banana": 6,
	"apple": 0,
	"pear": 12,
	"orange": 32,
	"blueberry":1
}
let prices = {
	"banana": 4,
	"apple": 2,
	"pear": 1,
	"orange": 1.5,
	"blueberry":10
}
let shoppingList = ["banana" , "orange" , "apple"];
function myBill()
{
	let sum =0 ;
	for(let i =0;  i <shoppingList.length; i++)
	{
		if(stock[shoppingList[i]]>0)
		{
			sum += prices[shoppingList[i]];
		}
	}
	console.log(sum);
	return sum;
}
myBill();
//Exercise 8 : Tips
function tipsCalculator()
{
	let bill = parseInt(prompt('Please enter the amount of your bill'));
	let tips = 0;
	let totalBill = 0;
	if (bill < 50)
	{
		tips = bill * 0.2;
		totalBill = tips + bill;
		console.log(`The tip amount is ${tips} the final bill is ${totalBill}`)
	}
	else if (bill > 50 && bill < 200 )
	{
		tips = bill * 0.15;
		totalBill = tips + bill;
		console.log(`The tip amount is ${tips} the final bill is ${totalBill}`)
	}
	else
	{
		tips = bill * 0.10;
		totalBill = tips + bill;
		console.log(`The tip amount is ${tips} the final bill is ${totalBill}`)
	}
}
tipsCalculator();
//Exercise 9 : Vacations Costs
function hotelCost()
{
	let numberOfNight = parseInt(prompt('Please enter how many night you want to stays'));
	if (typeof numberOfNight ==! 'number')
	{
		numberOfNight = parseInt(prompt('Is not a number please enter a number'));
	}
	let priceHotel = 140 * numberOfNight;
	console.log(priceHotel);
	return priceHotel;
}
function planeRideCost()
{
	let destination = prompt('Where do you want to fly ?');
	if (typeof destination ==! 'string')
	{
		console.log('Is not a string please enter string; Where do you want to fly ?');
	}
	if (destination === "London")
	{
		console.log(`"London":183$`)
	}
	else if (destination === "Paris")
	{
		console.log(`"London":220$`)
	}
	else { console.log("All other destination : 300$")}
}
function rentalCarCost()
{
	let numberOfDayCar = parseInt(prompt('How many day you want to rent the car'));
	if (typeof numberOfDayCar ==! 'number')
	{
		numberOfDayCar = parseInt(prompt('Is not a number please enter a number'));
	}
	let totalprice = 40 * numberOfDayCar;
	if (numberOfDayCar > 10){
		totalprice *= 0.95;
	}
	console.log(totalprice);
	return totalprice;
}
function totalVacationCost()
{
	let carCost = rentalCarCost();
	let hotelCoste = hotelCost();
	let planeRideCoste = planeRideCost ();
	let totalPrice = carCost + hotelCost +planeRideCost;
	console.log(`The car cost ${carCost} $ , the hotel cost ${hotelCoste} $
		, the plane ticket cost ${planeRideCoste}. In total the trip will cost: ${totalPrice} $ `)
	return totalPrice;
}


