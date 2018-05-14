const button = document.querySelector('button')

console.log(button)
function changeText(){

    const paragraph = document.querySelector('.greeting')
    paragraph.textContent ='howedy' 
}

button.addEventListener('click', changeText)