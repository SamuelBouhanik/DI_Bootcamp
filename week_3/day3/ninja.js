let btn = document.getElementById("btn");
btn.addEventListener("click",addSquar);
function addSquar(event){
	let div = document.createElement("div");
	div.setAttribute("class","box");
	document.body.appendChild(div);

}