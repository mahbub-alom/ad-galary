var allGift = [
  '.ppm_gift1',
  '.ppm_gift2',
  '.ppm_gift3',
  '.ppm_gift4',
  '.ppm_gift5',
  '.ppm_gift6',
  '.ppm_gift7',
  '.ppm_gift8',
  '.ppm_gift9',
  '.ppm_gift10',
  '.ppm_gift11',
  '.ppm_gift12',
  '.ppm_gift13',
  '.ppm_gift14',
  '.ppm_gift15',
  '.ppm_gift16',
  '.ppm_gift17',
  '.ppm_gift18',
  '.ppm_gift19',
  '.ppm_gift20',
]
gsap.set(allGift, { y: '-100vh', display: 'block' })
gsap.set('.ppm_last_slide', { scale:.6 })


gsap.timeline({onComplete:lastSlide,ease: "elastic.out(1,0.3)"})
  .to('.ppm_gift1', { x: 0, y: 0, duration: 1.3 },)
  .to('.ppm_gift2', { x: 0, y: 0, duration: 1.3 }, '<.3')
  .to('.ppm_gift3', { x: 0, y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift4', { x: 0, y: 0, duration: 1.3 }, '<.1')
.to('.ppm_layer2',{display:'block',opacity:1},'<.7')
  .to('.ppm_gift5', { x: 0, y: 0, duration: 1.3 }, '<-.1')
  .to('.ppm_gift6', { x: 0, y: 0, duration: 1.1 }, '<')
  .to('.ppm_gift7', { x: 0, y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift8', { x: 0, y: 0, duration: 1 }, '<')
.to('.ppm_layer3',{display:'block',opacity:1},'<.7')
  .to('.ppm_gift9', { x: 0, y: 0, duration: 1.3 }, '<-.2')
  .to('.ppm_gift10', { x: 0, y: 0, duration: 1.2 }, '<')
  .to('.ppm_gift11', { x: 0, y: 0, duration: 1.1 }, '<')
  .to('.ppm_gift12', { x: 0, y: 0, duration: 1 }, '<')
.to('.ppm_layer4',{display:'block',opacity:1},'<.5')
  .to('.ppm_gift13', { x: 0, y: 0, duration: 1.3 }, '<.1')
  .to('.ppm_gift14', { x: 0, y: 0, duration: 1 }, '<')
  .to('.ppm_gift15', { x: 0, y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift16', { x: 0, y: 0, duration: 1 }, '<')
.to('.ppm_layer5',{display:'block',opacity:1},'<.5')
  .to('.ppm_gift17', { x: 0, y: 0, duration: 1.3 }, '<.1')
  .to('.ppm_gift18', { x: 0, y: 0, duration: 1.1 }, '<')
  .to('.ppm_gift19', { x: 0, y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift20', { x: 0, y: 0, duration: 1 }, '<')
.to('.ppm_layer6',{display:'block',opacity:1},'<.5')



function lastSlide() {
  gsap.to('.ppm_last_slide',{display:'block',opacity:1,scale:1,duration:1.2,ease:'elastic.out(1,0.3)'})
  gsap.to('.darazBoxContainer',{display:'none',opacity:0})
  gsap.to(allGift,{display:'none',opacity:0,delay:.5})
  confetti({
    particleCount: 500,
    spread: 50,
    origin: { y: 0.6 },
  });

}