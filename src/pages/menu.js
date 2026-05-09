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

const steak_desc ="Premium pan-seared New York Strip steak, sliced and draped in a velvety white peppercorn cream sauce and topped with a nest of fresh micro-greens. Served alongside a bowl of our signature Classic Poutine—crispy, golden fries and squeaky cheese curds smothered in rich savory gravy, finished with a flourish of freshly chopped parsley."
const stew_desc ="Salt-cured eggplant, sweet roasted bell peppers and fatty chuck steak slow-simmered in a robust, garlic-infused tomato reduction. Deglazed for depth and sparked with the bright heat of a Scotch bonnet pepper and finished with basil. Served with jasmine rice."
const pasta_desc ="This timeless Italian staple features al dente pasta tossed in a emulsion of golden-toasted garlic, fresh chili pepper, premium extra virgin olive oil and mixed with aged Parmigiano Reggiano. Finished with a touch of lemon and parseley."

const items = [
    makeItem("Nightshade Stew", stew_desc, stew),
    makeItem("Steak Poutine", steak_desc, steak),
    makeItem("Ail e Olio", pasta_desc, pasta),
]

const menu_container = document.createElement("div");
menu_container.classList.add("menu-container");
menu_container.classList.add("js-tab");
menu_container.replaceChildren(items[0],items[1],items[2]);

function load(canvas){
    canvas.replaceChildren(menu_container);
}

export default load;