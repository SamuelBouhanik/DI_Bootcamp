let mov = document.getElementsByClassName("animate")[0];
let conta = document.getElementsByClassName("con");
console.log(conta)
mov.addEventListener("dragstart", dragIt);
function dragIt(){
	event.target.classList.add("startDragging");
	event.dataTransfer.setData("text/plain",event.target.id);
}
for (const elem of conta ){
	console.log(elem)
	elem.addEventListener("dragover",dragOv);
	elem.addEventListener("drop",dragDrop);
}
function dragOv(event){
	event.preventDefault();
}
function dragDrop(event){
	let data =  event.dataTransfer.getData("text/plain");
	let elemNode = document.getElementById(data)
	console.log(elemNode);
	event.target.appendChild(elemNode)
}