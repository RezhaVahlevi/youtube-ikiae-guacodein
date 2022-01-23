// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        mobileToggle = document.getElementById('mobileNav'),
        navClose = document.getElementById('nav-close'),
        mainContent = document.getElementById('main-content');

navToggle.addEventListener('click', function(){
    navMenu.classList.add('show-menu');
})

mobileToggle.addEventListener('click', function(){
    navMenu.classList.add('show-menu');
})

//HIDDEN MENU
mainContent.addEventListener('click', function(){
    navMenu.classList.remove('show-menu');
})

navClose.addEventListener('click', function(){
    navMenu.classList.remove('show-menu');
})

// SWIPER
var swiper = new Swiper(".mySwiper", {
    slidePerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})