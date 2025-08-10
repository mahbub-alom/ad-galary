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
]
gsap.set(allGift, { y: '-100vh', display: 'block' })

gsap.set('.ppm_gift1', { x: '10vw' })
gsap.set('.ppm_gift2', { x: '40vw' })
gsap.set('.ppm_gift3', { x: '-20vw' })
gsap.set('.ppm_gift4', { x: '-50vw' })
gsap.set('.ppm_gift5', { x: '20vw' })
gsap.set('.ppm_gift6', { x: '-20vw' })
gsap.set('.ppm_gift7', { x: '0vw' })
gsap.set('.ppm_gift8', { x: '-40vw' })
gsap.set('.ppm_gift9', { x: '20vw' })
gsap.set('.ppm_gift10', { x: '-30vw' })
gsap.set('.ppm_gift11', { x: '10vw' })

gsap.timeline({ onComplete: blast })
  .to('.ppm_gift1', { x: '-2dvw', y: 0, duration: 1.3 },)
  .to('.ppm_gift2', { x: '-2dvw', y: 0, duration: 1.3 }, '<.3')
  .to('.ppm_gift3', { x: '-2dvw', y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift4', { x: '-2dvw', y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift5', { x: '-2dvw', y: 0, duration: 1.3 }, '<.3')
  .to('.ppm_gift6', { x: '-2dvw', y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift7', { x: '-2dvw', y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift8', { x: '-2dvw', y: 0, duration: 1.3 }, '<.3')
  .to('.ppm_gift9', { x: '-2dvw', y: 0, duration: 1.3 }, '<')
  .to('.ppm_gift10', { x: '-2dvw', y: 0, duration: 1.1 }, '<')
  .to('.ppm_gift11', { x: '-2dvw', y: 0, duration: 1.1 }, '<')
// gsap.to('.ppm_gift5',{x:0,y:0,duration:1})

// gsap.to('')
function blast() {
  gsap.timeline({
    delay: .5,
    onComplete: lastSlide
  })
    .to('.ppm_gift1', { x: '20vw', y: '-60vh', scale: 1.5, duration: .5 },)
    .to('.ppm_gift2', { x: '30vw', y: '-60vh', scale: 1.5, duration: .5 }, '<')
    .to('.ppm_gift3', { x: '-25vw', y: '-70vh', scale: 1.5, duration: .5 }, '<')
    .to('.ppm_gift4', { x: '-10vw', y: '-50vh', scale: 1.5, duration: .5 }, '<')
    .to('.ppm_gift5', { x: '0vw', y: '-60vh', scale: 1.5, duration: .5 }, '<')
    .to('.ppm_gift6', { x: '10vw', y: '-30vh', scale: 1.3, duration: .5 }, '<')
    .to('.ppm_gift7', { x: '25vw', y: '-20vh', scale: 1.3, duration: .5 }, '<')
    .to('.ppm_gift8', { x: '-25vw', y: '-40vh', scale: 1.3, duration: .5 }, '<')
    .to('.ppm_gift9', { x: '20vw', y: '-30vh', scale: 1.3, duration: .5 }, '<')
    .to('.ppm_gift10', { x: 0, y: '-30vh', duration: .5 }, '<')
    .to('.ppm_gift11', { x: 0, y: '-30vh', duration: .5 }, '<')
}

function lastSlide() {
  gsap.to('.ppm_last_slide', { display: 'block', opacity: 1, onComplete:playVideo })
  gsap.to(allGift, { display: 'none', opacity: 0, delay: .5 })
  gsap.to('.modelWithBOx', { display: 'none', opacity: 0, delay: .2 })

}

function playVideo() {
  document.querySelector('.ppm_last_slide').play()
  document.querySelector('.ppm_last_slide').addEventListener('ended',()=>{
    gsap.to('.full_takeover',{opacity:0,onComplete:()=>{document.querySelector('.full_takeover').remove()}})
  })
}