twoDataAnimation()
gsap.timeline()
    .fromTo('.model_with_two_data',{display:'none',opacity:0,x:'150%'},{display:'block',opacity:1,x:'0%',duration:1.5,ease:'power2.inOut'})
    .fromTo('.ppm_banner', { display: 'none', opacity: 0,y:'150px' }, { display: 'block', opacity: 1, y:'0px', duration: 1, ease: 'power2.out' },'<.5')
    .fromTo('.ppm_copy', { display: 'none', opacity: 0,x:'-150px' }, { display: 'block', opacity: 1, x:'0px', duration: 1, ease: 'power2.out' },'<.5')
    .fromTo('.ppm_logo', { display: 'none', opacity: 0,x:'50px' }, { display: 'block', opacity: 1, x:'0px', duration: 1, ease: 'power2.out' },'<')
    .fromTo('.ppm_cta', { display: 'none', opacity: 0,x:'100%' }, { display: 'block', opacity: 1, x:'0%', duration: 1, ease: 'power2.out',onComplete:()=>{
        gsap.to('.ppm_cta',{scaleX:1.1,scaleY:1.1,duration:.5,ease:'power2.inOut',repeat:-1,yoyo:true})
    } },'<.5')

function twoDataAnimation(){
    gsap.to('.ppm_copy_800', {
        display: 'block',
        scale: 1.05,
        y: '-5px',
        x: () => `${gsap.utils.random(-5, 0)}px`,
        duration: .8,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        repeatRefresh: true
    })
    gsap.to('.ppm_copy_45', {
        delay: .8,
        display: 'block',
        scale: 1.05,
        y: '-5px',
        x: () => `${gsap.utils.random(5, 0)}px`,
        duration: .8,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        repeatRefresh: true
    })
}
