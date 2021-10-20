// let mov = document.getElementById("animate");
// let btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click",myMove);
// function myMove(){
// 	let pos = 0;
// 	let id = setInterval(function() {
// 		if (pos == 350) {
// 			clearInterval(id);
// 		}
// 		else {
// 			pos++;
// 			mov.style.top = pos + "px";
// 			mov.style.left = pos + "px";
// 		}
// 	}, 5);
// }
let pos = document.getElementById("moove");
let movant= document.getElementById("container");
movant.addEventListener("dragstart", startDragging);
function startDragging (event) {
	console.log("start dragging", event.target.id);
	event.target.classList.add("startDragging");
	// console.log(event.dataTransfer)
	// syntax
	// event.dataTransfer.setData("type of data", id of the elem)
	event.dataTransfer.setData("text/plain",event.target.id)
}
function addTheListeners (){
	pos.addEventListener("dragover", draggingOver)
	pos.addEventListener("drop", dropping)
}
addTheListeners()
function draggingOver (event) {
	event.preventDefault();
}
function dropping(event){
	event.preventDefault();
	// console.log(event.target)
	// 1. retrieve the element that we want to srop
	let elementToDrop = event.dataTransfer.getData("text/plain")
	// 2. append the element on the drop zone
	let elemNode = document.getElementById(elementToDrop)
	event.target.appendChild(elemNode)
}