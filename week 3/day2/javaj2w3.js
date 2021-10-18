// // exo 1
// let p = document.getElementsByTagName("article")[0];
// p.lastElementChild.remove();
// p = document.getElementsByTagName("h2")[0];
// p.addEventListener("click",function(){
// 	p.style.backgroundColor ="red"
// });
// let pa = document.getElementsByTagName("h1")[0];
// pa.addEventListener("click",function(){
// 	let num = Math.round(Math.random()*100);
// 	pa.style.fontSize = num+"px";
// });
// // document.getElementById("element").style.display = "none";
// pas = document.getElementsByTagName("h3")[0];
// pas.addEventListener("click",function(){
// 	pas.style.display = "none";
// })
// let btn = document.createElement("button");
// btn.textContent = "click";
// document.body.appendChild(btn);
// btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click",function(){
// 	document.body.style.fontWeight = "bold";
// })
// let btn2 = document.getElementById("submit");
// console.log(btn2)

// btn2.addEventListener("click",function(event){
// 	event.preventDefault();
// 	let Fname = document.getElementById("fname");
// 	let Sname = document.getElementById("lname");
// 	let FnameValue = Fname.value;
// 	let SnameValue = Sname.value;
// 	if(FnameValue != ""){
// 		let p = document.createElement("p");
// 		p.textContent= FnameValue+" "+SnameValue;
// 		let div = document.getElementsByClassName("usersAnswer")[0];
// 		div.appendChild(p);
// 	}
// })
// let parara = document.getElementsByTagName("P")[1];
// parara.addEventListener("mouseover",function(){
// 	parara.style.opacity = "0.5"; 
// })

// parara.addEventListener("click",function(){
// 	parara.style.opacity = "1"; 
// })

// // exo2

// function getBold_items(){
// 	let notbold = document.getElementsByTagName("p")[0];
// 	let str = ""
// 	notbold.s
// 	let last =document.body.lastElementChild;
// 	console.log(notbold);
// 	for(let i = 0 ; i < notbold.childElementCount;i++){
// 		str += " "+notbold.children[i].textContent;
// 	}
// 	console.log(str);
// }

// function highlight() {
// 	notbold = document.getElementsByTagName("p")[0];
// 	for(let i = 0 ; i < notbold.childElementCount;i++){
// 		notbold.children[i].style.color = "Blue";
// 	}
// }

// function return_normal(){
// 	notbold = document.getElementsByTagName("p")[0];
// 	for(let i = 0 ; i < notbold.childElementCount;i++){
// 		notbold.children[i].style.fontWeight="normal";
// 		notbold.children[i].style.color="black";
// 	}
// }
// let p = document.getElementsByTagName("P")[0];
// p.addEventListener("mouseover",highlight);
// p.addEventListener("mouseout",return_normal);

// // exo 3
// let button = document.getElementById("submit");
// button.addEventListener("click",function(event){
// 	event.preventDefault();
// 	let radius = document.getElementById("radius").value;
// 	let volume = document.getElementById("volume");
	
// 	let sum = (4/3)* Math.PI * Math.pow(radius, 3);
// 	console.log('Volume of Sphere: '+sum.toFixed(2));
// 	volume.value = sum;
// })






