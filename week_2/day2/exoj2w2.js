// exo 1
let lang = prompt("wich lag you speak");
lang = lang.toLowerCase();
switch(lang) {
	case "french":
	console.log("french")
	break;
	case "english":
	console.log("english")
	break;
	case "hebreu":
	console.log("hebreu")
	break;
	default:
	console.log("01110011 01101111 01110010 01110010 01111001")

}
// exo 2
let grade = parseInt(prompt('Please enter your grade'));

if (grade>90){
	console.log("A");
}else if (grade > 80 && grade < 90){
	console.log("B");
}else if (grade > 70 && grade < 80){
	console.log("C");
}
else{ 
	console.log("D");
}
//exo 3 
let verb = prompt('Please enter a verb');
let last3= verb.slice(-3);
if (verb.length >= 3 && last3 != "ing"){
	verb += "ing";
	console.log(verb);
}
else if (verb.length >= 3 && last3 == "ing"){
	verb += "ly";
	console.log(verb);
}
else {
	console.log(verb);
}
