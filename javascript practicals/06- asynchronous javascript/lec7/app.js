//FETCH API IN JAVASCRIPT
//FETCH API IS NOW PART OF WINDOW OBJECT

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
/* function getText() {
    fetch('text.txt')
      .then(function(res){
      return res.text();
      })
      .then(function(data) {
        console.log(data)
        document.getElementById('output').innerHTML = data;
      })
      .catch(function(err){
        console.log(err)
      })
    } */
  

    // Get json file data
function getJson() {
  fetch('posts.json')
    .then(function(res){
    return res.json();
    })
    .then(function(data) {
      console.log(data)
     let output = '';
     data.forEach(function(post) {
       output += `<li>${post.title}</li>`
     });
     document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err)
    })
  }

  
 // Get external file data
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res){
    return res.json();
    })
    .then(function(data) {
      console.log(data)
     let output = '';
     data.forEach(function(user) {
       output += `<li>${user.login}</li>`
     });
     document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err)
    })
  }

  //Using arrow function
  // Get local text file data
function getText() {
  fetch('text.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data)
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err))
     
  }