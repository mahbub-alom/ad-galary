gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_cng', { x: '100%', display: 'none' }, { x: '0%', display: 'block', duration: .7, ease: 'power2.out', onComplete: cngAnimation })
    .fromTo('.ppm_shape', { scale: 0, display: 'none', opacity: 0 }, { scale: 1, display: 'block', opacity: 1, duration: .4, ease: 'none' }, '>-.3')
    .fromTo('.ppm_element', { scale: 0, display: 'none', opacity: 0 }, { scale: 1, display: 'block', opacity: 1, duration: .4, ease: 'none',onComplete:mikeAnimation }, '<')
    .add(elementsAnimation, '<.3');

function elementsAnimation() {
    gsap.timeline({ repeat: -1 })
        .fromTo('.ppm_1pack', { scale: 0.5, x: '100%', y: '115%', display: 'none', opacity: 0 }, { scale: 1, x: '0%', y: '0%', display: 'block', opacity: 1, duration: .5, ease: 'elastic.out(1,0.5)' }, '<')
        .fromTo('.ppm_30din', { scale: 0.5, x: '100%', y: '50%', display: 'none', opacity: 0 }, { scale: 1, x: '0%', y: '0%', display: 'block', opacity: 1, duration: .5, ease: 'elastic.out(1,0.5)' }, '<.3')
        .fromTo('.ppm_90gb', { scale: 0.5, x: '70%', y: '10%', display: 'none', opacity: 0 }, { scale: 1, x: '0%', y: '0%', display: 'block', opacity: 1, duration: .5, ease: 'elastic.out(1,0.5)' }, '<.3')
        .fromTo('.ppm_offer', { scale: 0.5, x: '100%', y: '-50%', display: 'none', opacity: 0 }, { scale: 1, x: '0%', y: '0%', display: 'block', opacity: 1, duration: .5, ease: 'elastic.out(1,0.5)' }, '<.3')
        .fromTo('.ppm_798', { scale: 0.5, x: '200%', y: '-205%', display: 'none', opacity: 0 }, { scale: 1, x: '0%', y: '0%', display: 'block', opacity: 1, duration: .5, ease: 'elastic.out(1,0.5)' }, '<.3')
        .to('.ppm_1pack', { scale: 0.5, x: '100%', y: '115%', display: 'none', opacity: 0, duration: .5, ease: 'none' }, '>.5')
        .to('.ppm_30din', { scale: 0.5, x: '100%', y: '50%', display: 'none', opacity: 0, duration: .5, ease: 'none' }, '<')
        .to('.ppm_90gb', { scale: 0.5, x: '70%', y: '10%', display: 'none', opacity: 0, duration: .5, ease: 'none' }, '<')
        .to('.ppm_offer', { scale: 0.5, x: '100%', y: '-50%', display: 'none', opacity: 0, duration: .5, ease: 'none' }, '<')
        .to('.ppm_798', { scale: 0.5, x: '200%', y: '-205%', display: 'none', opacity: 0, duration: .5, ease: 'none' }, '<')
}

function cngAnimation() { gsap.to('.ppm_cng', { y: '-2%', repeat: -1, yoyo: true, duration: .7, ease: 'none' }) }
function mikeAnimation() { gsap.to('.ppm_element', { scale: 1.1, repeat: -1, yoyo: true, duration: 1.5, ease: 'none' }) }











setTimeout(() => {
    // removedAll()
}, 15000)
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
    e.stopPropagation();
    removedAll()
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
    window.open('https://www.grameenphone.com/personal/plans-offers/internet-packages')
    console.log('clicked');
})
function removedAll() {
    gsap.to('.ppm_container', { opacity: 0, duration: .5, ease: 'none' })
}