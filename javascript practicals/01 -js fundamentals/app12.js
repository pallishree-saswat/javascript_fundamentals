//FUNCTIONS IN JS

//function declaration
/* function greet(){
  console.log('hello')
} */

//greet() - it will print hello fron above console.log

function greet(firstname, lastname){    //firstname is parameter and you can add multiple parameters by adding comma

    return 'Hello' + firstname + ' ' + lastname;  
}

console.log(greet('John', 'Doe')) //greet() function and for firstname parameter value is John

 //default parameter value

 function greet(firstname, lastname){    //firstname is parameter and you can add multiple parameters by adding comma
 if(typeof firstname === undefined){firstname= 'John'}
 if(typeof lastname === undefined){lastname= 'doe'}
  return 'Hello' + firstname + ' ' + lastname;  
}

console.log(greet())

//in es6 
function greet(firstname = 'John', lastname = 'doe'){   //default value

   return 'Hello' + firstname + ' ' + lastname;  
 }
 console.log(greet()) //hello john doe
 console.log(greet('smith','setve')) //it will over write the default value hello smith setve

 //FUNCTION EXPRESSION

 const square = function(x){
   return x*x;
 };

 console.log(square(8)) //64

 //IMMIDIATELY INVOKABLE FUNCTION EXPRESSION IIFES

 (function(){
   console.log('iifes ran...')
 })()

 //with parameters
 (function(name){
  console.log('hello' + name)
})('Palli')

//PROPERTY METHODS
//when a function put inside an object ,,it is aclled method

const todo = {
  add: function(){   //add is amethod
    console.log('add todo')
  },
  edit: function(id){
    console.log(`edit todo ${id}`)   // edit is a method and it will take id as parameter because you should know what exactly you want to edit
  }
}

//you can consturct function outside of it like
todo.delete = function(){
  console.log('delete todo')
}


todo.add() // it will print add todo
todo.edit(22) //it will print edit tod 22
todo.delete() //it will print dlete todo