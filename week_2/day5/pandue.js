	let raf;
	let game;
	let end =false;
	let ch = "";
	let index=0;
	let chekLeter= false;
	let chance = 10 ;

	function letter(sam){
		if(index == 8 ){
			end = true;
			alert("Your world is bigger than 8 letters so you cant make its more bigger");
		}
		if(end == false){
			index++;
			raf += sam;
			game +="*";
		}
		
		if(chance==0){
			alert("you canot play you loose");
		}else{
			ch = sam;
		}

	}
	function play(){
		raf="";
		game="";
	}
	function displayWord() {
		alert("your actual word is "+raf);
	}
	function displayGame() {
		alert("your actual word is "+game);
	}
	function chek(){
		if(chance==0){
			alert("you canot play you loose");
		}else{

			for(let i = 0 ; i < raf.length ; i++){
				if(ch == raf.charAt(i) ){
					game = game.substr(0,i) + ch + game.substr(i+1,game.length);
					chekLeter = true;
				}
			} 
			if(gameIsFinish()== true){
				alert("congradulation you win the game the word was "+ raf)
			}
			if(chekLeter == false){
				chance--;
				alert("you have "+ chance+" more chance");
			}else{
				alert("your actual word is "+game)
			}
			chekLeter =false;

		}
	}
	function WordIsFinish(){
		end = true;
	}
	function gameIsFinish(){
		for(let i = 0 ; i < game.length ; i++){
			if(game.charAt(i) != raf.charAt(i)){
				return false;
			}
		}
		return true;		
	}

