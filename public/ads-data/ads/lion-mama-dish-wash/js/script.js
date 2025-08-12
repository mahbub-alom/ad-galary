const glow = document.querySelector('.glow');
const product = document.querySelector('.product');
const product_on = document.querySelector('.product_on');
const tap = document.querySelector('.tap');
const drop = document.querySelector('.drop');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg4 = document.querySelector('.bg4');
const foam = document.querySelector('.foam');

function pulsate() {
    gsap.to(glow, {scale: 1.2, duration: 1, ease: "power1.inOut", repeat: -1, yoyo: true });
}

pulsate();

tap.addEventListener('click', function() {
    gsap.to([product, glow], { y: -50, duration: 0.5, onComplete: showProductOn });
   
});

function showProductOn() {
    product.style.display = 'none';
    glow.style.display = 'none';
    tap.style.display = 'none';
    product_on.style.display = 'block';
    drop.style.display = 'block';
    
    gsap.to(drop, {
        top: 'calc(100% - 50px)',
        duration: 2,
        ease: 'power2.in',
    });
    
    gsap.to(bg1, { delay: 2.2, duration: .5, opacity: 0, display: 'none' });
    gsap.to(bg2, { delay: 2.2, duration: .5, opacity: 1, display: 'block' });
    
    gsap.to(foam, {
        delay: 2.3,
        opacity: 1,
        display: 'block',
        scale: 1.1,
        duration: .7,
        z: -20,
        ease: 'power1.inOut',
        
    });
    
    gsap.to(bg2, { delay: 3, duration: .5, opacity: 0, display: 'none' });
    gsap.to(foam, { delay: 3, duration: .5, opacity: 0, display: 'none' });
    gsap.to(bg4, { delay: 3.1, duration: .5, opacity: 1, display: 'block' });
}




