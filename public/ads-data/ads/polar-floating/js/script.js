gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .add(() => {
        document.querySelector('.ppm_video').play()
    })











setTimeout(() => {
    removedAll()
}, 12000)
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
    e.stopPropagation();
    removedAll()
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
    window.open('https://polarbd.com/en/product-category/stick/', '_blank')
    console.log('clicked');
})
function removedAll() {
    gsap.to('.ppm_container', { opacity: 0, duration: .5, ease: 'none' })
}