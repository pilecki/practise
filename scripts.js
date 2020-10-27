const ulElement = document.querySelector('ul');

let size = 10

const button = document.querySelector('button')
let tablica = []
const fun = ()=> {
    for (let i =0 ; i < tablica.length; i++){
        tablica[i].style.fontSize = size + 'px'
    }
}
const createLiElement = ()=> {
    const allUl = document.querySelectorAll('li');
    const allUl1 = [...allUl]
    
    if (allUl1.length < 10) {
        for ( let i =0; i<= 10; i++) {
        const liElements = document.createElement('li');
        liElements.style.display = 'block'
        liElements.style.fontSize = `${size}px`
        liElements.textContent = i
        ulElement.appendChild(liElements);
        tablica.push(liElements)
    }
    }
    
    size+=1;
    fun()
    }
    

button.addEventListener('click', createLiElement);
