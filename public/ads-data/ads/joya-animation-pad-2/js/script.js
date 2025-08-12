// gsap.to('.ppm_callBtn',{scaleX:1.1,scaleY:1.1,repeat:-1,yoyo:true})
// document.querySelector('.ppm_slide_1').addEventListener('click',()=>{
//   submitInteraction('tap_call',extraData)
//   window.open(`tel:+8801872607360`);
// });


gsap.timeline()
    .fromTo('.ppm_taka', { display: 'none', opacity: 0, y: '100%' }, { display: 'block', opacity: 1, y: '0%', duration: 1, ease: 'power2.inOut' })
    .to('.ppm_taka', { scale:1.05, duration: .4,repeat:3,yoyo:true, ease: 'none' })
    .to('.ppm_taka', { rotateY:180,duration:.8,display:'none',opacity:0 })
    .fromTo('.ppm_pads',{display:'none',opacity:0,rotateY:-180},{display:'block',opacity:1,duration:1,rotateY:0},'<')
    .to('.ppm_pads',{scale:0,duration:1,ease:'none',transformOrigin:'45% 70%'},'>.3')
    .fromTo('.ppm_sku',{display:'none',opacity:0,scale:.5},{display:'block',opacity:1,duration:.5,scale:1},'<')
    .fromTo(['.ppm_text1','.ppm_text2'],{display:'none',opacity:0,y:'-200px'},{display:'block',opacity:1,duration:.5,y:'0px'},'>')
    .fromTo(['.ppm_free'],{display:'none',opacity:0},{display:'block',opacity:1,duration:.5,onComplete:()=>{
        gsap.to('.ppm_free',{scale:1.1,duration:.5,repeat:-1,yoyo:true,ease:'none'})
    }},'>-.2')
    .fromTo('.ppm_keypoint',{display:'none',opacity:0,x:'-150px'},{display:'block',opacity:1,duration:.5,x:'0px'},'>')
    .fromTo('.ppm_taka2',{display:'none',opacity:0,x:'150px'},{display:'block',opacity:1,duration:.5,x:'0px',onComplete:()=>{
        gsap.to('.ppm_taka2',{scale:1.08,duration:.5,repeat:-1,yoyo:true,ease:'none'})
    }},'>')
    

