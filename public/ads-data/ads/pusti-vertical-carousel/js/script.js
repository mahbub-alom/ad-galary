// Initialize Vertical Swiper Carousel
document.addEventListener('DOMContentLoaded', function () {
    const verticalSwiper = new Swiper('.vertical-swiper', {
        // Basic settings
        direction: 'vertical',
        loop: true,
        speed: 600,

        // Autoplay
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        reverseDirection: true,
        slidesPerView: "auto",
        spaceBetween: -30,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });
});

setTimeout(() => {
gsap.to('.ppm_container', {
    opacity: 1,
    duration: .5,
    ease: 'power2.inOut',
});
}, 1000);