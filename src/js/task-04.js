const getAllById = document.querySelector('#counter');
console.log(getAllById);

const getSpan = getAllById.querySelector('#value');
const buttonsAll = getAllById.querySelectorAll('button')

let counterValue = 0;

for (let index = 0; index < buttonsAll.length; index++) {
    buttonsAll[index].addEventListener("click", () => {
        if(buttonsAll[index].getAttribute('data-action')==="increment"){
            counterValue += 1;
            getSpan.textContent = counterValue;  
        } else {
            counterValue -= 1;
            getSpan.textContent = counterValue;
        }
    })
    
    
}
