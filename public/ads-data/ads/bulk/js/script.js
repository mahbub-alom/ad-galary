gsap.timeline({ delay: 1 })
    .add(playVideo1)
    .fromTo(['.ppm_handIcon', '.ppm_handIcon2'], { opacity: 0, display: 'none', scale: 0.5 }, { opacity: 1, display: 'block', scale: 1, duration: .2, ease: 'none' }, '>1.1')
    .to('.ppm_handIcon', { scale: 1.1, duration: .5, ease: 'none', repeat: -1, yoyo: true })
    .add(addSecondVideolisteners)

function playVideo1() {
    const video = document.querySelector('.ppm_video1')
    video.play()
}
let firstClickedDone = false;
function addSecondVideolisteners() {
    document.querySelector('.ppm_container').addEventListener('click', () => {
        if (!firstClickedDone) {
            gsap.set('.ppm_video2', { display: 'block' })
            gsap.to(['.ppm_handIcon', '.ppm_handIcon2'], { opacity: 0, duration: .3, display: 'none', ease: 'none' })
            const video = document.querySelector('.ppm_video2')
            video.play()
            firstClickedDone = true;
        }
        else {
            window.open('https://www.facebook.com/aygazunited/')
        }
    })
}