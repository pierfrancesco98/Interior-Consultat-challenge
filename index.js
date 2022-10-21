const hamburger = document.querySelector('.fa-align-justify');
const clos = document.querySelector('.fa-times');
const navbar = document.querySelector('.navbar');
const item = document.querySelectorAll('.item');

hamburger.addEventListener('click', () => {
 navbar.classList.add('activate');
 clos.classList.add('activate');
 hamburger.classList.add('activate');
 item.forEach((items) => {
    items.classList.add('activate');
 });
});

clos.addEventListener('click', () => {
    navbar.classList.remove('activate');
    clos.classList.remove('activate');
    hamburger.classList.remove('activate');
    item.forEach((items) => {
       items.classList.remove('activate');
    });
});
