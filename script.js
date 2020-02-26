
///xmlhttp request

//setTimeout(function(){writeSomething("second")}, 10000)
//setTimeout(function(){writeSomething("third")}, 20000)
/*
const loader = document.querySelector(".loader")


var  request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

request.onprogress = function() {
loader.classList.add('active')
}
//document.write("ladowanie");


function writeTile(text) {
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.innerText = text;
    body.append(p);

}
request.onreadystatechange = function(aEvt) {
    if (request.readyState == 4) {
        if(request.status == 200) {

            let data = request.response;
            const dataParsed = JSON.parse(data);
           setTimeout(function(){
            loader.classList.remove('active');

               dataParsed.map((el => writeTile(el.title)))}, 9000) 
        } else {
            console.log("error");
        }
    } 
}



request.send(null)
*/


//////fetch

/* const loader = document.querySelector(".loader");



function writeTile(text) {
    const body = document.querySelector("body");
    const p = document.createElement("p");
    p.innerText = text;
    body.prepend(p);

}

function addClass() {
    loader.classList.add('active');
}
 */
/* addClass()
fetch("https://jsonplaceholder.typicode.com/users")
.then (response => response.json())
.then (response => {const data = response;
    setTimeout(function(){
         loader.classList.remove('active');
         data.map((el => writeTile(el.name)))}, 3000)
    }
)

 */
///////////
/* 
const btn = document.getElementById('btn');


addClass()
function addAll(){
fetch("https://jsonplaceholder.typicode.com/users")
.then (response => response.json())
.then (response => {
    setTimeout(function(){
         loader.classList.remove('active');
        response.map(element => writeTile(element.name))}, 2000
    )
    })
.catch((error) => {
    loader.innerHTML = 'bląd'
    console.log(error)
})
}

//addAll()
btn.addEventListener('click', addAll);

 */

let btn = document.getElementById('button');
let input = document.getElementById('input');
let scorec = document.getElementById('score');

const calc = function(value) {
    console.log(value)
    return new Promise((resolve, reject) => {
        if (value > 0) {
            resolve (value*value)}
        else {
            reject ('zla liczba')
        }
    })
}

// function showResults(value) {
//     const body = document.querySelector("body");
//     const p = document.createElement("p");
//     body.append(p);
// }



btn.addEventListener('click', () => {
    calc(Number(input.value))
    .then((score)=> {
        scorec.innerText = score;
    })
    .catch((score)=>{
        scorec.innerText = score;

    });
})