function removedAll() {
  gsap.to('.ppm_container', {
    opacity: 0, display: 'none', duration: .5, ease: 'none', onComplete: () => {
      document.querySelector('.ppm_container').remove();
    }
  })
}
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation()
  removedAll()
})
setTimeout(() => {
  removedAll()
}, 15000);

var isMobile = window.innerWidth < 600;
function beginAnimation() {
  if (isMobile) {
    gsap.timeline()
      .set('.ppm_innerContainer', { display: 'block' })
      .set('.ppm_left1', { x: '-3dvw', y: '-4dvh' })
      .set('.ppm_left2', { x: '-3dvw', y: '-2dvh' })
      .set('.ppm_left3', { x: '-3dvw', y: '0dvh' })
      .set('.ppm_left4', { x: '-3dvw', y: '2dvh' })
      .set('.ppm_left5', { x: '-3dvw', y: '4dvh' })
      .set('.ppm_right1', { x: '3dvw', y: '-4dvh' })
      .set('.ppm_right2', { x: '3dvw', y: '-2dvh' })
      .set('.ppm_right3', { x: '3dvw', y: '0dvh' })
      .set('.ppm_right4', { x: '3dvw', y: '2dvh' })
      .set('.ppm_right5', { x: '3dvw', y: '4dvh' })
      .fromTo('.ppm_miniElement', { opacity: 0, rotate: -720, display: 'none', scale: 0 }, { rotate: 0, opacity: 1, display: 'flex', scale: 1, duration: 1, ease: 'none', transformOrigin: '50% 50%' })
      .to('.ppm_miniElement', { y: '-1%', repeat: -1, yoyo: true, duration: 1, ease: 'none' },'>')
      .to('.ppm_left1', { x: '-22dvw', y: '-38dvh' },'<')
      .to('.ppm_left2', { x: '-24dvw', y: '-13dvh' }, '<')
      .to('.ppm_left3', { x: '-35dvw', y: '0dvh' }, '<')
      .to('.ppm_left4', { x: '-22dvw', y: '20dvh' }, '<')
      .to('.ppm_left5', { x: '-24dvw', y: '38dvh' }, '<')
      .to('.ppm_right1', { x: '33dvw', y: '-38dvh' }, '<')
      .to('.ppm_right2', { x: '35dvw', y: '-13dvh' }, '<')
      .to('.ppm_right3', { x: '40dvw', y: '0dvh' }, '<')
      .to('.ppm_right4', { x: '33dvw', y: '20dvh' }, '<')
      .to('.ppm_right5', { x: '35dvw', y: '38dvh' }, '<')
      .fromTo('.ppm_apple', { display: 'none', y: '100%' }, { y: '0%', opacity: 1, display: 'block', duration: .5, ease: 'none' }, '<')
      .fromTo('.ppm_strobery', { display: 'none', y: '100%' }, { y: '0%', opacity: 1, display: 'block', duration: .5, ease: 'none' }, '<')
      .to(['.ppm_left1', '.ppm_left2', '.ppm_left3', '.ppm_left4', '.ppm_left5', '.ppm_right1', '.ppm_right2', '.ppm_right3', '.ppm_right4', '.ppm_right5'], { x: '0', y: '0', opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>1.5')
      .to(['.ppm_apple', '.ppm_strobery'], { y: '100%', opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>')
      .fromTo('.ppm_bottom_part', { display: 'none', y: '100%' }, { display: 'block', y: '0%', duration: .5, ease: 'none' }, '>')

   } else {
    gsap.timeline()
      .set('.ppm_innerContainer', { display: 'block' })
      .set('.ppm_left1', { x: '-3dvw', y: '-10dvh' })
      .set('.ppm_left2', { x: '-3dvw', y: '-5dvh' })
      .set('.ppm_left3', { x: '-3dvw', y: '0dvh' })
      .set('.ppm_left4', { x: '-3dvw', y: '5dvh' })
      .set('.ppm_left5', { x: '-3dvw', y: '10dvh' })
      .set('.ppm_right1', { x: '3dvw', y: '-10dvh' })
      .set('.ppm_right2', { x: '3dvw', y: '-5dvh' })
      .set('.ppm_right3', { x: '3dvw', y: '0dvh' })
      .set('.ppm_right4', { x: '3dvw', y: '5dvh' })
      .set('.ppm_right5', { x: '3dvw', y: '10dvh' })
      .fromTo('.ppm_miniElement', { opacity: 0, rotate: -720, display: 'none', scale: 0 }, { rotate: 0, opacity: 1, display: 'flex', scale: 1, duration: 1, ease: 'none', transformOrigin: '50% 50%' })
      .to('.ppm_miniElement', { y: '-5px', repeat: -1, yoyo: true, duration: 1, ease: 'none' })
      .to('.ppm_left1', { x: '-22dvw', y: '-38dvh' })
      .to('.ppm_left2', { x: '-24dvw', y: '-13dvh' }, '<')
      .to('.ppm_left3', { x: '-35dvw', y: '0dvh' }, '<')
      .to('.ppm_left4', { x: '-22dvw', y: '20dvh' }, '<')
      .to('.ppm_left5', { x: '-24dvw', y: '38dvh' }, '<')
      .to('.ppm_right1', { x: '33dvw', y: '-38dvh' }, '<')
      .to('.ppm_right2', { x: '35dvw', y: '-13dvh' }, '<')
      .to('.ppm_right3', { x: '40dvw', y: '0dvh' }, '<')
      .to('.ppm_right4', { x: '33dvw', y: '20dvh' }, '<')
      .to('.ppm_right5', { x: '35dvw', y: '38dvh' }, '<')
      .fromTo('.ppm_apple', { display: 'none', y: '100%' }, { y: '0%', opacity: 1, display: 'block', duration: .5, ease: 'none' }, '<')
      .fromTo('.ppm_strobery', { display: 'none', y: '100%' }, { y: '0%', opacity: 1, display: 'block', duration: .5, ease: 'none' }, '<')
      .to(['.ppm_left1', '.ppm_left2', '.ppm_left3', '.ppm_left4', '.ppm_left5', '.ppm_right1', '.ppm_right2', '.ppm_right3', '.ppm_right4', '.ppm_right5'], { x: '0', y: '0', opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>1.5')
      .to(['.ppm_apple', '.ppm_strobery'], { y: '100%', opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>')
      .fromTo('.ppm_bottom_part', { display: 'none', y: '100%' }, { display: 'block', y: '0%', duration: .5, ease: 'none' }, '>')
  }
}

document.querySelector('.ppm_container').addEventListener('click', (e) => {
  e.stopPropagation()
  window.open('https://polarbd.com/en/product-category/stick/', '_blank')
})

beginAnimation();
