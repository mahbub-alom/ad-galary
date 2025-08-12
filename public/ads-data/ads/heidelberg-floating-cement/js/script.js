let isMobile = window.innerWidth < 601;
let remoteClicked = false;

let isRemoved = false;
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  if(isRemoved) return;
  removeAllElms();
  isRemoved = true;

})

function removeAllElms(){
	document.querySelector('.ppm_container').remove();
  	gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
}

setTimeout(()=>{
if(isRemoved) return;
isRemoved = true;
removeAllElms();
},13000);




let extraDataForMobile = {}
if(isMobile){
extraDataForMobile = {bottom:'65%',right:'5%',width:'180px', duration: .5}
}else{
extraDataForMobile = {bottom:'60%',right:'2%',width:'250px', duration: 1}
}
function beginningAnimation() {
  gsap.set(['.ppm_cementBag','.ppm_breakingGif'],{display:'block'})
  gsap.timeline()
  .fromTo('.ppm_cementBag', { y: '-100dvh' }, { y: 0, duration: 1, ease: 'none' })
  .to('.ppm_container', {...extraDataForMobile, x: 0,onComplete:sideAnimation }, '>1')
}

beginningAnimation()





function sideAnimation(){
  gsap.timeline()
  .fromTo('.ppm_image1', { display:'none',opacity:0,scale:.5}, { display:'block',y:'-125%',x:'-100%',opacity:1,scale:1,transformOrigin:'center center',duration:1,ease:'power2.inOut'})
  .fromTo('.ppm_image2', { display:'none',opacity:0,scale:.5}, { display:'block',y:'-150%',x:'0%',opacity:1,scale:1,transformOrigin:'center center',duration:1,ease:'power2.inOut'},'<.2')
  .fromTo('.ppm_image3', { display:'none',opacity:0,scale:.5}, { display:'block',y:'-125%',x:'100%',opacity:1,scale:1,transformOrigin:'center center',duration:1,ease:'power2.inOut'},'<.2')
  .to(['.ppm_image1','.ppm_image2','.ppm_image3'],{x:'0%',y:'0%',display:'none',opacity:1,scale:1,transformOrigin:'center center',duration:.5,ease:'power2.inOut'},'>1')
  .fromTo('.ppm_copy',{display:'none',opacity:0,scale:.5},{display:'block',y:'-125%',x:'0%',opacity:1,scale:1,transformOrigin:'center center',duration:.5,ease:'power2.inOut'},'<.2')
  .fromTo('.ppm_logo',{display:'none',opacity:0,scale:.5,y:'-100px'},{display:'block',y:'0px',x:'0%',opacity:1,scale:1,transformOrigin:'center center',duration:.5,ease:'power2.inOut'},'<.3')
  .fromTo('.ppm_image1', { display:'none',opacity:0,scale:.5}, { display:'block',y:'125%',x:'-100%',opacity:1,scale:1,transformOrigin:'center center',duration:1,ease:'power2.inOut',onComplete:()=>{
    gsap.to('.ppm_image1',{scale:1.05,repeat:-1,yoyo:true,duration:.5,ease:'power2.inOut'})
  }})
  .fromTo('.ppm_image2', { display:'none',opacity:0,scale:.5}, { display:'block',y:'150%',x:'0%',opacity:1,scale:1,transformOrigin:'center center',duration:1,ease:'power2.inOut',onComplete:()=>{
    gsap.to('.ppm_image2',{scale:1.05,repeat:-1,yoyo:true,duration:.5,ease:'power2.inOut'})
  }},'<.2')
  .fromTo('.ppm_image3', { display:'none',opacity:0,scale:.5}, { display:'block',y:'125%',x:'100%',opacity:1,scale:1,transformOrigin:'center center',duration:1,ease:'power2.inOut',onComplete:()=>{
    gsap.to('.ppm_image3',{scale:1.05,repeat:-1,yoyo:true,duration:.5,ease:'power2.inOut'})
  }},'<.2')
  .fromTo('.ppm_cta',{display:'none',opacity:0,scale:.5},{display:'block',opacity:1,scale:1,transformOrigin:'center center',duration:.5,ease:'power2.inOut',onComplete:()=>{
    gsap.to('.ppm_cta', { scale: 1.03, repeat: -1, yoyo: true, duration: .5, ease: 'power2.inOut' })
  }},'>')
}