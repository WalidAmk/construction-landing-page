
// Loading...
const loadingBox = document.getElementById('loading');
window.addEventListener('load', () => {
    loadingBox.style.opacity = '0';
    loadingBox.style.visibility = 'hidden';
})


// Navbar
const menuBtn = document.querySelector('#menuBtn i');
const navList = document.getElementById('navList');
const navLinks = document.querySelectorAll('#navList ul li a');
let clickCounter = 1;

menuBtn.addEventListener('click', () => {
    if(clickCounter%2 !== 0) {
        menuBtn.className = 'fas fa-times';
        navList.style.height = '282px';
    } else {
        menuBtn.className = 'fas fa-bars';
        navList.style.height = '0';
    }
    clickCounter++;
})

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuBtn.className = 'fas fa-bars';
        navList.style.height = '0';
        clickCounter++;
    })
})

// Swipper header
const swiperHeader = new Swiper('.swiperHeader', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// swipper testimonials
if(screen.width <= 1024 && screen.width >= 600) {
    var swipertesti = new Swiper("#testimonialContainer", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: "#nextTesti",
            prevEl: "#prevTesti",
        },
    });
}
if(screen.width < 600) {
    var swipertesti = new Swiper("#testimonialContainer", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: "#nextTesti",
            prevEl: "#prevTesti",
        },
    });
}
if(screen.width > 1024) {
    var swipertesti = new Swiper("#testimonialContainer", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: "#nextTesti",
            prevEl: "#prevTesti",
        },
    });
}

// Back to home btn
const toHomeBtn = document.getElementById('backToHome');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > screen.height / 3 * 2) {
        toHomeBtn.style.display = 'block';
    } else {
        toHomeBtn.style.display = 'none';
    }
})

// Style nav bar whene scrolling 

const scrollBar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if(screen.width > 1024) {
        if(window.pageYOffset > 200) {
            scrollBar.style.position = 'fixed';
            scrollBar.style.zIndex = '11111';
            scrollBar.style.top = '0';
            scrollBar.style.left = '0';
        } else {
            scrollBar.style.position = 'absolute';
            scrollBar.style.top = '44px';
        }
    }
    
})
