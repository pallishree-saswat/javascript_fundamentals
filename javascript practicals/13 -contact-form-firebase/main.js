// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCgXmX2-bsuVjYKUJ00X5HiLgqlp1Q1VcA",
    authDomain: "contact-form-d4252.firebaseapp.com",
    databaseURL: "https://contact-form-d4252.firebaseio.com",
    projectId: "contact-form-d4252",
    storageBucket: "contact-form-d4252.appspot.com",
    messagingSenderId: "813876461003",
    appId: "1:813876461003:web:2e4f83f22cbfca1b784a4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //refference message collections
  const messageRef = firebase.database().ref('messages')


//Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()

    //get values
    const name = getInputVal('name')
    const company = getInputVal('company')
    const email = getInputVal('email')
    const phone = getInputVal('phone')
    const message = getInputVal('message')
   // console.log(name)

   //save message

   saveMessage(name,company, email, phone, message)

   // Show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
   },3000);

   //clear form
   document.getElementById('contactForm').reset();
}

//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//function message to firebase 
function saveMessage(name,company,email,phone,message){
    const newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    })
} 