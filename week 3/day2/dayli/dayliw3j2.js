let button = document.getElementById("lib-button");
button.addEventListener("click",function(event){
	event.preventDefault();
	let noun = document.getElementById("noun").value;
	let adjective = document.getElementById("adjective").value;
	let person = document.getElementById("person").value;
	let verb = document.getElementById("verb").value;
	let place = document.getElementById("place").value;

	let storyElement = [noun, adjective, person, verb, place];
	
	let story = document.createElement("P");
	for (let i = 0; i < storyElement.length ; i++)
	{
		if(storyElement[i] == "")
		{
			alert("Please fill all the mandotory", storyElement[i])
		}else {
			let span = document.getElementById("story")
			story.textContent += " "+storyElement[i];
			span.appendChild(story);
		}
	}
	
})

console.log("tets")