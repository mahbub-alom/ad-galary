document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
})
document.querySelector('.ppm_cta2').addEventListener('click', (e) => {
  e.stopPropagation();
  window.open(`https://squaretoiletries.com/product_info/meril-petroleum-jelly/`);
})

document.querySelector('.ppm_cta').addEventListener('click', (e) => {
  e.stopPropagation();
  spinningAnimation();
})

function beginningAnimation() {
  gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_roundBox', { display: 'none', opacity: 0, scale: 0.1 }, { display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)" })
    .fromTo('.ppm_text2', { display: 'none', opacity: 0, scale: 0.3 }, { display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)" }, '>')
    .fromTo('.ppm_text1', { display: 'none', opacity: 0, rotateY: 100 }, {
      display: 'block', opacity: 1, scale: 1, rotateY: 0, ease: "none", onComplete: () => {
        gsap.timeline()
          .to('.ppm_text1', { scale: 1.03, y: 3, repeat: -1, yoyo: true })
      }
    }, '<')
    .fromTo('.ppm_cta', { display: 'none', opacity: 0, y: 150 }, {
      display: 'block', opacity: 1, y: 0, ease: "none", onComplete: () => {
        gsap.to('.ppm_cta', { scale: 1.05, duration: .5, repeat: -1, yoyo: true })
      }
    }, '<')
    .fromTo('.ppm_logo', { display: 'none', opacity: 0, y: -150 }, { display: 'block', opacity: 1, y: 0, ease: "none" }, '<')
}


beginningAnimation()
function spinningAnimation() {
  gsap.timeline()
    .to(['.ppm_cta', '.ppm_text2'], { display: 'none', opacity: 0 })
    .to('.ppm_spinner_container', { rotate: 1440, duration: 3, transformOrigin: "center center" }, '<')
    .add(animateElementsToPosition, '>-1');
}
function animateElementsToPosition() {
  // Common starting position (center)
  const centerX = '50%';
  const centerY = '50%';

  // Create timeline for smooth animation
  gsap.timeline()
    .set(['.ppm_e', '.ppm_lemon', '.ppm_llp', '.ppm_petroleum'], {
      display: 'block',
      top: centerY,
      left: centerX,
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0.5
    })
    .to('.ppm_e', {
      top: '6%',
      right: '5%',
      left: 'auto',
      opacity: 1,
      scale: 1,
      duration: 0.8,
      xPercent: 0,
      yPercent: 0,
      ease: "back.out(1.7)"
    })
    .to('.ppm_lemon', {
      top: 'auto',
      bottom: '9%',
      right: '8%',
      left: 'auto',
      opacity: 1,
      scale: 1,
      duration: 0.8,
      xPercent: 0,
      yPercent: 0,
      ease: "back.out(1.7)"
    }, '<0.2')
    .to('.ppm_llp', {
      top: 'auto',
      bottom: '14%',
      left: '12%',
      opacity: 1,
      scale: 1,
      duration: 0.8,
      xPercent: 0,
      yPercent: 0,
      ease: "back.out(1.7)"
    }, '<0.2')
    .to('.ppm_petroleum', {
      top: '6%',
      left: '5%',
      opacity: 1,
      scale: 1,
      duration: 0.8,
      xPercent: 0,
      yPercent: 0,
      ease: "back.out(1.7)"
    }, '<0.2')
    .add(endAnimation, '>-.3');


    
}


function endAnimation(){
gsap.timeline()
    .to('.ppm_text1', { display: 'none', opacity: '0' })
    .to('.ppm_jellyText', { display: 'block', opacity: '1' }, '>')
    .fromTo('.ppm_meril', { display: 'none', opacity: 0, scale: 0.5 }, { display: 'block', opacity: 1, scale: 1, duration: 1 }, '<')
    .fromTo('.ppm_roundBox', { display: 'block', opacity: 1 }, { display: 'none', opacity: 0, duration: 1 }, '<.2')
    .fromTo('.ppm_cta2', { display: 'none', opacity: 0, y: 150 }, { display: 'block', opacity: 1, y: 0, ease: "none", duration: .5,onComplete:()=>{
      gsap.to('.ppm_cta2', { scale: 1.05, duration: .5, repeat: -1, yoyo: true })
    } }, '<')
}
