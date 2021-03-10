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


const cta = document.querySelectorAll('.btn');
Array.from(cta).forEach(link => {
    link.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'green';
        setTimeout(function () {
            event.target.style.color = "yellow";
        }, 5);
    });
});

const mainNav = document.querySelector('.main-navigation');
mainNav.style.borderBottom = 'solid 5px black';
mainNav.style.backgroundColor = 'gold';

const backGround = document.querySelector('.home');
backGround.style.backgroundColor = 'pink';

cta.addEventListener('dbclick', runEvent);

function runEvent(e) {
    console.log('EVENT TYPER: ' + e.type);
}