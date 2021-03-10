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


const cta = document.querySelectorAll('.btn');
Array.from(cta).forEach(link => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'green';
        setTimeout(function () {
            event.target.style.color = "yellow";
        }, 5);
    });
});

