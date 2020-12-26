document.getElementById('button').addEventListener('click',loadData)

function loadData(){
    //create an XHR object
const xhr = new XMLHttpRequest()

//open -specify the type of request and file name
xhr.open('GET', 'data.txt' ,true)

//acces at anypoint readystate 
console.log('readyState', xhr.readyState )


xhr.onload = function(){
console.log('readyState', xhr.readyState )
  if(this.status === 200){
      console.log(this.responseText)
      document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`
  }
}

/* //optional -used for spinners /loaders
xhr.onprogress = function(){
    console.log('readyState', xhr.readyState )
} */



//another way to load data method in xhr

/* xhr.onreadystatechange = function(){
    console.log('readyState', xhr.readyState )
    if(this.status === 200 && this.readyState === 4){
        console.log(this.responseText)
    }
}
 */

xhr.send()

//http re
//200 : "ok"
//403:'Forbidden
//404:Not found

//redaystate status
//0 : request not initialized
//1: server connection established
//2: request recieved
//3:processing request
//4:request finished and response is ready

}