var button = document.querySelector('.btn_modal');
var close = document.querySelector('.form > i');
var modal= document.querySelector('.modal');
var overplay= document.querySelector('.overplay');

function show(){
    overplay.classList.toggle('hide');
}

button.addEventListener('click', function(e) {
    show();
});

close.addEventListener('click', function(e) {
    show();
});

overplay.addEventListener('click', function(e) { 
    if(e.target==e.currentTarget){
        show();
    }
});
