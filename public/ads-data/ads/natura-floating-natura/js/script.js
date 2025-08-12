document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})


function beginningAnimation() {
  // gsap.set(['.ppm_cementBag','.ppm_breakingGif'],{display:'block'})
  gsap.timeline()
    .fromTo('.ppm_product', { display: 'none', opacity: 0, scale: 0.1 }, { display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)" })
    .fromTo('.ppm_text_1', { display: 'none', opacity: 0, scale: .8 }, { display: 'block', opacity: 1, scale: 1, ease: "none" }, '>')
    .fromTo('.ppm_text_3', { display: 'none', opacity: 0, rotateY: 100 }, {
      display: 'block', opacity: 1, scale: 1, rotateY: 0, ease: "none", onComplete: () => {
        gsap.timeline()
          .to('.ppm_text_3', { y: 5, repeat: -1, yoyo: true }, '<')
      }
    }, '>')

}

beginningAnimation()


document.querySelector('.ppm_container').addEventListener('click', (e) => {
  gsap.fromTo('.ppm_bottom_static',{display: 'none', opacity: 0,y:'100%'}, { display: 'block', opacity: 1, ease: "none",y:"0%" })
  gsap.to('.ppm_container', { display: 'none',opacity:0 })
})
document.querySelector('.ppm_bottom_static').addEventListener('click', (e) => {
window.open('https://shop.shajgoj.com/product/natura-grow-hair-oil-100ml?srsltid=AfmBOooNQgR_xKxQv9roGuguxJT0BVzxapzepUMG3-o6PYG3GEz5mg8I')
})