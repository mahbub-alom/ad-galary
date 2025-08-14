let remoteClicked = false;


document.querySelector('.ppm_closeBtn_takeover').addEventListener('click',(e)=>{
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover',{display:'none'})
})
let isDesktop = window.innerWidth > 600;

function beginningAnimation() {
  gsap.set(['.ppm_cementBag','.ppm_model_mim'],{display:'block'})
  gsap.timeline()
  .fromTo(['.ppm_cementBag','.ppm_model_mim'], { y: '-100dvh' }, { y: 0, duration: 1, ease: 'none' })
  .to('.ppm_container', { bottom: '3dvh', width: isDesktop ? '250px' : '150px', right: isDesktop ? '3%' : '5%', duration: 1, x: 0,onComplete:sideAnimation }, '>1')
  .to('.ppm_model_mim', { duration:1,opacity:0,display:'none' }, '<')
}

beginningAnimation()





function sideAnimation(){
  gsap.fromTo('.ppm_product',{display:'none',y:'200px',opacity:0},{display:'block',y:0,opacity:1,duration:1,ease:'none'})
  gsap.to('.ppm_cementBag',{y:isDesktop ? '-200px' : '-120px',duration:1,ease:'none',onComplete:()=>{
    gsap.to('.ppm_cementBag',{y:'-=20',duration:1,ease:'none',repeat:-1,yoyo:true})
  }})
}