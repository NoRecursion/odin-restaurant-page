import stew from "./dishes/nightshade_stew.png";
import steak from "./dishes/steak_poutine.png";
import pasta from "./dishes/ail_e_olio.png";


function makeItem(name, desc, imgPath){
    const node = document.createElement("div");
    node.classList.add("menu-item")

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = name;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = desc;

    const img = document.createElement("img");
    img.src = imgPath;
    
    node.replaceChildren(title,description,img);

    return node;
}

const items = [
    makeItem("Nightshade Stew", "stew desc", stew),
    makeItem("Steak Poutine", "steak desc", steak),
    makeItem("Ail e Olio", "pasta desc", pasta),
]


function load(canvas){
    canvas.replaceChildren(items[0],items[1],items[2]);
}

export default load;