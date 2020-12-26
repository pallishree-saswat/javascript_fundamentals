// DATA TYPES IN JAVASCRIPT
/*
1- Premitive Data types:
Stored directly in the location that the variable accesses 
stored in stack - when you access premitive data you access by its value
- 6 types 
a-String -sequence of letter caharacters
b-Number - number all decimal floats are just numbers
c-Boolean - true or false
d-Null   - intentionally empty value
e-Undefined - variable that has not assigned by a value. all variable are undefined by default
f-Symbols(ES6)

2-Refference data types:
Accessed by refference
Objects that are stored on the heap -dynamically allocated memory
A pointer to a location in memory 

a-Arrays
b-Objects
c-function
d-date
e-anything else

*/

//primitive type
//string
const name= 'John'
console.log(typeof name)
//number
const age= 20
console.log(typeof age)
//boolean
const hasEaten= false
console.log(typeof hasEaten)
//null
const car= null
console.log(typeof null) // it will show object
//undefined
let title;
console.log(typeof title)
//symbol
const sym = Symbol()
console.log(typeof sym)

//reffrence type - objects type
//array
const hobbies = ['movies','music']
console.log(typeof hobbies)
//object literals
const address = {
    city:'Angul',
    state:'Odisha'
}
console.log(typeof address)

//date
const today = new Date();
console.log(today);
console.log(typeof today)