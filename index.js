const button = document.querySelector('#button1')
const paragraph = document.querySelector('.greeting')

console.log(button)
function changeText(){

   
    paragraph.textContent ='howedy' 
}

button.addEventListener('click', changeText)

 
const buttonx = document.querySelector('#button2')

let y = document.getElementById('input')

function x(){
   
    paragraph.textContent = y
}

if(y){
    buttonx.addEventListener('click', x)
}
