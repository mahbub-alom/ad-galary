document.querySelectorAll('.ppm_card').forEach(ppm_card => {
  ppm_card.addEventListener('click',clickOperation)
})

function clickOperation() {
  gsap.to('.ppm_slide_2',{opacity:0,duration:.2,display:'none',onComplete:()=>{
    document.querySelector('.ppm_video').play()
  }})
}

gsap.to('.ppm_hand',{scale:1.05,repeat:-1,yoyo:true})
gsap.to('.ppm_card1',{scale:.98,repeat:-1,yoyo:true,delay:.1})
gsap.to('.ppm_card2',{scale:.98,repeat:-1,yoyo:true,delay:.2})
gsap.to('.ppm_card3',{scale:.98,repeat:-1,yoyo:true,delay:.3})