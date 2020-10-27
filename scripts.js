const ulElement = document.querySelector('ul');

let size = 10

const button = document.querySelector('button')
let liElements = []
let flag = true
const createLiElement = ()=> {
        if (flag){
            for ( let i =0; i<= 10; i++) {
            const liElement = document.createElement('li');
            liElement.style.display = 'block'
            liElement.style.fontSize = `${size}px`
            liElement.textContent = i
            ulElement.appendChild(liElement);
            liElements.push(liElement)
            flag = !flag;  
            }    
        }
    // for (let i = 0; i < liElements.length; i++) {
    //     liElements[i].style.fontSize = size + 'px'
    // }
        liElements.forEach(element => {
        element.style.fontSize = `${size}px`
    });
    size+=1;
    }
    

button.addEventListener('click', createLiElement);

