let val;
val = document; //give all html tag like a document
val = document.all; //give all tag like an array
val = document.all[0] //give you <html lang=en>
val =document.all.length //all of the lements in the dom
val = document.head //give head
val = document.body //give body
val = document.domain 
val = document.doctype
val = document.characterSet;
val = document.contentType;

val = document.forms // give all  forms
val = document.forms[0] //give form based on index
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts //show all script attached to your html body
val = document.scripts[2] //based on index
val = document.scripts[2].getAttribute('src') // give app.js or dom.js or any other attribute

console.log(val)

//forEach function

let scripts = document.scripts;

scripts.forEach(function(script){
    console.log(script)
}) // it will give error because foreach will work with only arrays
//so convert it to an array

let scripts = document.scripts;
let scriptArr = Array.from(scripts)

scriptArr.forEach(function(script){
    console.log(script)
})
// it will give all scripts


