
//! cachs 1
// var input  = document.querySelector('.input');
// var form = document.querySelector('form');
// var btn = document.querySelector('.btn');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     var inputValue = input.value.trim();
//     var todo__lists = document.querySelector('.todo__lists');
//     var todo_list = document.querySelector('.todo_list');

//     var HTMls='';
//     HTMls = `
//             <div class="todo_list ">
//                 <span class="span">${inputValue}</span>                  
//                 <i class="fa-regular fa-trash-can"></i>
//             </div>
//             `
//      todo__lists.innerHTML += HTMls;
     
//      input.value = '';
    
    
//      var todo_list =document.querySelectorAll('.todo_list');
     
//      for(var i=0; i<todo_list.length; i++)  {
//         todo_list[i].onclick = function(e) {  
//             if(e.target.classList.contains('fa-trash-can')){
//                this.remove();
//             }
//             if(e.target.classList.contains('span')){
//                 this.className = 'todo_list open'
//              }
//          }
//      }
// })



//! cachs 2

var form = document.querySelector('form');
var input  = document.querySelector('.input');
var todo__lists = document.querySelector('.todo__lists');
var btn = document.querySelector('.todo_list i');

function readerTodo(){ 
    form.addEventListener('submit', function(event){
        event.preventDefault();
        var inputValue = input.value.trim();
        if(inputValue != ''){
            var div = document.createElement('div');
            div.classList.add('todo_list');
            div.innerHTML = `
                                <span class="span">${inputValue}</span>                  
                                <i class="fa-regular fa-trash-can"></i>
                            `
            todo__lists.appendChild(div);
            input.value ='';
        }else {
            alert('Please select a list item');
        }
    })

    todo__lists.addEventListener('click',function (e) { 
        if(e.target.classList.contains('fa-trash-can')){
            e.target.parentElement.remove();
        }
        if(e.target.classList.contains('span')){
            e.target.parentElement.className= 'todo_list open';
        }

    })
}

readerTodo()

