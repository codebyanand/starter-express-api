import jsdom from "jsdom";
import fs from "fs";
{jsdom} = jsdom;
let html = fs.readFileSync("allDb.html","utf8")
console.log(html);