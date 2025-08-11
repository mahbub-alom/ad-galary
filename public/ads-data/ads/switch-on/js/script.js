// gsap.set('.ppm_basket', {
//     x: 115
// });
gsap.to('.ppm_bowl1',{x:10,repeat:-1,duration:.5,ease:'none',yoyo:true})
Draggable.create('.ppm_bowl1', {
    type: 'x',
    bounds: '.bowl_container',
    inertia: true
});
a = Draggable.create('.ppm_bowl1', {
    type: "x", edgeResistance: .99, bounds: '.bowl_container', onDrag: function () {
        console.log(this.x)
        if (this.x > 50) {
            if (a[0]) {
                a[0].disable();
                gsap.set('.ppm_bowl1', { attr: { src: './assets/bowl2.png' } });
                gsap.to('.ppm_bowl1', { rotate: 360, duration: 6, ease: 'none', repeat: -1 },0)
                gsap.timeline()
                    .to('.ppm_bowl1', { x: 166, duration: .3, ease: 'none' })
                    .fromTo('.ppm_rectangle2', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .3, ease: 'none' })
                    .to('.ppm_text1', { opacity: 0, duration: .3, ease: 'none',display:'none' })
                    .fromTo('.ppm_text2',{opacity:0,display:'none',scale:.5} ,{ opacity: 1,scale:1,display:'block',onComplete:()=>{
                        gsap.to('.ppm_text2',{scale:1.05,duration:.5,ease:'none',repeat:-1,yoyo:true})
                    } },'>')
            }
        }
    }
})