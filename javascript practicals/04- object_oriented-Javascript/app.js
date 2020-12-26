//Constructor Methods for multiple instances
//you can create multiple object literals like key and value pairs
//by using "new and Constructor" like in here new Person

//person constructor
function Person(name,dob){ //here name is arguement ..you can add multiple arguments

    this.name = name;      //this.name  is property
   // this.age= age;
    this.dob = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    //console.log(this)
}
    
/* const brad = new Person('hello',27); 
const smith = new Person('hii',25); 
const john = new Person('hola',24);  */


const brad = new Person('hello','2-12-1995')
console.log(brad.calculateAge())