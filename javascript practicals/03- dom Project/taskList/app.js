//Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');

//load all event listners
loadEventListeners();

//load all event listeners
function loadEventListeners(){
    //DOM load event
    document.addEventListener('DOMContentLoaded',getTasks)
    //add tasks event
    form.addEventListener("submit",addTask);
    //remove task
    taskList.addEventListener('click',removeTask)
    //clear all tasks
    clearBtn.addEventListener('click',clearTasks) 
    //filter tasks
    filter.addEventListener('keyup',filterTasks)
}

//get tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }


    //loop through and show all items
    tasks.forEach(function(task){
           
    //create a li element
    const li = document.createElement('li')

    //add class to li
    li.className = 'collection-item'

    //create a text node an dappend it to li
    li.appendChild(document.createTextNode(task))

    //create a link for delete btn

    const link = document.createElement('a');

    //add class to link a
    link.className = 'delete-item secondary-content';

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'

    //append link to li
    li.appendChild(link)

    //append li to ul
    taskList.appendChild(li);
  
    })
}




//add task
function addTask(e){
    e.preventDefault();
    if(taskInput.value === ''){
        alert('Add a task')
    }

    //create a li element
    const li = document.createElement('li')

    //add class to li
    li.className = 'collection-item'

    //create a text node an dappend it to li
    li.appendChild(document.createTextNode(taskInput.value))

    //create a link for delete btn

    const link = document.createElement('a');

    //add class to link a
    link.className = 'delete-item secondary-content';

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'

    //append link to li
    li.appendChild(link)

    //append li to ul
    taskList.appendChild(li);
  

    //store tasks in localstorage
    storeTaskInLocalStorage(taskInput.value);


    //clear input
    taskInput.value = '';
}

//store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks))
}


//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains
        ('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }

    //remove from ls
    removeTaskFromLocalStorage( e.target.parentElement.parentElement)

}

//remove tasks from localstorage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task,index){
        if(task === taskItem.textContent){
            tasks.splice(index, 1)
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))

}





//clears tasks func
function clearTasks(e){
  /*   if(confirm('Are you sure to clear all?')){
        taskList.innerHTML = '';
    }
     */


     //another way and faster in loop
     while(taskList.firstChild){
         taskList.removeChild(taskList.firstChild)
     }

     //clear tasks from local storage
     clearTasksFromLocalStorage();

}

//clear from local storage
function clearTasksFromLocalStorage(){
    localStorage.clear()
}


//filter tasks

function filterTasks(e){
    const text = e.target.value.toLowerCase();
    //console.log(text)

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block'
            }else{
                task.style.display = 'none'
            }
        }
    )
}