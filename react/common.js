import { color, appName, slogen,root } from "./constant"

export function Header() { // color, appName, slogan, root, menuFill()
    let heading = document.createElement("div")
    heading.className = "heading"
    heading.style.background = color[Math.floor(Math.random() * (color.length - 1))]
    heading.innerHTML = `<div class="logo"><h1>${appName}</h1><p>${slogen}</p></div><div class="menu"></div>`
    root.appendChild(heading);
    MenuFill();
}

export function Footer() { // color, root
    let footer = document.createElement("div")
    footer.className = "footer"
    footer.innerHTML = `<div></div>`
    footer.style.background = color[Math.floor(Math.random() * (color.length - 1))]
    root.appendChild(footer);
}

function MenuFill() { // color, menu
    let menuContainer = document.querySelector(".menu");
    menu.forEach((e)=>{
        let lnk = document.createElement("a")
        lnk.href = "./" + e + ".html"
        lnk.textContent = e
        lnk.style.background = color[Math.floor(Math.random() * (color.length - 1))]
        menuContainer.appendChild(lnk)
    })
}