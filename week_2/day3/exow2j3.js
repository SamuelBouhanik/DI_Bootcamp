// let building = {
//     numberLevels : 4,
//     numberOfAptByLevel : {
//         "1": 3,
//         "2": 4,
//         "3": 9,
//         "4": 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         "Sarah": [3, 990],
//         "Dan":  [4, 1000],
//         "David": [1, 500],
//     },
// }
// console.log(building["numberLevels"])
// console.log(building["numberOfAptByLevel"]["1"])
// console.log(building["nameOfTenants"][1] +" "+ building["numberOfRoomsAndRent"][building["nameOfTenants"][1]][0])
// if((building["numberOfRoomsAndRent"][building["nameOfTenants"][1]][1])<(building["numberOfRoomsAndRent"][building["nameOfTenants"][0]][1]+building["numberOfRoomsAndRent"][building["nameOfTenants"][2]][1])){
//     console.log("besoin de tune")
// }

// let numbers = [123, 8409, 100053, 333333333, 7];
// for(let i = 0 ; i <numbers.length ; i++){
//  if( num[0]%3 != 0 ){
//     console.log("true")
// }
// console.log("false")
// }

// let age = [20,5,12,43,98,55];
// let sum = 0 ; 
// let max = 0 ; 
// for(let i = 0 ; i < age.length ; i++){
//     sum += age[i];
//     if(max < age[i]){
//         max = age[i];
//     }
// }
// console.log(max)
// console.log(sum)

let man = {
    FullName :"Samuel",
    Mass:70,
    Height:1.80,
    BMI : function (){
     return (this.Mass*this.Height*this.Height*10000);
 }
}
let girl = {
    FullName :"Raf",
    Mass:75,
    Height:1.80,
    BMI : function (){
     return (this.Mass*this.Height*this.Height*10000);
 }
}

if(girl.BMI()>man.BMI()){
    console.log(girl["FullName"]+" has a biger bmi")
}else{
    console.log(man["FullName"]+" has a biger bmi")
}


function findAvg (gradelist)
{
   let sum = 0;
   let count = 0;
   let average = 0;
   for (let i =0; i<gradelist.length; i++)
   {
       sum += gradelist[i];
       count ++;
   }
   average = sum / count;
   return average;
}
let grade = [80 ,85];
let avg = findAvg(grade);
console.log(avg);
if (avg > 65)
    console.log("You can pass");
else
    console.log("You must repeat the course");