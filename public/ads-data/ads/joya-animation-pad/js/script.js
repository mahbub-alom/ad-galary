function init() {
    gsap.timeline()
        .to('.ppm_container', { display: 'block', opacity: 1, duration: .3 })
        .fromTo('.ppm_pads', { display: 'none', opacity: 0, y: '-200%' }, { display: 'block', opacity: 1, duration: 1, y: '0%' }, '>')
        .fromTo('.ppm_product', { display: 'none', opacity: 0, x: '-200%' }, { display: 'block', opacity: 1, duration: 1, x: '0%' }, '>')
        .to('.ppm_pads',{scale:.6,x:54,y:40},'<.3')
        .add(()=>{animateFloatingElements(1)},'>')
        .fromTo('.ppm_copy1',{display:'none',opacity:0,y:'-200%'},{display:'block',opacity:1,duration:1,y:'0%'},'>')
        .fromTo(['.ppm_copy2','.ppm_copy3'],{display:'none',opacity:0,},{display:'block',opacity:1,duration:1,onComplete:()=>{
            gsap.to('.ppm_copy3',{scale:1.1,duration:.5,ease:'power2.inOut',repeat:-1,yoyo:true})
        }},'<.3')

}


init();

function animateFloatingElements(groupNumber) {
    gsap.to(`.ppm_flying${groupNumber}_elms`,{display:'block'})
    const elements = document.querySelectorAll(`.singleElm${groupNumber}`);
  
    elements.forEach((elm, i) => {
      // Set initial position at bottom with narrow spread
      gsap.set(elm, {
        x: gsap.utils.random(-10, 10),
        y: 0,
        rotation: gsap.utils.random(-10, 10),
        scale: gsap.utils.random(0.6, 0.8),
        opacity: 0
      });
  
      // Spray upward animation with wider spread at top
      gsap.to(elm, {
        duration: gsap.utils.random(1.2, 2.5),
        x: `+=${gsap.utils.random(-150, 150)}`,
        y: gsap.utils.random(-200, -250),
        rotation: gsap.utils.random(-60, 60),
        scale: gsap.utils.random(.8, 1),
        opacity: 1,
        ease: "none",
        delay: i * 0.1,
        repeat: -1,
        onComplete: () => {
          // Reset to bottom position with narrow spread
          gsap.set(elm, {
            x: gsap.utils.random(-20, 20),
            y: 0,
            rotation: gsap.utils.random(-20, 20),
            scale: gsap.utils.random(0.6, 0.8),
            opacity: 0
          });
        }
      });
    });
  }
  