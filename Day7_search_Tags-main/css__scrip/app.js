var input = document.querySelector('.body input');
var body = document.querySelector('.body');
var close = document.querySelector('.body li i');
var deleteAll = document.querySelector('.footer button');


var lists = [];

function loadTags() {
    var html= ''
    lists.forEach(function(key,index) {
        html += ` <li>${key}
                    <i class="fa-solid fa-xmark" onclick="remoceTag(${index})" ></i>
                </li>
                    `
        })
    body.innerHTML = html;
    body.appendChild(input); // theem input vaof
    input.focus();
}

input.addEventListener('keydown', function(e) {
    if(e.which == 13){
        lists.push(input.value);
        loadTags();
        input.value='';
    }
})

var remoceTag = function(index){
    lists.splice(index, 1);
    loadTags();
}

deleteAll.onclick=function(){
    lists = [];
    loadTags();
};