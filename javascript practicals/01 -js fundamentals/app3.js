// TYPE CONVERSION IN JAVASCRIPT

//declaration
let val;

//initialization
val = 5;

//output
console.log(val);
console.log(typeof val);
console.log(val.length) //undefined bcause we trying to map length of a number
//if we convert that to astring then it will show length of 1
val = String(5)
console.log(val);
console.log(typeof val);
console.log(val.length)

//boolean to string
val = String(true)
console.log(val);
console.log(typeof val);
console.log(val.length)


//Date to string
val = String(new Date())
console.log(val);
console.log(typeof val);
console.log(val.length)

//array to string
val = String([1,2,3,4])  ///7 includes comas
console.log(val);
console.log(typeof val);
console.log(val.length)

//toString() function to convert anything to string
val = (5).toString()
console.log(val);
console.log(typeof val);
console.log(val.length)

val = (true).toString()
console.log(val);
console.log(typeof val);
console.log(val.length)

//convertion from String to num
val = Number('5')

console.log(val)
console.log(typeof val)
console.log(val.toFixed()); 
//calculate the length of number does not work in string also includes decimal u can add decimal point you want to show toFixed(2)= 5.

val = Number(true) // 1
val = Number(false) //0
val = Number(null) //0
val = Number('hello') // NaN - not a number
val = Number([1,2,3])

//parseInt() function to convert anything to number
val = parseInt('100.30') // 100 it will give only integer
val = parseFloat('100.30') // it will give decuimal num 100.3
console.log(val.toFixed(2)) // 100.30

//type coersion
//javascript do it
 const val1 = 5;
 const val2 = 6;
 const sum = val1+ val2
 console.log(sum) // 11
 console.log(typeof sum) // number

 const val1 = String(5);
 const val2 = 6;
 const sum = val1 + val2
 console.log(sum) //56
 console.log(typeof sum) //string 
 //if you want that 56 to be a num then do like this
 const sum = Number(val1 + val2) // 56 and type of number