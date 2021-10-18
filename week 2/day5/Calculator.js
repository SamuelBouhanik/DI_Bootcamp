
let raf ="";
function number(sam){
	raf+=sam;
	console.log(raf);	
}
function operator(op){
	raf+=op;
}
function equal(eq){
	alert(raf+" will be equal to ")
	raf = eval(raf);
	alert(raf);
}
function clear2(){
	alert(raf)
	raf ="";
	alert("now your clear ,your result is 0");
}
function visual(){
	alert(raf)
}



