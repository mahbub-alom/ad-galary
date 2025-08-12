let remoteClicked = false;
// document.querySelector('.ppm_centerTap').addEventListener('click',(e)=>{if(!remoteClicked){e.stopPropagation();remoteClick();}})
// document.querySelector('.ppm_box_splash').addEventListener('click',(e)=>{if(!remoteClicked){e.stopPropagation();remoteClick();}})

// function remoteClick() {
//   remoteClicked = true;
//   gsap.timeline()
//     .set('.ppm_splash_gif', { display: 'block' })
//     .set(['.ppm_mango', '.ppm_berry', '.ppm_orange','.ppm_tap_hand'], { display: 'none' }, '<')
//     .fromTo('.video-wrapper', { rotateX: 180, opacity: 0, display: "none" }, { rotateX: 0, opacity: 1, display: "block", onComplete: () => { document.querySelector('#ppm_video').play(); } }, '>2')
//     .set('.ppm_box_splash', { display: 'none' }, '>-.3')
//     .to(['.ppm_centerTap'], { opacity: 0, display: "none" },'<')
// }

// document.querySelector('.ppm_closeBtn_takeover').addEventListener('click',(e)=>{
//   e.stopPropagation();
//   document.querySelector('.ppm_centerTap').remove();
//   document.querySelector('.video-wrapper').remove();
//   document.querySelector('.ppm_box_splash').remove();
//   gsap.set('.ppm_closeBtn_takeover',{display:'none'})
// })
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click',(e)=>{
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover',{display:'none'})
})

function beginningAnimation() {
  gsap.set(['.ppm_cementBag','.ppm_breakingGif'],{display:'block'})
  gsap.timeline()
  .fromTo('.ppm_cementBag', { y: '-100dvh' }, { y: 0, duration: 1, ease: 'none' })
  .to('.ppm_container', { bottom: '0dvh', width: '250px', right: '0%', duration: 1, x: 0,onComplete:sideAnimation }, '>1')
}

beginningAnimation()





function sideAnimation(){
  gsap.set(['.ppm_image1','.ppm_image2'],{display:'block'})
  gsap.timeline({repeat:-1})
  .to('.ppm_image1', { y:'-220px'})
  .to('.ppm_image1', { y:'0'},'>.3')
  .to('.ppm_image2', { y:'-220px'},'>.3')
  .to('.ppm_image2', { y:'0'},'>.3')
}