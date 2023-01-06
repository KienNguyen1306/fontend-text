
var key =document.querySelector('.item.key p:last-child');
var locations =document.querySelector('.location p:last-child');
var which =document.querySelector('.which p:last-child');
var code =document.querySelector('.item.code p:last-child');
var body__header = document.querySelector('.body__header');
var header = document.querySelector('.header');
var body =document.querySelector('.body');




document.addEventListener('keydown', function(e) {  
    header.classList.add('open');
    body.classList.remove('open');
    key.innerText = e.key;
    locations.innerText = e.location;
    which.innerText = e.which;
    code.innerText = e.code;
    body__header.innerText = e.which;

})