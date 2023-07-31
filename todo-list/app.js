window.onload = function(){
    let task_list = document.querySelector(".taskList");
    let input_list = document.querySelector(".inputlist");
    let button = document.querySelector(".addListButton");     

    button.addEventListener('click',function(){
        const newTask = document.createElement('li');
        const task = document.createTextNode(input_list.value);
        newTask.appendChild(task);
        task_list.appendChild(newTask);
        input_list.value = '';
    })      
}

