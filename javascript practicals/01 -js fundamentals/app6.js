//TEMPLATE LITERALS IN JAVASCRIPT

const name = 'John';
const age = 30;
const job = 'web developer';
const city = "Miami"

let html;

function hello() {
    return 'hello';
}


//dynamically insert html data in javascript
//without templete string(es5);
html = '<ul><li>name: '+ name +'</li><li>Age:' + age +'</li></ul>'

html= '<ul>' +
'<li>Name:' + name + '</li>' +
'<li>Name:' + age + '</li>' +
'<li>Name:' + city + '</li>' + '</ul>' ;

//with template literals(es6)
html = `
<ul>
<li>name : ${name}</li>
<li>Age: ${age}</li>
<li>city : ${city}</li>
<li>job : ${job}</li>
<li> ${2 + 2}</li> 
<li>${age > 30 ? 'over 30' : 'under 30'}</li>
<li> ${hello()}</li>
</ul>
`


document.body.innerHTML = html;