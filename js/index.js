// Your code goes here
const nav = document.querySelectorAll('nav a');
Array.from(nav).forEach(link => {
    link.addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
        setTimeout(function () {
            event.target.style.color = "black";
        }, 200);
    });
});


const cta = document.querySelectorAll('.btn');
Array.from(cta).forEach(link => {
    link.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'pink';
        setTimeout(function () {
            event.target.style.color = "aqua";
        });
    });
});

