const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});


const carousel = document.querySelector('.trusted-items');
const leftBtn = document.querySelector('.carousel-arrow.left');
const rightBtn = document.querySelector('.carousel-arrow.right');

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.offsetWidth / 2, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.offsetWidth / 2, behavior: 'smooth' });
});