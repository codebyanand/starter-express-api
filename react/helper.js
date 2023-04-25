import { color, titleLength, descriptionLength, content, menu } from "./constant.js";

export function Card() { // color, content,  titleLength, descriptionLength
    let container = document.querySelector(".container");
    let num = Math.floor(Math.random() * (content.length - 200))
    let card = document.createElement("div");
    card.className = "card";
    card.style.background = `linear-gradient(${color[Math.floor(Math.random() * (color.length - 1))]}, ${color[Math.floor(Math.random() * (color.length - 1))]})`;
    card.innerHTML = `<div class = "img"></div>
        <h4>${content.substring(num, num + titleLength).trim().replace(/,/g, "").replace("?", "").replace(/!/g, "")}</h4>
        <p>${content.substring(num + titleLength, num + titleLength + descriptionLength).trim()}</p>
        <hr><h2 class="price">₹ ${Math.floor(Math.random() * 100)}</h2></div>`;
    container.appendChild(card)
}


export function MenuFill() { // color, menu
    let menuContainer = document.querySelector(".menu");
    menu.forEach((e)=>{
        let lnk = document.createElement("a")
        lnk.href = "./" + e + ".html"
        lnk.textContent = e
        lnk.style.background = color[Math.floor(Math.random() * (color.length - 1))]
        menuContainer.appendChild(lnk)
    })
}