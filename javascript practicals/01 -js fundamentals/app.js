//INTRODUCTION AND VARIABLES IN JAVASCRIPT

//alert('hello world')

//log to console
/* console.log('hello world') // string
console.log(123); // number
console.log(true); // boolean

var greeting = "hello"
console.log(greeting)

console.log([1,2,3,4]) // array
console.log({a:1, b: 2 , c:3}) // object
console.table({a:1, b:2}) // tabular form of objects

console.error('This is an error'); // error console
console.warn('this is a warning'); // warning
console.time('hello') // time take by script
console.log('hello world') 
console.log('hello world') 
console.log('hello world') 
console.log('hello world') 
console.timeEnd('hello') // total time taken by script from  console.time('hello')

console.clear(); //clear console */

//variables declaration with var keyword
/* var name = 'john'
console.log(name);
name = 'steve'     // it will replace the first value bcause it is var variable
console.log(name)

//init
var greeting;
greeting = 'hello';
console.log(greeting)

//rules
// variable can be consist of letters, numbers, _, $
//can not be start with numbers like  var 1name="john"

//multi word variables
var firstName = 'john' //camel case
var first_name = 'smith' // underscore
var FirstName = 'tom' //pascal case
var firstname = 'joe'

//variables declaration  with let keyword
let name;
console.log(name);
name = 'steve'     //you can re assign value
console.log(name) */

//variables declaration  with const keyword
//const name; // you can initialize with undefined it will give err
const name =" Rama";
console.log(name);
//name = 'laxman'     //you can not change  value give errs
console.log(name)

// object with const keyword
const person = {
    name :"john",
    age:"30"
}
console.log(person)
person.name = "Smith" // we cam change value here but we can not reassign person
person.age = "28"     
console.log(person)
//array with const 
const numbers = [1, 2,3, 4, 5]
numbers.push(6) // add new value to array and you can do that
 console.log(numbers) // but you can re assign the whole array to new array
