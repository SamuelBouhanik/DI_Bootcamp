let sentence = prompt("enter your world");
let arr = sentence.split(" ");
// see the biger world
let x = bigWorld(arr);
let str = "";
let between = 0;
for(let i = 0 ; i < arr.length+2 ; i++){
	str +="*";
	if(i == 0 || i == arr.length+1){
		for (let y = 0 ; y <x.length+2; y++) {
			str +="*";
		}
	}
	else{
		str += " ";
		if(arr[i-1].length<x.length){
			between = x.length- arr[i-1].length;
			str+= arr[i-1];
			for(let t = 0 ; t < between ;t++){
				str += " ";

			}
		}else{
			str += arr[i-1] 
		}
		str += " ";
	}
	str +="*";
	console.log(str);
	str ="";
}










function bigWorld(arr){
	let max = "q" ; 
	for(let i = 0 ; i <arr.length;i++){
		if(max.length < arr[i].length){
			max = arr[i];
		}

	}
	return max;
}