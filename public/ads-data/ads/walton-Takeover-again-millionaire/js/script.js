function launchConfetti() {
  confetti({
    particleCount: 700,
    spread: 60,
    origin: { y: 0.6, x: 0.5 }, // Center of the box
    colors: [
      "#ff0000",
      "#ffa500",
      "#ffff00",
      "#008000",
      "#0000ff",
      "#4b0082",
      "#ee82ee",
    ],
  });
}



const isMobile = window.innerWidth < 600;

// launchConfetti();

if (isMobile) {
  gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_camp', { y: '-300%', opacity: 0, display: 'none' }, { y: '0%', duration: 1, opacity: 1, ease: 'power2.inOut', display: 'block' })
    .fromTo('.ppm_text', { scale: .1, display: 'none', opacity: 0 }, { scale: 1, display: 'block', opacity: 1, duration: .5, ease: 'elastic.out(1,0.8)' })
    .to(['.ppm_text', '.ppm_camp'], { opacity: 0, duration: .5, ease: 'power2.inOut' }, '>1.5')
    .fromTo('.ppm_logo', { scale: .1, display: 'none', opacity: 0 }, { scale: 1, display: 'block', opacity: 1, duration: 1, ease: 'elastic.out(1,0.8)' }, '<')
    .add(launchConfetti, '<')
    .to('.ppm_logo', { left: '55%', width: '40%', bottom: '32%', duration: 1, ease: 'power2.inOut' }, '>2')
    .fromTo('.ppm_text3', { display: 'none', opacity: 0, scale: 0 }, { display: 'block', opacity: 1, scale: 1, duration: .5, ease: 'elastic.out(1,0.8)' })
    .fromTo('.ppm_camp2', { display: 'none', opacity: 0, scale: 0 }, { display: 'block', opacity: 1, scale: 1, duration: .5, ease: 'elastic.out(1,0.8)' }, '<')
    .fromTo('.ppm_text2', { display: 'none', opacity: 0, scale: 0 }, {
      display: 'block', opacity: 1, scale: 1, duration: .5, ease: 'elastic.out(1,0.8)', onComplete: () => {
        gsap.to('.ppm_logo', { scale: 1.02, duration: .5, ease: 'none', repeat: -1, yoyo: true })
      }
    })

} else {

  gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_camp', { y: '-200%', display: 'none', opacity: 0 }, { y: '0%', duration: 1, opacity: 1, ease: 'power2.inOut', display: 'block' })
    .fromTo('.ppm_text', { scale: .1, display: 'none', opacity: 0 }, { scale: 1, display: 'block', opacity: 1, duration: .5, ease: 'elastic.out(1,0.8)' })
    .to(['.ppm_text', '.ppm_camp'], { opacity: 0, duration: .5, ease: 'power2.inOut' }, '>1.5')
    .fromTo('.ppm_logo', { scale: .1, display: 'none', opacity: 0 }, { scale: 1, display: 'block', opacity: 1, duration: 1, ease: 'elastic.out(1,0.8)' }, '<')
    .add(launchConfetti, '<')
    .to('.ppm_logo', { left: '76%', width: '20%', duration: 1, ease: 'power2.inOut' }, '>2')
    .fromTo('.ppm_text3', { display: 'none', opacity: 0, scale: 0 }, { display: 'block', opacity: 1, scale: 1, duration: .5, ease: 'elastic.out(1,0.8)' })
    .fromTo('.ppm_camp2', { display: 'none', opacity: 0, scale: 0 }, { display: 'block', opacity: 1, scale: 1, duration: .5, ease: 'elastic.out(1,0.8)' }, '<')
    .fromTo('.ppm_text2', { display: 'none', opacity: 0, scale: 0 }, {
      display: 'block', opacity: 1, scale: 1, duration: .5, ease: 'elastic.out(1,0.8)', onComplete: () => {
        gsap.to('.ppm_logo', { scale: 1.02, duration: .5, ease: 'none', repeat: -1, yoyo: true })
      }
    })
}


let isRemoved = false;
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  if(isRemoved) return;
  removeAllElms();
  isRemoved = true;

})

function removeAllElms(){
  gsap.to('.ppm_closeBtn_takeover', { display: 'none',duration:.5,opacity:0, onComplete:()=>{
    document.querySelector('.ppm_container').remove();
  } })
}

setTimeout(()=>{
if(isRemoved) return;
isRemoved = true;
removeAllElms();
},13000);