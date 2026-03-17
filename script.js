const openMenuButton = document.querySelector('#menu-open-button');
const closeMenuButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

openMenuButton.addEventListener('click', () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

closeMenuButton.addEventListener('click', () => openMenuButton.click());

navLinks.forEach(link => {
    link.addEventListener('click', () => openMenuButton.click());
});                      

// Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

AOS.init();

// Menu Image Slideshow
const menuItems = [
    { images: ['assets/hot-beverages.png', 'assets/cold-beverages.png', 'assets/refreshment.png'] },
    { images: ['assets/cold-beverages.png', 'assets/hot-beverages.png', 'assets/desserts.png'] },
    { images: ['assets/refreshment.png', 'assets/special-combo.png', 'assets/burger-frenchfries.png'] },
    { images: ['assets/special-combo.png', 'assets/desserts.png', 'assets/hot-beverages.png'] },
    { images: ['assets/desserts.png', 'assets/burger-frenchfries.png', 'assets/cold-beverages.png'] },
    { images: ['assets/burger-frenchfries.png', 'assets/refreshment.png', 'assets/special-combo.png'] }
];

const menuImageElements = document.querySelectorAll('.menu-image');

menuImageElements.forEach((img, index) => {
    let currentImageIndex = 0;
    
    setInterval(() => {
        img.classList.add('fade-out');
        
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % menuItems[index].images.length;
            img.src = menuItems[index].images[currentImageIndex];
            img.classList.remove('fade-out');
        }, 500);
    }, 3000);
});