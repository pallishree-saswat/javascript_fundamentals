//STRING METHODS IN JAVASCRIPT

const firstName  = 'William';
const lastName ='Johnson'
const age = 20;
const str = 'hello there my name is john';
const tags = 'web designer ,web development,programming'

let val;

val = firstName + lastName
console.log(val)

//concatenation
val = firstName + '' + lastName;

//append
val = 'john'
val += 'son'

val = 'Hello , my name is' + firstName + 'and i m ' + age;

console.log(val)

//Escaping
//val = 'that's aswesome, I can't wait' //error

val = "that's awesome , ican't wait";
val = 'that\'s awesome, i can\'t wait';

//length
val = firstName.length;

//concat
val = firstName.concat('',lastName);

//changecase
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2] 

//indexof() 
val = firstName.indexOf('l') //what is the first index of first l = 2 position
val = firstName.indexOf('l') //what is the last index of last l = 3 position

//chartAt()
val = firstName.charAt('2') // what letter is at index 2 position ="l"

//get last characcter 
val = firstName.charAt(firstName.length - 1) //m

//substring()
val = firstName.substring(0,4) // will

//slice()
val = firstName.slice(0,4) // will
val = firstName.slice(-3) // iam

//split()
val = str.split('');
val = tags.split(',') // it will separate by commas

//replace()
val = str.replace('John', 'jack') // replace a perticualr word

//includes()
val = str.includes('foo') //false because there is no foo word in str
val = str.includes('hello') //true

console.log(val)