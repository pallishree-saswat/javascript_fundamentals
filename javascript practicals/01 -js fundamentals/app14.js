//As with many other things the window is the globlal object in client side javascript

//WINDOW METHODS / OBJECTS /PROPERTIES

//alert 
//alert('hello world)

//prompt
//const input = prompt()
//alert(input)

//confirm
/* if(confirm('Are you sure')){
    console.log('yes')  //if click ok print yes
}else {
    console.log('No')     //if cancel print  no
} */


let val;

//OUTER height and width 
//the total window height and width

val = window.outerHeight;
val = window.innerWidth;
console.log(val)



//INNER height and width 
//the total  scrolling width and height

val = window.innerWidth;
val = window.innerHeight;

console.log(val)


//scroll points
// so if you want to figure out where you are in terms of scrolling 

val = window.scrollY;
val = window.scrollX;

console.log(val)

//location objcet and history object
val = window.location
val = window.location.hostname //ypu will get adrees of you pc server
val = window.location.port //port no
val = window.location.href; // total protocol == url
val = window.location.search //search queries
console.log(val)

//redirect object
//window.location.href = 'http://google.com' // it will redirect to google .com

//reload
//window.location.reload(); //it will keep reloading page

//HISTORY object
//you can get your browsing history


window.history.go(-1); //it will go the last thing you browsed
window.history.length; //total no of websites you visit

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = Window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


