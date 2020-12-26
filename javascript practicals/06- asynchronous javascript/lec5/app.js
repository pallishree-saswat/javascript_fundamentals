//instansiate an new http request

const http = new easyHTTP;

//get post 
/* http.get('https://jsonplaceholder.typicode.com/posts',   //first parameter is url and second is callback function
function(err, posts){                                   //inside call back first parameter is error and second is for responsetext
    if(err){
        console.log(err)
    }else{
        console.log(posts)
    }
}


) */

/* //get  a single post 
http.get('https://jsonplaceholder.typicode.com/posts/1',   
function(err, post){                                   
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
}


) */

//send post bt post method

//first create data
const data = {
    title :'custome title',
    body: 'This is custom post'
}

/* http.post('https://jsonplaceholder.typicode.com/posts', data, 
function(err, post){
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }

}) */

/* //update a post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, 
function(err, post){
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }

}) */

//delete  a  post 
http.delete('https://jsonplaceholder.typicode.com/posts/1',   
function(err, response){                                   
    if(err){
        console.log(err)
    }else{
        console.log(response)
    }
}


) 