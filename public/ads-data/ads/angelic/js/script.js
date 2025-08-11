let isBottleClicked = false;

gsap.timeline()
  .set('.ppm_container', { display: 'block' })
  .fromTo('.ppm_text1', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block', duration: .5, ease: 'none' })
  .to('.ppm_text1', { opacity: 0, display: 'none', duration: .2, ease: 'none' }, '>1.3')
  .fromTo('.ppm_text2', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block', duration: .5, ease: 'none' })
  .fromTo('.ppm_bottle',
    { opacity: 0, display: 'none', scale: 0.9 },
    { opacity: 1, display: 'block', scale: 1, duration: 0.5, ease: 'none', stagger: 0.2,onComplete:()=>{
      gsap.timeline()
      .fromTo('.ppm_tapIcon', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block', duration: .5, ease: 'none' })
      .to('.ppm_tapIcon', { scale: 1.1, duration: .5, ease: 'none',repeat: -1, yoyo: true },'>')
    } }
  )
  .to('.ppm_bottle', { scale: 0.9, duration: 0.8, ease: 'none', yoyo: true, repeat: -1 })

document.querySelectorAll('.ppm_bottle').forEach(bottle => {
  bottle.addEventListener('click', () => {
    if (isBottleClicked) return;
    gsap.killTweensOf('.ppm_bottle');
    const handleBottleClick = (bottleNum) => {
      animateFloatingElements(bottleNum);
      gsap.timeline()
        .to(`.ppm_bottle:not(.ppm_bottle${bottleNum})`, { opacity: 0, display: 'none', duration: 0.3 })
        .to(`.ppm_tapIcon`, { opacity: 0, display: 'none', duration: 0.3 },'<')
        .to(`.ppm_bottle${bottleNum}`, { left: '22.5%',width:'55%',bottom:'0%', ease: 'none',onComplete:()=>{
          isBottleClicked = true;
        } },'<')
        .to('.ppm_text2', { opacity: 0, display: 'none', duration: 0.3 },'<')
        .fromTo('.ppm_bg_cool',
          { opacity: 0, display: 'none' },
          { opacity: 1, display: 'block', duration: .5, ease: 'none' }
        ,'<')
        .fromTo('.ppm_text3',
          { opacity: 0, display: 'none' },
          { opacity: 1, display: 'block', duration: .5, ease: 'none' }
        ,'<')
        .fromTo('.ppm_logo',
          { opacity: 0, display: 'none' },
          { opacity: 1, display: 'block', duration: .5, ease: 'none' }
        ,'<')
    }

    const bottleNum = bottle.classList.contains('ppm_bottle1') ? 1
      : bottle.classList.contains('ppm_bottle2') ? 2
        : bottle.classList.contains('ppm_bottle3') ? 3
          : null;

    if (bottleNum) handleBottleClick(bottleNum);
  });
});

setTimeout(() => {
  removedAll()
}, 20000)
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  removedAll()
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
  if(isBottleClicked){
    window.open('https://www.aci-bd.com/our-businesses/air-care.html')
  }
})
function removedAll() {
  gsap.to('.ppm_container', { opacity: 0, duration: .5, ease: 'none' })
}


function animateFloatingElements(groupNumber) {
  gsap.to(`.ppm_flying${groupNumber}_elms`, { display: 'block' })
  const elements = document.querySelectorAll(`.singleElm${groupNumber}`);


  elements.forEach((elm, i) => {
    // Set initial position at bottom with narrow spread
    gsap.set(elm, {
      x: gsap.utils.random(-10, 10),
      y: 0,
      rotation: gsap.utils.random(-10, 10),
      scale: gsap.utils.random(0.6, 0.8),
      opacity: 0
    });

    // Spray upward animation with wider spread at top
    gsap.to(elm, {
      duration: gsap.utils.random(1.2, 2.5),
      x: `+=${gsap.utils.random(-150, 150)}`,
      y: gsap.utils.random(-200, -250),
      rotation: gsap.utils.random(-60, 60),
      scale: gsap.utils.random(.8, 1),
      opacity: 1,
      ease: "none",
      delay: i * 0.1,
      repeat: -1,
      onComplete: () => {
        
        // Reset to bottom position with narrow spread
        gsap.set(elm, {
          x: gsap.utils.random(-20, 20),
          y: 0,
          rotation: gsap.utils.random(-20, 20),
          scale: gsap.utils.random(0.6, 0.8),
          opacity: 0
        });
      }
    });
  });
}
