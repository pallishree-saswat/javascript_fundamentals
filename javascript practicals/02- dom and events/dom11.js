//LOCAL STORAGE AND SESSIONS

//local storage - store data untill you manually clear it up
//session storage - clear data once you close the browser 
/* 
//set local storage item
localStorage.setItem('name','john');
localStorage.setItem('age','23');

//get local storage item
localStorage.getItem('name');
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')
console.log(name,age)

//remove item from loacl storage
localStorage.removeItem('name')


//clear local storage
//localStorage.clear();


//set session storage
sessionStorage.setItem('name','beth') */

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
  
    let tasks;
  
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  
  tasks.forEach(function(task){
    console.log(task);
  });