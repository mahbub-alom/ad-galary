let isMobile = window.innerWidth < 601;
// Create a new timeline for the repeating part
if (isMobile) {
  gsap.timeline()
    .fromTo('.ppm_container', { display: 'none' }, { display: 'flex' })
    .fromTo('.ppm_container_inner', { opacity: 0 }, { opacity: 1 })
    .set('.ppm_ball_1', { x: '20%', y: '-50%', display: 'block', scale: .2, duration: .2, ease: 'none' })
    .to('.ppm_ball_1', { x: '-10%', y: '0%', duration: .4, ease: 'none' })
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .3, scale: .7, ease: 'none' })
    .to('.ppm_brokenGlass', { opacity: 1, display: 'block', duration: .1, ease: 'none' }, '>-.05')
    .to('.ppm_brokenGlass', { opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>1')
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .5, scale: 1, ease: 'elastic.out(1.5,0.5)' }, '<')
    .to('.ppm_ball_1', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>0.5') // Reduced time to half
    .fromTo('.ppm_ball_2', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_2', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>2') // Doubled time
    .fromTo('.ppm_ball_3', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_3', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>2') // Doubled time
    .fromTo('.ppm_ball_2', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_2', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>2') // Doubled time
    .fromTo('.ppm_ball_3', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_3', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>2') // Doubled time
    .add(hideEverything);
} else {
  gsap.timeline()
    .fromTo('.ppm_container', { display: 'none' }, { display: 'flex' })
    .fromTo('.ppm_container_inner', { opacity: 0 }, { opacity: 1 })
    .set('.ppm_ball_1', { x: '100%', y: '-50%', display: 'block', scale: .5, duration: .2, ease: 'none' })
    .to('.ppm_ball_1', { x: '30%', y: '0%', duration: .4, ease: 'none' })
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .3, scale: .7, ease: 'none' })
    .to('.ppm_brokenGlass', { opacity: 1, display: 'block', duration: .1, ease: 'none' }, '>-.05')
    .to('.ppm_brokenGlass', { opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>1')
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .5, scale: 1, ease: 'elastic.out(1.5,0.5)' }, '<')
    .to('.ppm_ball_1', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>0.5') // Reduced time to half
    .fromTo('.ppm_ball_2', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_2', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>1.5') // Doubled time
    .fromTo('.ppm_ball_3', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_3', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>1.5') // Doubled time
    .fromTo('.ppm_ball_2', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_2', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>1.5') // Doubled time
    .fromTo('.ppm_ball_3', { x: '-50%', y: '-50%', display: 'none', opacity: 0, scale: .3 }, { display: 'block', opacity: 1, duration: 1, scale: 1, ease: 'elastic.out(1,0.5)' }, '<.2')
    .to('.ppm_ball_3', { opacity: 0, display: 'none', scale: .5, duration: .5, ease: 'none' }, '>1.5') // Doubled time
    .add(hideEverything);
}



document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  gsap.timeline()
    .to('.ppm_container', { display: 'none',opacity:0,duration:.3 });
})
function hideEverything(){
  gsap.timeline()
    .to('.ppm_container', { display: 'none',opacity:0,duration:.3 });
}

document.querySelector('.ppm_container').addEventListener('click', () => {
window.open('https://mybl.digital/icc25', '_blank');
})
