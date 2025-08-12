var ppm_initialClick = false;
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
  if (ppm_initialClick) {
    window.open(`https://www.daraz.com.bd/shop-condoms/kamasutra/`);
  }
})




function beginningAnimation() {

  gsap.timeline()
    .set('.ppm_bike', { x: '-100%' })
    .fromTo('.ppm_running', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block' })
    .to('.ppm_bike', { x: 0 }, '<.3')
    // .to('.ppm_cta', { opacity: 1, display: 'block' }, '<.3')
    .fromTo('.ppm_copy', { display: 'none', opacity: 0, rotateY: 100 }, {
      display: 'block', opacity: 1, scale: 1, rotateY: 0, ease: "none"
    }, '>')
    .fromTo('.ppm_cta', { display: 'none', opacity: 0, scale: 0.3 }, {
      display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)", onComplete: () => {
        gsap.to('.ppm_cta', { scale: 1.04, repeat: -1, yoyo: true })
      }
    }, '>')
}

document.querySelector('.ppm_container').addEventListener('click', (e) => {
  ppm_initialClick = true;
animateFloatingElements()
  gsap.timeline()
    .to(['.ppm_cta', '.ppm_copy'], { opacity: 0, display: 'none' })
    .to('.ppm_bike', { x: '100%' },'<')
    .fromTo('.ppm_logo', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block' }, '<.3')
    .fromTo('.ppm_pack', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block' }, '<.3')
    .fromTo('.ppm_miniBike', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block' }, '<.3')
})


function animateFloatingElements() {
  gsap.set('.ppm_flying_elms', { display: 'block' })
  gsap.to(['.ppm_text_1', '.ppm_text_2', '.ppm_container2', '.ppm_text_3', '.ppm_product'], { duration: .5, opacity: 0, scale: 0, display: 'none' })
  gsap.to('.ppm_flying_elms', { delay: 2.5, opacity: 0, display: 'none',onComplete:()=>{
    gsap.timeline()
    .fromTo('.ppm_cta2', { opacity: 0, display: 'none' }, { opacity: 1, display: 'block' })
    .to('.ppm_cta2', { scale: 1.04, repeat: -1, yoyo: true })
  } })

  const elements = [
    '.ppm_flying_elm1',
    '.ppm_flying_elm2',
    '.ppm_flying_elm3',
    '.ppm_flying_elm4',
    '.ppm_flying_elm5',
    '.ppm_flying_elm6',
    '.ppm_flying_elm7',
    '.ppm_flying_elm8',
    '.ppm_flying_elm9',
    '.ppm_flying_elm10',
    '.ppm_flying_elm11',
    '.ppm_flying_elm12',
    '.ppm_flying_elm13',
    '.ppm_flying_elm14',
    '.ppm_flying_elm15',
    '.ppm_flying_elm16',
    '.ppm_flying_elm17',
  ];

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
      duration: gsap.utils.random(1, 2),
      x: `+=${gsap.utils.random(-300, 300)}`,
      y: gsap.utils.random(-400, -700),
      rotation: gsap.utils.random(-60, 60),
      scale: gsap.utils.random(1, 1.3),
      opacity: 1,
      ease: "power1.out",
      delay: i * 0.1,
      repeat: 5,
      onRepeat: () => {
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





beginningAnimation()
// animateFloatingElements()