/*const post = document.querySelector('.post');
const likesEl = document.querySelector('.likes');
const heart = document.querySelector('.heart-icon');

likesEl.innerText = 'Нет ни одного лайка';

let counter = 0;

post.addEventListener('dblclick', () => {
    counter++;

    if(counter === 1) likesEl.innerText = counter + ' лайк';
    else likesEl.innerText = counter + ' лайка';

    heart.classList.add('animate-like');
    setTimeout(() => {
        heart.classList.remove('animate-like');
    }, 800)
});*/


var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
        output = entry[0] + "=" + entry[1] + "\r";
    };
    log.innerText = output;
    event.preventDefault();
    
}, false);
