
let firstContainerClicked = false;
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
  if (!firstContainerClicked) {
    firstContainerClicked = true;
    secondStepAnimation();
    return;
  }
  console.log('clicked landing')
  window.open('https://purplepatch.online/')
})

function beginningAnimation() {
  gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_firni', { display: 'none', opacity: 0, y: '-200%' }, { display: 'block', opacity: 1, y: "0%", duration: .6, onComplete: ppm_firni_animation })
    .fromTo('.ppm_copy', { display: 'none', opacity: 0, rotateY: '180' }, { display: 'block', opacity: 1, rotateY: "0", duration: .6 },'<.2')
    .fromTo('.ppm_cta1', { display: 'none', opacity: 0, y: '200%' }, { display: 'block', opacity: 1, y: "0%", duration: .6, onComplete: ppm_cta1_animation },'<.2')
}


function secondStepAnimation() {
  gsap.timeline()
    .to(['.ppm_firni', '.ppm_copy', '.ppm_cta1'], { opacity: 0, duration: .6 })
    .fromTo('.ppm_pack', { display: 'none', opacity: 0, x: '-200%' }, { display: 'block', opacity: 1, x: "0%", duration: .6 },'<')
    .fromTo('.ppm_glass', { display: 'none', opacity: 0, x: '200%' }, { display: 'block', opacity: 1, x: "0%", duration: .6 },'<')
    .fromTo('.ppm_splash', { display: 'none', opacity: 0, scale:.2 }, { display: 'block', opacity: 1, scale:1, duration: .2 },'<.5')
    .fromTo('.ppm_logo', { display: 'none', opacity: 0, y: '-200%' }, { display: 'block', opacity: 1, y: "0%", duration: .6 },'<')
    .fromTo('.ppm_cta2', { display: 'none', opacity: 0, y: '200%' }, { display: 'block', opacity: 1, y: "0%", duration: .6, onComplete: ppm_cta2_animation },'<')
}




// start animation
function ppm_cta1_animation() { gsap.to('.ppm_cta1', { scale: 1.1, duration: 1, ease: 'elastic.out(1,0.3)', repeat: -1, yoyo: true }) }
function ppm_cta2_animation() { gsap.to('.ppm_cta2', { scale: 1.1, duration: 1, ease: 'elastic.out(1,0.3)', repeat: -1, yoyo: true }) }
function ppm_firni_animation() { gsap.to('.ppm_firni', { y:'-5px', duration: 1, ease: 'none', repeat: -1, yoyo: true }) }

function bgAnimation() { gsap.to('.ppm_bg', { scale: 1.3, duration: 10, ease: 'none', x: '-20%', y: '-5%', repeat: -1, yoyo: true }) }

beginningAnimation()