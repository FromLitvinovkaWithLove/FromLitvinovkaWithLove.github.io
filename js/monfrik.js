window.onload = function () {

var img_btn = document.querySelectorAll('img_btn');
img_btn.forEach(function(i) {
i.addEventListener('click', function(e) {
e.target.classList.toggle('show');
})
})
}
