//SELECT SINGLE ELEMENT FROM DOCUMNET
//Dom Selectors = these are document object methods that  allow us to basically
//pull things from the dom and then we can do different things with the elemnts
//or nodes or tags

//Selectors in javascript can be two types
//1- single element and 2- multiple elemnts selectors
/* 
1- single element
it will allow you to grab one element by its ID or its class
it will grab single element --the first on3 only

2-multiple element
this will actually get all of the elements with that class and then return
all collection or node list depending on which selector you use.
 
*/

//document.getElementById - single selector
/* 
console.log(document.getElementById('task-title'));
//get things from dom
console.log(document.getElementById('task-title').id);

//change style
document.getElementById('task-title').style.background = 'blue'
document.getElementById('task-title').style.color = 'white'
document.getElementById('task-title').style.padding = '5px'
//document.getElementById('task-title').style.display = 'none' for hiding element on any event

//change content
document.getElementById('task-title').textContent='task list'
document.getElementById('task-title').innerText='my list'

//insert html
document.getElementById('task-title').innerHTML='<span>my task list</span>'

//you can store it into a variable then use it

const taskTitle = document.getElementById('task-title')

taskTitle.style.background='purple' */

//document.querySelector - you can select everything
//get by id
console.log(document.querySelector('#task-title'))

//get by class
console.log(document.querySelector('.card-title'))

//it will select only first h5 tag
console.log(document.querySelector('h5'))

//select and style but will style first item only
document.querySelector('li').style.color='red'
document.querySelector('ul li').style.color='blue'

//particual one
document.querySelector('li:last-child').style.color='green' // last item will be green color
document.querySelector('li:nth-child(3)').style.color='orange' //3rd item will be orange color

//change text content
//document.querySelector('li').textContent='hello'