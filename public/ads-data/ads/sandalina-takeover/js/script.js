
gsap.set(['.ppm_left'], { x: '-50dvw', display: 'block' })
gsap.set(['.ppm_right'], { x: '+50dvw', display: 'block' })
gsap.set('.ppm_model_side', { y: '100dvh', display: 'flex' })
gsap.set('.ppm_product_side', { x: '100dvw', display: 'block' })



gsap.timeline({ onComplete: linearAnimation })
  .to(['.ppm_left', '.ppm_right'], { duration: .8, x: 0 })
  .to('.ppm_model_side', { y: 0, duration: .8 }, '>-.2')
  .to('.ppm_product_side', { x: 0, duration: .8 }, '<')
  .to('.ppm_tagline',{display:'block',opacity:1},'<.2')
  .to('.ppm_fridge', { scale: 1.03, duration: .4, repeat: 5, yoyo: true }, '>')
  .to('.ppm_left', { x: '-50dvw', display: 'block' }, '>')
  .to('.ppm_right', { x: '+50dvw', display: 'block' }, '<')
  .to(['.ppm_second_slide','.ppm_tagline'], { display: 'none', opacity: 0 }, '>-.4')
  .set('.ppm_container',{display:'none'},'>')

// linearAnimation()


function linearAnimation() {
  // return
  gsap.set('.ppm_linear_bg', { y: 150, display: 'block' })
  gsap.set('.ppm_linear_mnemonic', { y: 300, display: 'block' })
  gsap.set('.ppm_linear_copy', { y:'200%', display: 'block' })
  gsap.set('.ppm_linear_fridge', { display: 'block' })
  gsap.set('.ppm_linear_title', { display: 'block' })
  gsap.set('.ppm_linear_tag', { display: 'block' })
  gsap.timeline()
    .set('.ppm_mini_container', { display: 'block', opacity: 1 })
    .to('.ppm_linear_bg', { y: 0, display: 'block' })
    .to('.ppm_linear_mnemonic', { y: 0, display: 'block',onComplete:smallMnemonicAnim },'<.2')
    .to('.ppm_linear_copy', { y:0, display: 'block',onComplete:smallCopyAnim },'<')
    .to('.ppm_linear_fridge', {opacity:1,display: 'block',onComplete:smallFridgeAnim },'<')
    .to(['.ppm_linear_title','.ppm_linear_tag'],{opacity:1})
}

function smallMnemonicAnim() {
  gsap.to('.ppm_linear_mnemonic',{y:-8,repeat:-1,yoyo:true,duration:1})
}
function smallFridgeAnim() {
  gsap.to('.ppm_linear_fridge',{scale:1.05,repeat:-1,yoyo:true,duration:1})
}
function smallCopyAnim() {
  // gsap.to('.ppm_linear_copy',{scale:1.05,repeat:-1,yoyo:true,duration:1})
  gsap.to('.ppm_linear_copy',{y:8,repeat:-1,yoyo:true,duration:1})

}

document.querySelector('.ppm_closeBtn_linear').addEventListener('click',(e)=>{
  e.stopPropagation()
  document.querySelector('.ppm_mini_container').remove()
  document.querySelector('.ppm_container').remove()
})