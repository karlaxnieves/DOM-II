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

const backGround = document.querySelector('.home');
backGround.style.backgroundColor = 'orange';


const mainNav = document.querySelector('.main-navigation');
mainNav.style.borderBottom = 'solid 5px black';
mainNav.style.backgroundColor = 'gold';

function zoom(event) {
    event.preventDefault();

    if (event.deltaY < 0) {

        scale *= event.deltaY * -2;
    }
    else {

        scale /= event.deltaY * 2;
    }


    scale = Math.min(Math.max(.125, scale), 1);


    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
document.onwheel = zoom;