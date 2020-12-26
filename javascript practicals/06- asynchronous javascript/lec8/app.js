//ARROW FUNCTIONS IN JAVASCRIPT 
//FEATURES OF ES6 classes

//normal function
/* const sayHello = function() {
    console.log('hello')
} */

//in arrow function
/* 
const sayHello = () => {
    console.log('hello')
} */

//one line function does not need braces
/* const sayHello = () => console.log('hello') */

//one line returns
/* const sayHello = () => 'hello' */

//same as above
/* const sayHello = function() {
    return 'Hello';
} */
//sayHello();

//Return object
/* const sayHello = () => ({ msg : 'Hello'})

console.log(sayHello()) */

//single param not need parentheasis
/* const sayHello = name => console.log(`hello ${name}`)
sayHello('Palli') */


//multiple need parentheasis
/* const sayHello = (firstname, lastname) => console.log(`hello ${firstname} ${lastname}`)
sayHello('Palli','saswat') */

const users = ["nathan" , 'John', 'Doe']

/* const nameLen = users.map(function(name) {
    return name.length;
}) */

/* const nameLen = users.map((name)=> {
    return name.length;
})  */

const nameLen = users.map(name=> name.length);
   


console.log(nameLen)
