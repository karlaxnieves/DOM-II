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


function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('div')
el.onwheel = zoom;



