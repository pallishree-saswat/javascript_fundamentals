//using es5 

//book constructor
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI constructor
//add book to list and delete the book like that
function UI() {}

//Add book to list
UI.prototype.addBookToList = function(book){
    console.log(book)
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr')

    //insert cols
    row.innerHTML = `
    <td>${book.title} </td>
    <td>${book.author} </td>
    <td>${book.isbn} </td>
    <td><a href="#" class="delete">X</td>
    `

    //append to list
    list.appendChild(row)
}

//show 
UI.prototype.showAlert = function(message, className){
//create div
const div = document.createElement('div')

//add classes
div.className = `alert ${className}`;

//add text

div.appendChild(document.createTextNode(message));

//get parent

const container = document.querySelector('.container');

//get form
const form = document.querySelector('#book-form');

//insert alert
container.insertBefore(div,form)

//time out 
setTimeout(function(){
    document.querySelector('.alert').remove();
}, 3000)

}


// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

//crear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}


//Event Listner for adding book
document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault();

    //Get from values
    const title = document.getElementById('title').value,
           author = document.getElementById('author').value,
           isbn = document.getElementById('isbn').value;

           //console.log(title)
      //instantiate a book
      const book = new Book(title,author,isbn) 
      //console.log(book)    

      //Instantiate UI
      const ui = new UI();

//validate
if(title === '' || author === '' || isbn ===''){
  
    //err alert
    ui.showAlert('Please fill in all fields', 'error')

}else{
   //clear fields
   ui.clearFields();

   //add book to list
   ui.addBookToList(book)

   //show alert
   ui.showAlert('Book added','success')
}


   
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();
  
    // Delete book
    ui.deleteBook(e.target);
  
    // Show message
    ui.showAlert('Book Removed!', 'success');
  
    e.preventDefault();
  });