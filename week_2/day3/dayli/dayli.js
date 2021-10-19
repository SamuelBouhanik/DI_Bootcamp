let ch = "";
for(let i = 0 ; i <6 ; i++){
	
	for(let y = 0 ; y < 1; y++){
		ch += "*";
		console.log(ch)
	}

}
let star = "";
for (let i =0; i< 6; i++)
{
	star += "*";
	console.log(star);
}

// buble sort 
let arr = [6,4,2,3,1,8,9,5,7];
console.log(bubleSort(arr))




function bubleSort(arr){
	let temp = 0; 
	for(let i = 0; i <arr.length-1 ; i++){
		for(let y = 1; y <arr.length ; y++){
			if(arr[y-1] > arr[y] ){
				temp = arr[y-1];
				arr[y-1] = arr[y];
				arr[y] = temp;
			}
		}
	}
	return arr;
}