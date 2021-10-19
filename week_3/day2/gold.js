let rk = document.getElementById("genres").children[0];
let bl = document.getElementById("genres").children[0];
rk.addEventListener("click",display);
bl.addEventListener("click",display);
function display(event){
	let vl = event.target.textContent;
	console.log("vl");
}




