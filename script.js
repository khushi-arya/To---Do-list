let btn = document.getElementById('addtodo');
let  todo = document.getElementById('todocontainer');
let input = document.getElementById('inputfield');

btn.addEventListener('click', function(){
    var para = document.createElement('p');
    para.innerText = input.value;
    todo.appendChild(para);

})