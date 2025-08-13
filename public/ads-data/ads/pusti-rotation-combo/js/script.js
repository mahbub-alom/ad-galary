var firstClicked = false;
gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_polao',{opacity:0,display:'none',x:'-100%'}, {opacity:1,display:'block',x:'0%',duration:.5,ease:'none'})
    .fromTo('.ppm_plus',{opacity:0,display:'none'   }, {opacity:1,display:'block',duration:.5,ease:'none'})
    .fromTo('.ppm_rotatingBox',{opacity:0,display:'none',x:'200%'}, {opacity:1,display:'block',x:'50%',duration:.7,ease:'none'},'<')
    .fromTo('.ppm_bowl_container',{opacity:0,display:'none'}, {opacity:1,display:'block',duration:.5,ease:'none'},'>')
    .fromTo('.ppm_handIcon',{opacity:0,display:'none'}, {opacity:1,display:'block',duration:.5,ease:'none',onComplete:()=>{
        gsap.to('.ppm_handIcon',{scale:1.1,duration:.7,ease:'none',repeat:-1,yoyo:true});
        document.querySelector('.ppm_container').addEventListener('click',(e)=>{
            if(!firstClicked){
              submitInteraction("first_clicked", extraData);
                firstClicked = true;
                handIconClicked();
            }
        })
    }},'<')

function handIconClicked(){
    gsap.timeline()
        .to(['.ppm_handIcon','.ppm_bowl_container','.ppm_polao','.ppm_plus','.ppm_rotatingBox','.ppm_copy'],{opacity:0,duration:.5,ease:'none'})
        .to('.ppm_second_slide',{display:'block',duration:.2,ease:'none'},'<.3')
        .fromTo('.ppm_pplogo',{opacity:0,display:'none',y:'-150%'},{opacity:1,display:'block',y:'0%',duration:.5,ease:'none'},'>')
        .fromTo('.ppm_sku',{opacity:0,display:'none',y:'150%'},{opacity:1,display:'block',y:'0%',duration:.5,ease:'none'},'<')
        .fromTo('.ppm_text1',{opacity:0,display:'none',x:'150%'},{opacity:1,display:'block',x:'0%',duration:.5,ease:'none'},'>')
        .fromTo('.ppm_text2',{opacity:0,display:'none',x:'-150%'},{opacity:1,display:'block',x:'0%',duration:.5,ease:'none'},'<')
        .fromTo('.ppm_cta',{opacity:0,display:'none',y:'150%'},{opacity:1,display:'block',y:'0%',duration:.5,ease:'none',onComplete:()=>{
            gsap.to('.ppm_cta',{scale:1.1,duration:.7,ease:'none',repeat:-1,yoyo:true});
        }},'>')
}

    
setTimeout(()=>{
    // removedAll()
},15000)

// document.querySelector('.ppm_container').addEventListener('click',(e)=>{
//     window.open('https://purplepatch.online/')
// })
function removedAll(){
    gsap.to('.ppm_container',{opacity:0,duration:.5,ease:'none'})
}

gsap.to('.ppm_bowl_container',{rotate:360,duration:4,ease:'none',repeat:-1})