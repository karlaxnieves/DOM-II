// Your code goes here
const nav = document.querySelectorAll('.nav-link');
Array.from(nav).forEach(link => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = 'orange';
        setTimeout(function () {
            event.target.style.color = "black";
        }, 200);
    });
});

document.addEventListener('click', (event) => { event.target.style.backgroundColor = 'pink'; });


const scroll = document.querySelectorAll('desination');

