
var button = document.querySelector('button');
var wrapper__box = document.querySelector('.wrapper__box');

button.addEventListener('click', function() {
    wrapper__box.classList.toggle('open');
    this.previousElementSibling.focus();
});