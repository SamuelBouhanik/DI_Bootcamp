// //exo 1
// function IsEmpty(str){
// 	if(str==""){
// 		return false;
// 	}else{
// 		return true;
// 	}
// }
// let bt = "        ";
// console.log(IsEmpty(bt));

// // exo 2
// let str = "Jhon Sina"
// function abbrevName(str){
// 	let arr = str.split(" ");
// 	arr[1] = arr[1].charAt(0).toUpperCase();
// 	arr[1] += ".";
// 	str = arr[0] +" "+ arr[1];
// 	return str;
// }
// console.log(abbrevName(str))
// // exo 3
// let str = "The Quick Brown Fox";
// function gros(str){
// 	for(let i = 0 ; i < str.length ;i++){
// 		if(str.charAt(i) === str.charAt(i).toUpperCase()){
// 			str = str.substr(0,i) + str.charAt(i).toLowerCase()+ str.substr(i+1,str.length);
// 		}else{
// 			str = str.substr(0,i) + str.charAt(i).toUpperCase()+ str.substr(i+1,str.length);
// 		}
// 	}
// 	return str;
// }
// console.log(gros(str))
// // exo 4
// let ahi = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];
// function omni(ahi){
// 	let boolchek = false ; 
// 	let om = ahi[0][0];
// 	for(let u = 0 ; u < ahi[0].length ; u++){
// 		om = ahi[0][u];
// 		for(let i = 0 ; i < ahi.length ; i++){
// 			for(let y = 0 ; y < ahi[i].length ; y++){
// 				if(ahi[i][y] == om){
// 					boolchek = true;
// 				}

// 			}
// 			if(boolchek == false){
// 				return false

// 			}
// 		} 
// 		if (boolchek== true) { return true}
// 			boolchek = false ; 
// 	}
// return true;
// }
// console.log(omni(ahi))

