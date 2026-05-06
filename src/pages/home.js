const greet = document.createElement("p");
greet.classList.add("greet")
greet.textContent = "Bienvenue Chez";

const name = document.createElement("p");
name.classList.add("name")
name.textContent = "Dorsia";

function load(canvas){
    canvas.replaceChildren(greet, name);
}

export default load;