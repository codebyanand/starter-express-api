import main from "./main.js";
import user from"./user.js"
export const message = (id)=>{
    let div = document.querySelector("#p");
    let content = document.createElement("p");
    content.id = id;
    content.className = `paragraph ${id}`;
    content.textContent = "this is the text content under div > p tag!";
    div.appendChild(content);

    console.log(user[0]);
    return main + " " + user[0].name;
};

let message = (age < 3) ? 'Hi, baby!' : (age < 18) ? 'Hello!' : (age < 100) ? 'Greetings!' : 'What an unusual age!';