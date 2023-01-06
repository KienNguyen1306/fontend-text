
var h1=document.querySelector('.header_body h1')
var kp =document.querySelectorAll('.kp');

function kiemtra(element){
    var rect =element.getClientRects(); // =>left,right,top,bottom,width,height
    var heightWindown =window.innerHeight;
    if(!(rect[0].top<0 || rect[0].bottom >heightWindown)){
        element.classList.add('start');
    }else {
        element.classList.remove('start');
    }
}


function checkanimation(){
    kp.forEach(function(item){
        kiemtra(item);
    })
    
}

window.onscroll =checkanimation

