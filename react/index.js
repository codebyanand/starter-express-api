import {appName,slogen,nCards,color,root} from "./constant.js";
import { Card, MenuFill } from "./helper.js";

Header()
Body()
Footer()

function Body() { // Card(), nCards, root
    let container = document.createElement("div")
    container.className = "container";
    root.appendChild(container)
    for (let i = 0; i < nCards; i++) { Card() }
}

function Header() { // color, appName, slogan, root, menuFill()
    let heading = document.createElement("div")
    heading.className = "heading"
    heading.style.background = color[Math.floor(Math.random() * (color.length - 1))]
    heading.innerHTML = `<div class="logo"><h1>${appName}</h1><p>${slogen}</p></div><div class="menu"></div>`
    root.appendChild(heading);
    MenuFill();
}

function Footer() { // color, root
    let footer = document.createElement("div")
    footer.className = "footer"
    footer.innerHTML = `<div></div>`
    footer.style.background = color[Math.floor(Math.random() * (color.length - 1))]
    root.appendChild(footer);
}
