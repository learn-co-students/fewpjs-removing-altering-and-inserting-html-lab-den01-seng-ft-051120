// Write your code here!
// let element = document.createElement('div')
// document.body.appendChild(element)

// let ul = document.createElement('ul')

// for (let i = 0; i < 3; i++) {
//   let li = document.createElement('li')
//   li.innerHTML = (i + 1).toString()
//   ul.appendChild(li)
// }

// element.appendChild(ul)

// ul.removeChild(ul.querySelector('li:nth-child(2)'))
let main = document.querySelector('main')
main.remove()
let body = document.querySelector('body')
let newHeader = document.createElement('h1')
newHeader.id = 'victory'
body.append(newHeader)
newHeader.innerHTML = "YOUR-NAME is the champion"