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

    btnHome.addEventListener("click",(e)=>{loadHome(canvas)});
    btnMenu.addEventListener("click",(e)=>{loadMenu(canvas)});
    btnAbout.addEventListener("click",(e)=>{loadAbout(canvas)});

    loadHome(canvas);
}

init();