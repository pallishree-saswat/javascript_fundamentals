//JAVASCRIPT PROMISES
//this is alternative to CAllBACk functions
//js promises promise to do something when a perticular operation is finished
//we call promise with .then() method


/* const posts = [
    {title : "post one", body:"post one"},
    {title : "post two", body:"post two"}
]

function createPost(post){
 return new Promise(function(resolve, reject){
    
    setTimeout(function(){
        posts.push(post)
        resolve()
    },2000) 
 })


    
}

function getPosts() {
    setTimeout(function(){
    let output = ''
    posts.forEach(function(post){
        output += `<li> ${post.title} </li>`
    })
        document.body.innerHTML = output
    }, 1000)
}

createPost({title:"post three", body:"post three"})
.then(getPosts) */


// with error 


const posts = [
    {title : "post one", body:"post one"},
    {title : "post two", body:"post two"}
]

function createPost(post){
 return new Promise(function(resolve, reject){
    
    setTimeout(function(){
        posts.push(post)

        const error = true;

        if(!error) {
            resolve()
        }else{
            reject('Error: something went wrong')
        }
       
    },2000) 
 })


    
}

function getPosts() {
    setTimeout(function(){
    let output = ''
    posts.forEach(function(post){
        output += `<li> ${post.title} </li>`
    })
        document.body.innerHTML = output
    }, 1000)
}

createPost({title:"post three", body:"post three"})
.then(getPosts)
.catch(function(err){
    console.log(err)
})