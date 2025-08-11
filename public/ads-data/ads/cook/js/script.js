let firstTimeClickedDone = false;
gsap.timeline({ delay: .5 })
    .fromTo('.ppm_copy1', { y: '-200px', opacity: 0, display: 'none' }, { y: '0px', opacity: 1, display: 'block', duration: .8, ease: 'none' })
    .fromTo('.ppm_click', { opacity: 0, scale: .5, display: 'none' }, {
        opacity: 1, scale: 1, display: 'block', duration: .5, ease: 'none', onComplete: () => {
            secondPart()
            gsap.to('.ppm_click', { scale: 1.1, repeat: -1, yoyo: true, duration: .8, ease: 'none' })
        }
    })

function secondPart() {
    document.querySelector('.ppm_container').addEventListener('click', () => {
        if (!firstTimeClickedDone) {
            firstTimeClickedDone = true;
            gsap.timeline()
                .to(['.ppm_copy1', '.ppm_click'], { opacity: 0, display: 'none', duration: .3, ease: 'none' })
                .fromTo('.ppm_copy2', { opacity: 0, display: 'none', x: '-200px' }, { opacity: 1, display: 'block', x: '0px', duration: .8, ease: 'none' })
                .fromTo('.ppm_model', { opacity: 0, display: 'none', x: '200px' }, { opacity: 1, display: 'block', x: '0px', duration: .8, ease: 'none' }, '<')
                .fromTo('.ppm_high', { opacity: 0, display: 'none' }, { opacity: .6, display: 'block', duration: .8, ease: 'none' }, '<')
                .fromTo('.ppm_shape', { opacity: 0, display: 'none', x: '200px' }, { opacity: 1, display: 'block', x: '0px', duration: .8, ease: 'none' }, '<')
                .fromTo('.ppm_gas', { opacity: 0, display: 'none', y: '200px' }, { opacity: 1, display: 'block', y: '0px', duration: .8, ease: 'none', onComplete: () => {
                    gsap.to('.ppm_gas', { scale: 1.06,y:'-5px', repeat: -1, yoyo: true, duration: 1, ease: 'none' })
                } }, '<.5')
                .fromTo('.ppm_steam_container', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block', duration: .8, ease: 'none' }, '<')
        } else {
            window.open('https://www.facebook.com/aygazunited/')
        }
    })
}

