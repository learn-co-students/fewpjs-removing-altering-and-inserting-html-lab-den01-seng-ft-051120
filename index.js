// Write your code here!
let main = document.querySelector('#main')
main.remove()

let newHeader = document.createElement('h1')
newHeader.setAttribute('id','victory')

// document.querySelector('h1#victory')
newHeader.innerHTML = 'YOUR-NAME is the champion'