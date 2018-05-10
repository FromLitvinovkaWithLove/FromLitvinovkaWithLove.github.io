window.onload = function () {
let body = document.getElementById('body');
let btns = document.querySelectorAll('.img_btn'); 
for (let i = 0; i<btns.length; i++){ 
let btn = btns[i]; 
btn.addEventListener('click', clickHandler); 
} 

function clickHandler(event) { 
this.classList.toggle('show'); 
body.classList.toggle('body');
} 

}
