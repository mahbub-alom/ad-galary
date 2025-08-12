gsap.timeline()
    .fromTo('.ppm_windowContainer', { display: 'none', scale: 0 }, { display: 'block', scale: 1, duration: 1, ease: 'power2.inOut' })
    .fromTo('.ppm_logo', { display: 'none', opacity: 0,x:'-100%' }, { display: 'block', opacity: 1, x:'0%', duration: .5, ease: 'power2.inOut' },'<')
    .fromTo('.ppm_text2', { display: 'none', opacity: 0,x:'100%' }, { display: 'block', opacity: 1, x:'0%', duration: .5, ease: 'power2.inOut' },'>')
    .to('.ppm_windowLeft', { rotateY: 170, duration: 1, ease: 'power2.inOut' },'<.2')
    .to('.ppm_windowRight', { rotateY: -170, duration: 1, ease: 'power2.inOut',onComplete:()=>{
        gsap.to('.ppm_text',{scaleX:1.1,scaleY:1.1,duration:1,ease:'elastic.out(1,0.3)',repeat:-1,yoyo:true})
    } }, '<')
    .fromTo('.ppm_cta', { display: 'none', opacity: 0,x:'100%' }, { display: 'block', opacity: 1, x:'0%', duration: .5, ease: 'power2.inOut',onComplete:()=>{
        gsap.to('.ppm_cta',{scaleX:1.1,scaleY:1.1,duration:.5,ease:'power2.inOut',repeat:-1,yoyo:true})
    } },'<.5')

