var images = document.querySelectorAll('.image');
var next = document.querySelector('.btn1');
var prev = document.querySelector('.btn2');

var index = 0;

function show(){
    images.forEach(function(image){
        image.classList.remove('open');
    })  
    images[index].classList.add('open');
}

next.onclick = function(){ 
    index++;
    if(index == images.length){index = 0}
    show();
}

prev.onclick = function(){ 
    if(index == 0){index = images.length}
    index--;
    show();
}