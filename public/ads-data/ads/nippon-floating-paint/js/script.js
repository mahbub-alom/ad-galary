gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .to('.ppm_color1', { "--pp_clip": '0%', duration: 1,ease:'none' }, '>')
    .to('.ppm_brush',{bottom:'54%',duration:.9,ease:'none'}, '<')
    .to('.ppm_brush',{transform:'rotateZ(-30deg)',duration:.2,ease:'none'}, '>')
    .to('.ppm_color3', { "--pp_clip_3": '100%', duration: 1,ease:'none' }, '>')
    .to('.ppm_brush',{bottom:'-7%',right:'11%',duration:1.12,ease:'none'}, '<')
    .to('.ppm_brush',{transform:'rotateZ(0deg)',duration:.2,ease:'none'}, '>')
    .to('.ppm_color2', { "--pp_clip_2": '0%', duration: 1,ease:'none' }, '<')
    .to('.ppm_brush',{bottom:'54%',right:'11%',duration:.95,ease:'none'}, '<')
    .to('.ppm_brush',{display:'none',opacity:0,duration:.3,ease:'none'}, '>.2')
    .fromTo('.ppm_box_1',{display:'none',opacity:0.5,x:'200%'},{display:'block',opacity:1,x:'0%',duration:.6,ease:'none'}, '>.2')
    .fromTo('.ppm_box_2',{display:'none',opacity:0.5,x:'200%'},{display:'block',opacity:1,x:'0%',duration:.6,ease:'none'}, '>-.2')
    .to('.ppm_colorContainer',{display:'none',opacity:0,duration:.3,ease:'none'}, '>')
    .fromTo('.ppm_text2',{display:'none',opacity:0.5,x:'150%'},{display:'block',opacity:1,x:'0%',duration:.7,ease:'none',onComplete:()=>{
        // gsap.to('.ppm_text',{scale:1.06,duration:.6,repeat:-1,yoyo:true,ease:'none'})
    }}, '>')
    .fromTo('.ppm_text',{display:'none',opacity:0.5,y:'200%'},{display:'block',opacity:1,y:'0%',duration:.6,ease:'none',onComplete:()=>{
        gsap.to('.ppm_text',{scale:1.06,duration:.6,repeat:-1,yoyo:true,ease:'none'})
    }}, '>')
    
setTimeout(()=>{
    removedAll()
},15000)
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click',(e)=>{
    e.stopPropagation();
    removedAll()
})
document.querySelector('.ppm_container').addEventListener('click',(e)=>{
    window.open('https://www.nipponpaint.com.bd/')
})
function removedAll(){
    gsap.to('.ppm_container',{opacity:0,duration:.5,ease:'none'})
}