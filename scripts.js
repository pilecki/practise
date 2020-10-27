let size = 10;
let orderElement = 1;
const init = () => {
const btn = document.createElement('button');
btn.textContent = 'Make list'
const secondBtn = document.createElement('button');
secondBtn.textContent = 'Reset'
const ulElement = document.createElement('ul')
document.body.appendChild(btn);
document.body.appendChild(ulElement);
document.body.appendChild(secondBtn);
btn.addEventListener('click', createLiElements)
secondBtn.addEventListener('click', function(){
    let liElements = document.querySelectorAll('li')
    console.log(liElements)
    liElements.forEach( element => {
        element.remove()
        size = 10
        orderElement = 1
    })


})

}

const createLiElements = () => {
    for (let i = 0; i <= 10; i++ ){
        const ulElement = document.querySelector('ul')
        const liElement = document.createElement('li')
        liElement.textContent = orderElement
        liElement.style.display = 'block'
        liElement.style.fontSize = `${size}px`
        ulElement.appendChild(liElement)
        orderElement++
        size++
    }
}

init()

