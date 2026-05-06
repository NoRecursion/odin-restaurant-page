import  "./style.css";

import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";

function setupPageBtn(){

}

function init(){
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnAbout = document.querySelector("#btn-about");
    const canvas = document.querySelector("#content");

    btnHome.addEventListener("click",(e)=>{
        canvas.replaceChildren();
        loadHome(canvas);
    });
    btnMenu.addEventListener("click",(e)=>{
        canvas.replaceChildren();
        loadMenu(canvas);
    });
    btnAbout.addEventListener("click",(e)=>{
        canvas.replaceChildren();
        loadAbout(canvas);
    });

    loadHome(canvas);
}

init();

