//OBJECT LITERALS

const person = {
    firstName : 'Steve'  ,
    lastName :'Smith',
    age :30,
    email : 'steve@gmail.com',
    hobbies:['music','sports'],
    address:{
        city:'Miami',
        state:'FL'
    },
    getBirthYear: function(){
        //return 1987 
        return 2019 - this.age // inside object you have write this keyword
    }
} /// this defines a object in key and value pair
/* 
let val;
val = person;
console.log(val) // it will give full object

//get specific value
val = person.firstName

val = person['firstName'] // another way to get specific value
console.log(val) */

/* let val;
val = person.firstName
val= person.lastName;
val=person.age;
val = person.address.city;
val = person.address['state']
val = person.hobbies[1]
val = person.getBirthYear()

console.log(val) */


//arrayof objects

const people = [
    {name : 'Mike', age:20},
    {name:'John', age:27},
    {name:'smith', age: 30}
]

for(let i=0; i < people.length; i++){
    console.log(people[i].name)
}
// it will print all name 
