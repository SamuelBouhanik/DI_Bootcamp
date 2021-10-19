let arr =["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]

let sec = document.getElementsByTagName("section")[0];

for(let i = 0 ; i < arr.length; i++){
	let p = document.createElement("div");
	p.textContent=arr[i];
	p.setAttribute("class","planet "+arr[i]);
	sec.appendChild(p);
}