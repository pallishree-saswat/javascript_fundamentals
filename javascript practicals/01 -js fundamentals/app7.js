//ARRAY METHODS IN JS

//create some arrays

const numbers = [23,34,55,66,56,78,89] //1st way
const numbers2 =new Array(23,34,55,66,56,78,89) //2nd way with Array() constructors 
const fruit = ['Apple', 'bannana','orange'] //array of strings
const mixed = [22, 'hello', true,undefined,null,,{a:1,b:2},new Date()] //mixed of all data types array

//console.log(mixed)

let val;

//get array length
val = numbers.length; //7
//check if is array
val = Array.isArray(numbers); //true
val = Array.isArray('hello'); //false
//get a single value from an array
val = numbers[3] //66 arrays are 0 based 
val = numbers[0] //23

//insert anything into array
numbers[2] = 100 //const numbers = [23,34,100,66,56,78,89]

//find position or index num 
val = numbers.indexOf(78); //5 position

//Mutating array
//add onto  end
numbers.push(250)  //[23,34,100,66,56,78,89,250]
//add on to front 
numbers.unshift(120); // [120,23,34,100,66,56,78,89]
//take off from end
numbers.pop()   // [120,23,34,100,66,56,78,89]

//take off from front
numbers.shift() // [23,34,100,66,56,78,89] 120 gone

//Splice values
numbers.splice(1,1) //first 1 represents from position 1 and 1 number will go
// numbers.splice(1,3)

//reverse  the array
numbers.reverse();

//CONCATENATE ARRAY
val = numbers.concat(numbers2)

//sorting arrays
val = fruit.sort(); //alphabetical order
val = numbers.sort() // only sort the first digit  of all numbers

//use the compare fuinction to sorting from 1 to 1000 and so on
val = numbers.sort(function(x,y){
    return x-y;
})

//Reverse sort
val = numbers.sort(function(x,y){
    return y-x;
})

//find
function under50(num){
    return num < 50
}

val= numbers.find(under50) // it will return the just below number that is under 50


console.log(numbers)
console.log(val)

