//DATE AND TIME IN JS
const today = new Date();
let birthday = new Date('9-10-1998 11:25:00')
birthday = new Date('september 10 1998')
birthday = new Date('9/10/1998')

val  = today.getMonth() //it is 0 based
val = today.getDate() 
val = today.getDay();
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getMilliseconds()
val = today.getTime()
console.log(val)

birthday.setMonth(2)
birthday.setDate(12)
birthday.setFullYear(1998);
birthday.setHours(3)
birthday.setMinutes(30)
birthday.setSeconds(25)

console.log(birthday)
