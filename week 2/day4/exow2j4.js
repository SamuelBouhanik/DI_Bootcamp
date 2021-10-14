// // exo  1
// let rdm = Math.random()*100;
// for(let i = 0 ; i < rdm ; i++){
// 	console.log(i)
// }
// // exo 2
// let str = "lamentable";
// function strOld(str){
// 	let arr = [str,str];
// 	for(let i = 0 ; i < str.length ;i++){
// 		if(i == 0){
// 			arr[0] = arr[0].charAt(i).toUpperCase()+ arr[0].substr(1,str.length)
// 		}else if(i%2==0){
// 			arr[0] = arr[0].substr(0,i) + arr[0].charAt(i).toUpperCase()+ arr[0].substr(i+1,str.length);
// 		}else{
// 			arr[1] = arr[1].substr(0,i) + arr[1].charAt(i).toUpperCase()+ arr[1].substr(i+1,str.length);
// 		}
// 	}
// 	return arr;
// }
// console.log(strOld(str))
// // exo 3
// let str = "kayyak" ;
// let bool = true;
// for(let i = 0 ; i < str.length ; i ++ ){
// 	if(str.charAt(i) == str.charAt(str.length-i-1)){
// 	}else{
// 		bool = false;
// 	}
// }
// if(bool == true){
// 	console.log("its a palindrome")
// }else{
// 	console.log("its not a palindrome")
// }
// // exo 4
// let arr = ["a",1,6,3];
// console.log(arr)
// function MaxInArr(arr){
// 	let max = -10000;
// 	if(arr.length == 0){
// 		return 0 ; 
// 	}else{

// 		for(let i = 0 ; i < arr.length ; i++){
// 			if(max < arr[i]){
// 				max = arr[i];
// 			}


// 		} 
// 	}
// 	return max ;
// }

// console.log(MaxInArr(arr))\
// // exo 5 
// let arr= [1,1,4,4,8,8,1,9];
// console.log(RemoveDupp(arr));
// function RemoveDupp(arr){
// 	let left = 0 ;
// 	let right = 0 ; 
// 	let ans = [];
// 	let count=0;
// 	let boo = true;
// 	for(let i = 0 ; i < arr.length-1 ; i ++){
// 		boo = true;
// 		left = arr[i];
// 		for(let y = 1+i ; y <arr.length ; y++){
// 			right = arr[y];
// 			if(left == right){
// 				arr[i]= -55;
// 				boo = false;
// 			}

// 		}
// 		if(boo == true){
// 			ans[count] = left;
// 			count++;
// 		}

// 	}
// 	ans[count] = arr[arr.length-1];

// 	return ans;
// }
