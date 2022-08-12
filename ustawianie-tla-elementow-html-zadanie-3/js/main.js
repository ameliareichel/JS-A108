let button = document.querySelector('button');
let body = document.body;
let p1 = body.firstElementChild;
let p2 = p1.nextElementSibling;

const setBackground = () => {
    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';
}

button.addEventListener('click', setBackground);