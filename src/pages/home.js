const greet = document.createElement("p");
greet.classList.add("greet");
greet.textContent = "Bienvenue chez";

const name = document.createElement("p");
name.classList.add("name");
name.textContent = "Dorsia";

const home_container = document.createElement("div");
home_container.classList.add("home-container");
home_container.classList.add("js-tab");
home_container.replaceChildren(greet, name);

function load(canvas){
    canvas.replaceChildren(home_container);
}

export default load;
