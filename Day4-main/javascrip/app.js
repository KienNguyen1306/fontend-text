
var images =document.querySelectorAll('.image img');
var overplay =document.querySelector('.overplay');
var scale__img = document.querySelector('.scale__img img');
var close =document.querySelector('.overplay i');
var prav = document.querySelector('.icon__left');
var next = document.querySelector('.icon__right') ;

var currentIndex = 0;
images.forEach(function(img,index) {  
    img.addEventListener('click',function(e) {
        overplay.classList.toggle('open');
        currentIndex = index;
        scale__img.src = images[currentIndex].src;
    })
})

close.onclick= function(e) {   
    overplay.classList.toggle('open');
}


prav.onclick = function(e) {   
    if(currentIndex < 0){
        currentIndex = images.length-1;
    }
    scale__img.src = images[--currentIndex].src;
}

next.onclick = function(e) {   
    if(currentIndex == images.length){
        currentIndex = 0;
    }
    scale__img.src = images[++currentIndex].src;
}

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27){
    overplay.classList.toggle('open');
    }
    
} );