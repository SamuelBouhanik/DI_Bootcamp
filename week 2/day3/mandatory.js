for (let i = 0 ; i < 15; i++) { 
	if(i % 2 == 0){
		console.log("paire")
	}else{
		console.log("impaire")
	}
}
// exo 1
let myColor =["red ","blue","yellow"]
for (let i = 0; i < 3; i++) {
	console.log("my Color number "+ (i+1) +" is "+myColor[i])
}
//exo 2 
let people = ["Greg", "Mary", "Devon", "James"]
people.shift();
console.log(people);
people.pop();
people.push("Jason");
console.log(people);
people.push("Samuel");
console.log(people);
for (let i =0; i<=people.length -1; i++)
{
	console.log(people[i]);
}
let peopleCopy = people.slice(1);
console.log(peopleCopy);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
let last = "Samuel"
people.push(last);
console.log(people);

// exo 3
let info = parseInt(prompt("enter a num "));
while(info > 10 ){
	info = parseInt(prompt("enter a num "));
}
console.log(info)
// exo 4 
let guestList = {
	randy: "Germany",
	karla: "France",
	wendy: "Japan",
	norman: "England",
	sam: "Argentina"
}
let user = prompt("enter a name");
for(let element in guestList){
	if(user == element){
		console.log("Hi! I'm " +user+ " , and I'm from "+ guestList[user])
	}else{
		console.log("Hi! I'm a guest.")
	}
}
// exo 5
let family = {
	mom : "lea",
	dad : "tom",
	child : "josh"
}
for(let element in family){
	console.log(element);
	console.log(family[element]);
}
// exo 6
let details = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer'
}
let sentece = "";
for(let element in details){
	sentece+=" "+element;
	sentece+=" "+details[element];
}
console.log(sentece)
// exo 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names = names.sort();
let ch = "";
for(let i = 0 ; i <names.length ; i++){
	ch += names[i].charAt(0);
}
console.log(ch)