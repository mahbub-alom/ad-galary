
// document.querySelector('.ppm_closeBtn_linear').addEventListener('click', (e) => {
//   // e.stopPropagation()
//   // document.querySelector('.ppm_vid_div').remove()
// })
gsap.timeline()
.fromTo('.ppm_container',{scale:0,display:'none',opacity:0},{scale:1,display:'block',opacity:1,duration:1})
.add(flipAnimation,'>.6')


function isMobileDevice() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isSmallScreen = window.innerWidth < 600;
  return isMobile && isSmallScreen;
}


function flipAnimation(){
  const boxes = gsap.utils.toArray('.box');

  // Create the flip animation for each box
  boxes.forEach((box, index) => {
    gsap.to(box, {
      rotationY: 180,
      duration: 1.5,
      ease: "power2.inOut",
      delay: index * 0.2, // Creates the stagger effect
    });
  });
}