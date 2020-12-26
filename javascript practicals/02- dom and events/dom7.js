//Event listner

/* document.querySelector('.clear-tasks').addEventListener('click',function(e){
   e.preventDefault()
    console.log('hello world')
}) */

//named function
document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    e.preventDefault();
    //console.log('hiii')

    let val;
    val =e ; //it will give the whole mouseEvent object


    //Event target elements
    
    //val =e.target; // it will give the element
    val = e.target.id //get id of that element
    val = e.target.className //get class name
    val = e.target.classList; //whole list

   // e.target.innerText = 'hello' //it will change the button text to hello after click
    
    
    //Event type
    val = e.type //here click or mouseover any type you get
    
    //Timestamp
    val = e.timeStamp;

    //coordinates event relative to the window
    val = e.clientY
    val=e.clientX
     
    //coordinates event relative to the elements
    val = e.offsetY
    val=e.offsetX


    console.log(val)
    
}

