let bottle = 99;
let count = 1 ; 
while(bottle>0){
	if(bottle == 99 ){
		console.log("99 bottles of beer on the wall");
		console.log("99 bottles of beer");
		console.log("Take 1 down, pass it around");
	}else{
		console.log(`${bottle} bottles of beer on the wall`);
		console.log(`${bottle} bottles of beer on the wall`);
		console.log(`${bottle} bottles of beer`);
		console.log(`Take ${count} down, pass them around`);
		console.log(`${count} bottles of beer`)

	}
	bottle = bottle-count;
	count++;

}