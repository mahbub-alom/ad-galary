var ppm_initialClick = false;
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
    window.open(`https://www.daraz.com.bd/shop/s-c-johnson/?path=index.htm`);
})




function beginningAnimation() {
  animateSprayElements()
  gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_bg_1', { display: 'none', x: '100%' }, { display: 'block', x: '0%', duration: .8 })
    .fromTo('.ppm_bg_2', { display: 'none', x: '-100%' }, { display: 'block', x: '0%', duration: .8 }, '>-.2')
    .fromTo('.ppm_modelBox', { display: 'none', x: '-100%' }, { display: 'block', x: '0%', duration: .8}, '>-.5')
    .fromTo('.ppm_copy', { display: 'none', x: '-100%' }, { display: 'block', x: '0%', duration: .5,onComplete:()=>{
      gsap.timeline({onComplete:hidingAnimation})
      .to('.ppm_copy', {x: '+=8', duration: 0.3})
      .to('.ppm_copy', {x: '-=8', duration: 0.3})
      .to('.ppm_copy', {x: '+=8', duration: 0.3})
      .to('.ppm_copy', {x: '-=8', duration: 0.3})
      .to('.ppm_copy', {y: '-=8', duration: 0.3})
      .to('.ppm_copy', {y: '+=8', duration: 0.3})
      .to('.ppm_copy', {y: '-=8', duration: 0.3})
      .to('.ppm_copy', {y: '+=8', duration: 0.3});
    } }, '>-.2')
    .fromTo('.ppm_logo', { display: 'none', y: '-100%' }, { display: 'block', y: '0%', duration: .7 }, '>-.2')
}


function hidingAnimation(){
  gsap.timeline()
    .to('.ppm_bg_1', { display: 'none', x: '100%', duration: .5 })
    .to('.ppm_bg_2', { display: 'none', x: '-100%', duration: .5 }, '<.2')
    .to('.ppm_modelBox', { display: 'none', x: '100%', duration: .8 }, '<')
    .to('.ppm_copy', { display: 'none', opacity: 0, duration: .5 }, '<')
    .to('.ppm_logo', { display: 'none', opacity: 0, duration: .5 }, '<')
    .fromTo('.ppm_bottle',{display:'none',y:'100%'},{display:'block',y:'0%',duration:.5},'>-.2')
    .fromTo('.ppm_text',{display:'none'},{display:'block',duration:.5},'>-.2')
    .fromTo('.ppm_cta',{display:'none',y:'100%'},{display:'block',y:'0%',duration:.5,onComplete:()=>{
      gsap.to('.ppm_cta',{scale:1.05,duration:.5,repeat:-1,yoyo:true})
    }},'>-.2')
    .fromTo('.ppm_logo', { display: 'none', y: '-100%',opacity:0 }, { display: 'block', y: '0%', opacity:1, duration: .7 }, '<')

}

beginningAnimation()
// animateFloatingElements()


function animateSprayElements() {
  const elements = gsap.utils.toArray([
    '.ppm_moving_elms_1',
    '.ppm_moving_elms_2',
    '.ppm_moving_elms_3',
    '.ppm_moving_elms_4',
    '.ppm_moving_elms_5',
    '.ppm_moving_elms_6',
    '.ppm_moving_elms_7',
    '.ppm_moving_elms_8',
    '.ppm_moving_elms_9',
    '.ppm_moving_elms_10',
    '.ppm_moving_elms_11',
    '.ppm_moving_elms_12',
  ]);

  elements.forEach((element, index) => {
    // Create repeating animation
    gsap.to(element, {
      keyframes: [
        { // Starting position
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.5,
          rotation: 0
        },
        { // Mid position
          x: 75,
          y: () => Math.sin(Math.random() * 60 - 30) * 25,
          opacity: 1,
          scale: 1.5,
          rotation: 180
        },
        { // End position
          x: 150,
          y: () => Math.sin(Math.random() * 60 - 30) * 50,
          opacity: 0,
          scale: 2,
          rotation: 360
        }
      ],
      duration: 2,
      ease: "none",
      repeat: -1,
      repeatRefresh: true,
      delay: index * 0.1
    });
  });
}