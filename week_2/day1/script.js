// let adressNum = 4;
// let adressStreet = "ben yehuda"
// let contry = "tel aviv"

// let localisation =` i live in israel in ${contry}  at the ${adressNum} ${adressStreet}`;
// console.log(localisation);

// let arr = ["cow","cat","dog"]
// console.log(arr[2]);
// arr.push("horse");
// console.log(arr.length)

// let me = ["my","favorite","color","is","blue"];
// let phrase = me[0];
// phrase +=" "+me[1];
// phrase +=" "+me[2];
// phrase +=" "+me[3];
// phrase +=" "+me[4];
// console.log(phrase)

// let str1 = "top" ;
// let str2 = "bot";
// let str3 = str2 + " " + str1;
// console.log(str3)
// let char1 = str1.substr(2);
// let char2 = str2.substr(2);
// str1 = str1.replace(char1 ,char2 );
// str2 = str2.replace(char2,char1 );
// str3 = str2 + " " + str1;
// console.log(str3)


// let num1 = parseInt(prompt("write a num "));
// let num2 = parseInt(prompt("write a num "));
// let mess = prompt("you want to add , sous, mult , div");
// let solve;
// if (mess === "add") {
// 	solve = num1+num2;
// }else if (mess === "sous") {
// 	solve = num1-num2;
// }else if (mess === "mult") {
// 	solve = num1*num2;
// }else{
// 	solve = num1/num2;
// }
// console.log(solve)

let str = prompt("write a sentence ")
let int = str.search("Nemo"); 
let tr = 0;
if(int == -1){
	console.log("there is no Nemo in the sentence ")
}else if(int == 0 ){
	console.log(0)
}
else {
	for (var i = 0; i <= str.length - 1; i++) {
		if(str.charAt(i)== " "){
			tr++
		}
		console.log(i)
	}
	console.log(tr)
}
// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(moreFruits[0][1][1]);
// console.log(moreFruits[0]);
