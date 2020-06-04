// Write your code here!
let main = document.getElementById('main');
let body = document.querySelector('body');

body.removeChild(main);
let newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Will is the champion";
body.appendChild(newHeader);
