//get data from external apis
document.querySelector('.get-jokes').addEventListener
('click',gteJokes)

function gteJokes(e) {
    //console.log('get jokes')
    e.preventDefault()

const number = document.querySelector('input[type="number"]').value;

const xhr = new XMLHttpRequest();

xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

xhr.onload = function(){
    if(this.status === 200){
        //const responses = this.responseText;
      // console.log(this.responseText)
        const responses = JSON.parse(this.responseText);
      console.log(responses)
        let output = '';

/* 
        responses.value.forEach(function(joke){
        output += `<li> ${joke.joke} </li>`

        }) */
     
        if(responses.type === 'success'){
            responses.value.forEach(function(joke){
                output += `<li> ${joke.joke} </li>`
            })
        } else {
            output += '<li>Something went wront </li>'
        }



        document.querySelector('.jokes').innerHTML = output;
    }
}
xhr.send()

}