let isMobile = window.innerWidth < 601;
// Create a new timeline for the repeating part

if (isMobile) {
  gsap.timeline()
    .fromTo('.ppm_container', { display: 'none' }, { display: 'flex' })
    .fromTo('.ppm_container_inner', { opacity: 0 }, { opacity: 1 })
    .set('.ppm_ball_1', { x: '20%', y: '-50%', display: 'block', scale: .2, duration: .2, ease: 'none' })
    .to('.ppm_ball_1', { x: '-10%', y: '0%', duration: .4, ease: 'none' })
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .3, scale: 1, ease: 'none' })
    .to('.ppm_brokenGlass', { opacity: 1, display: 'block', duration: .1, ease: 'none' }, '>-.05')
    .to('.ppm_brokenGlass', { opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>.5')
    .set('.ppm_ball_2', { display: 'none', opacity: 0, x: '-50%',rotateY:'180deg', y: '-50%', scale: 1 })
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .5, scale: 1, ease: 'none',rotateY:'180deg',opacity:0 },'>1')
    .fromTo('.ppm_ball_2',{display:'none',opacity:0,rotateY:'-180deg'} ,{ opacity: 1, display: 'block', scale: 1, x: '-50%', y: '-50%',rotateY:'0deg', duration: .5, ease: 'none' }, '<')
    .to('.ppm_ball_2', { x: '-50%', y: '-50%', duration: 1, scale: 10, ease: 'none',opacity:0,display:'none' }, '>1')
    .fromTo('.ppm_lowerBottom',{display:'none',y:'100%',opacity:0},{display:'block',y:'0%',opacity:1,duration:.5,ease:'none'})
    .fromTo('.ppm_fridge',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'},'<')
    .fromTo('.ppm_text3',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'},'<')
    .add(()=>{
      gsap.timeline({repeat:2,onComplete:()=>{
        hideEverything()
      }})
      .fromTo('.ppm_text',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'})
      .to('.ppm_text',{display:'none',opacity:0,y:'100%'},">1")
      .fromTo('.ppm_text2',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'},'<.2')
      .to('.ppm_text2',{display:'none',opacity:0,y:'100%'},">1")
    })

} else {
  // Add the repeating timeline to the main timeline
  gsap.timeline()
    .fromTo('.ppm_container', { display: 'none' }, { display: 'flex' })
    .fromTo('.ppm_container_inner', { opacity: 0 }, { opacity: 1 })
    .set('.ppm_ball_1', { x: '100%', y: '-50%', display: 'block', scale: .5, duration: .2, ease: 'none' })
    .to('.ppm_ball_1', { x: '30%', y: '0%', duration: .4, ease: 'none' })
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .3, scale: 1, ease: 'none' })
    .to('.ppm_brokenGlass', { opacity: 1, display: 'block', duration: .1, ease: 'none' }, '>-.05')
    .to('.ppm_brokenGlass', { opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>.5')
    .set('.ppm_ball_2', { display: 'none', opacity: 0, x: '-50%',rotateY:'180deg', y: '-50%', scale: 1 })
    .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .5, scale: 1, ease: 'none',rotateY:'180deg',opacity:0 },'>1')
    .fromTo('.ppm_ball_2',{display:'none',opacity:0,rotateY:'-180deg'} ,{ opacity: 1, display: 'block', scale: 1, x: '-50%', y: '-50%',rotateY:'0deg', duration: .5, ease: 'none' }, '<')
    .to('.ppm_ball_2', { x: '-50%', y: '-50%', duration: 1, scale: 10, ease: 'none',opacity:0,display:'none' }, '>1')
    .fromTo('.ppm_lowerBottom',{display:'none',y:'100%',opacity:0},{display:'block',y:'0%',opacity:1,duration:.5,ease:'none'})
    .fromTo('.ppm_fridge',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'},'<')
    .fromTo('.ppm_text3',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'},'<')
    .add(()=>{
      gsap.timeline({repeat:2,onComplete:()=>{
        hideEverything()
      }})
      .fromTo('.ppm_text',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'})
      .to('.ppm_text',{display:'none',opacity:0,y:'100%'},">1")
      .fromTo('.ppm_text2',{display:'none',opacity:0,y:'100%'},{display:'block',opacity:1,y:'0%',duration:.5,ease:'none'},'<.2')
      .to('.ppm_text2',{display:'none',opacity:0,y:'100%'},">1")
    })
    
    // .to('.ppm_brokenGlass', { opacity: 0, display: 'none', duration: .5, ease: 'none' }, '>1')
    // .to('.ppm_ball_1', { x: '-50%', y: '-50%', duration: .5, scale: 1, ease: 'elastic.out(1.5,0.5)' }, '<')
    // .set('.ppm_ball_3', { display: 'block', opacity: 1, x: '200%',rotate:'360deg', y: '-50%', scale: 1 })
    // .to('.ppm_ball_3', { opacity: 1, display: 'block', scale: 1, x: '-50%', y: '-50%',rotate:'0deg', duration: 1, ease: 'none' }, '>1.5')
    // .add(hideEverything)
}



document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation()
  gsap.timeline()
    .to('.ppm_container', { display: 'none', opacity: 0, duration: .3 });
})
function hideEverything() {
  gsap.timeline()
    .to('.ppm_container', { display: 'none', opacity: 0, duration: .3 });
}

document.querySelector('.ppm_container').addEventListener('click', () => {
  window.open('https://waltonbd.com/digital-campaign-season-22', '_blank');
})
