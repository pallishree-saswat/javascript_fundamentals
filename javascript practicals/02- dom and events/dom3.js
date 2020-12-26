/* //multiple selectors
//documentsByClassName

const items = document.getElementsByClassName('collection-item'); //but it will select all  class name 

console.log(items)

//and we can access like an array from it
console.log(items[0]); // get first element

items[0].style.color = 'red';
items[3].textContent = 'hello'

// select specific item of collections

const listItem = document.querySelector('ul').getElementsByClassName('li')
console.log(listItem)

//documentsByTagName

let lis = document.getElementsByTagName('li');

console.log(lis);
console.log(lis[0])

//html collections are looking like an array but not an array
//array methods can not apply to it
//we have to convert html collection to an array

//convert HTML collection into an array

lis = Array.from(lis)

lis.reverse();

//we can apply forEach since its an array now

lis.forEach(function(li,index){
    console.log(li.className);
    li.textContent =`${index}: Hello `

})


console.log(lis) */


//document.querySelectorAll
//it returns a npde list not a html collections
const items = document.querySelectorAll('ul.collection li.collection-item')

//its behave like array we dont have to convert it to any array to apply
//array methods

items.forEach(function(item,index){
    item.textContent =`${index} : Hello`
})

//you can loop through and select all odd li and even lis and do diiferents action on it

const liOdd = document.querySelectorAll('li:nth-child(odd)');

const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li,index){
    li.style.background ='red';
})

liEven.forEach(function(li,index){
    li.style.background ='grey';
})

//USING FORLOOP
for(let i =0; i < liOdd.length; i++){
    liOdd[i].style.background = 'darkgrey'
}


console.log(items)
