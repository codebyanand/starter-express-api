// import purifycss from "purify-css"
const purifycss = require("purify-css")
 
var content = ['year.html'];
var css = ['style.css'];
 
var options = {
  output: 'purified.css'
};
 
purifycss(content, css, options);