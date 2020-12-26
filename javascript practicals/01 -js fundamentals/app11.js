//SWITCH IN JS
//it is another way to validate conditions like if else statements

const color = 'blue';

switch(color){
    case 'blue':
        console.log('Color is blue')
        break;
    case 'red':
        console.log('Color is red');
        break;
    default:
        console.log('Color is not red or blue')
        break;        
}

let day;

switch(new Date().getDay()){
    case 0:                 
        day = 'Sunday'
        break;
    case 1:                 
        day = 'Monday'
        break;    
    case 2:                 
        day = 'Tuesday'
        break;
    case 3:                 
        day = 'Wednesday'
        break;
    case 4:                 
        day = 'thursday'
        break;
    case 5:                 
        day = 'friday'
        break;
    case 6:                 
        day = 'saturday'
        break;
}

console.log(`today is ${day}`)