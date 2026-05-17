import canal from "./images/canal.jpg"

function bel(type, cls, text){ //make a basic dom element
    const el = document.createElement(type);
    if(cls){
        cls = cls.split(' ');
        el.classList.add(...cls);
    }
    if(text){
        el.textContent = text;
    }
    return el;
}

function p(text){
    return bel('p',null,text);
}

const lwing = bel('div','lwing');
const rwing = bel('div','rwing');
const bbar = bel('div','bbar');

lwing.replaceChildren(
    p('Hours'),
    p('Monday:'),
    p('Tuesday:'),
    p('Wednesday:'),
    p('Thursday:'),
    p('Friday:'),
    p('Saturnday:'),
    p('Sunday:'),
    p('Closed'),
    p('Closed'),
    p('11am - 11pm'),
    p('11am - 11pm'),
    p('11am - 2am'),
    p('11am - 2am'),
    p('Closed'),
);

rwing.replaceChildren(
    p('Location'),
    p('180 Fake Street, Toronto'),
    p(''),
    p('Telephone'),
    p('456 678 9012'),
    p(''),
    p('Email'),
    p('info@dorsia.com'),
);

bbar.innerHTML = `
Recipe images made with Nano Banana,
Home background by <a href="https://unsplash.com/@lifeinkorea">Ira Kang</a>
on <a href="https://unsplash.com/photos/open-window-reveals-a-<Select>lush-green-scene-6usX2ejzGH4">unsplash</a>,

Menu background by<a href="https://unsplash.com/@armand_khoury">Armand Khoury</a>
on <a href="https://unsplash.com/photos/a-building-with-a-brick-patio-and-a-brick-walkway-OVeihXMzQHA">unsplash</a>

About background by <a href="https://unsplash.com/@pat__">p -</a>
on <a href="https://unsplash.com/photos/people-gathering-inside-cafe-during-golden-hour-KveL_hxuY0Q">unsplash</a> 
`

const about_container = document.createElement("div");
about_container.classList.add("about-container");
about_container.classList.add("js-tab");
about_container.replaceChildren(lwing,rwing,bbar);

function load(canvas){
    canvas.replaceChildren(about_container);
}


export default load;
