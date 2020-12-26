const http = new EasyHTTP;

//GET users
/* http.get(`https://jsonplaceholder.typicode.com/users`) 
.then(data => console.log(data))
.catch(err => console.log(err)) */


//POST to users
//create user data

const data = {
    name : 'John Doe',
    username:'Johndoe',
    email:'jdoe@gmail.com'
}

//create post
/* 
http.post(`https://jsonplaceholder.typicode.com/users` , data) 
.then(data => console.log(data))
.catch(err => console.log(err))  */
/* 
http.put(`https://jsonplaceholder.typicode.com/users/2` , data) 
.then(data => console.log(data))
.catch(err => console.log(err)) */

http.delete(`https://jsonplaceholder.typicode.com/users/2`) 
.then(data => console.log(data))
.catch(err => console.log(err))