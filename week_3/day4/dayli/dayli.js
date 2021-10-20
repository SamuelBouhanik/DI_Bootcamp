let listTasks = [];

let button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function ()
{
    event.preventDefault();
    let input = document.getElementById("input").value;
    console.log(input)
    if(input =="")
    {

        alert("Please enter a stack to do");
    }
    
    else 
    {
        console.log("john");
        let dov = document.createElement("div");
        dov.setAttribute("class", "dov");
        let inpout = document.createElement("input");
        inpout.setAttribute("type", "checkbox");
        inpout.setAttribute("class", "in");

        let hr = document.createElement("hr");
        listTasks.push(input);
        let p = document.createElement("p");
        let div = document.getElementsByClassName("listTasks")[0];
        p.appendChild(document.createTextNode(input));
        inpout.setAttribute("type", "checkbox");
        dov.appendChild(inpout);
        dov.appendChild(p);
        div.appendChild(dov);
        
        
    }
    console.log("john");
})
