// GENERAL  LOOPS In JAVASCRIPT 

//FOR LOOP

for(let i = 0; i < 10; i++){
    //console.log(i)
    console.log('number' + i) // print number 1 to number 9
}

for(let i = 0; i <=10; i++){
    //console.log(i)
    console.log('number' + i) // print number 1 to number 10
}

//continue statement
//lets take a break at num 2 and say something about 2

for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my fav num')
    }
    console.log('number' + i)
    
} // it will print '2 is fav num immideately seeing 2 but it will also print num 2 again for second console statement

//so here we should write continue statement to stop there and go again to loop
//and not print number 2 again 


for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my fav num');
        continue;
    }
    console.log('number' + i)
    
}

//it will print 2 is my fav num and wont print num 2 again

//break statement
//break will stop the loop there after it meet the condition is true


for(let i = 0; i < 10; i++){
    if(i === 2){
        console.log('2 is my fav num');
        continue;
    }

    if(i === 5){
        console.log('Stop the loop');
        break;
    }
    console.log('number' + i)
    
}

// it will print 1 2 3 4 and stop the loop dont even print 5

//WHILE LOOP

//in general if you know the number of iteration ...how many times the loop will run go for for loop
//and when the no of iteration is unclear go for while loop

// in while loop declare the variable outside the loop

let i = 0;

while(i < 10){
    console.log('number' + i);
    i ++;
}

//DO WHILE LOOP

let i = 0;

do{
    console.log('Num'+ i)
        i ++;
    
}while(i < 10);

//in do while loop it is always going to run once no matter what the condition is
//example if i is set to be 100 and while condition id i < 10 it will print number 100 only
/* let i = 100;

do{
    console.log('Num'+ i)
        i ++;
    
}while(i < 10); */

//LOOP through ARRAY

const cars = ['Ford','Chevy','Honda','Toyota']

for(let i =0; i < cars.length; i ++){
    console.log(cars[i])

}

// ford chevy honda toyota

//FOREACH LOOP
//it will take a self calling function with three parameter  
//3 parameters = itirators, index, and the entire arrays
cars.forEach(function(car){
    console.log(car)
})


// car is itirator here
cars.forEach(function(car, index, array)
{
    console.log(`${index}: ${car}`);
    console.log(array)
})
// 0 : Ford 1: chevy 2: Honda 3: Toyota  --- index num with car values
//arry will return entire array

//MAP METHOD

const users = [
    { id:1, name:"John"},
    {id :2, name:"Sara"},
    {id :3, name:"karen"}
];

const ids = users.map(function(user){
    return user.id;
})
console.log(ids); //1,2,3

//map method also take a sekf calling function and take parameters
//and return a new array

//FOR IN LOOP

//construct a object
const user = {
    firstname:'John',
    lastname: 'Doe',
    age:'30'
}

for(let x in user){
    console.log(x) // it will retur only keys
    console.log(`${x} : ${user[x]}`) // it will return the entire object key and value pairs
}