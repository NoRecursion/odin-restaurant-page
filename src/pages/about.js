
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


]

const about_container = document.createElement("div");
about_container.classList.add("about-container");
about_container.classList.add("js-tab");
about_container.replaceChildren(...ellist);

function load(canvas){
    canvas.replaceChildren(about_container);
}


export default load;