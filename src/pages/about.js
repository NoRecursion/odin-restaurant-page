import canal from "./images/canal.jpg"

function bel(type, cls, text){ //make a basic dom element
    const el = document.createElement(type);
    if(cls){el.classList.add(cls);}
    el.textContent = text;
    return el;
}

const ellist = [
    bel("p","","Hours"),
    bel("p","","Wednesday – Sunday"),
    bel("p","","1pm – 11pm"),
    bel("p","","Location"),
    bel("p","","180 Fake Street, Toronto"),
    bel("p","","Contact"),
    bel("p","","456 678 9012"),
    bel("p","","info@dorsia.com"),
    bel("p","","Images from nano banana"),

]

const info = document.createElement("div");
info.classList.add("info");
info.replaceChildren(...ellist);


const store_img = document.createElement("img");
store_img.src = canal;

const about_container = document.createElement("div");
about_container.classList.add("about-container");
about_container.classList.add("js-tab");
about_container.replaceChildren(store_img,info);

function load(canvas){
    canvas.replaceChildren(about_container);
}


export default load;
