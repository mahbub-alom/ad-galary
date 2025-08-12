gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .set('.ppm_wrapperContainer',{display:'block',x:'100%'})
    .to('.ppm_wrapperContainer',{x:'0%',duration:1.5,ease:'none'})
    .to('.ppm_rope',{display:"none",duration:.3,opacity:0})
    .to('.ppm_box',{y:'40%',rotate:'5deg',duration:.5,ease:'none',onComplete:()=>gsap.to('.ppm_wrapperContainer',{zIndex:10})},'<.2')
    .to('.ppm_heliContainer',{x:'200%',duration:1.5,ease:'none'},'>')
    .to('.ppm_box',{y:'0%',scale:1.5,duration:.5,ease:'none'},'<.6')
    .add(copyAnimation,'>')


function copyAnimation() {
    gsap.timeline({repeat:-1,repeatDelay:.5})
    .fromTo('.ppm_copy1',{display:'none',opacity:0,x:'-150%'},{display:'block',duration:.5,opacity:1,x:'0%',ease:'elastic.out(1,0.7)'},'>')
    .fromTo('.ppm_copy2',{display:'none',opacity:0,x:'150%'},{display:'block',duration:.5,opacity:1,x:'0%',ease:'elastic.out(1,0.7)'},'<.2')
    .to('.ppm_copy1',{display:'none',opacity:0,x:'-150%'},'>1.6')
    .to('.ppm_copy2',{display:'none',opacity:0,x:'150%'},'<')
}

function cngAnimation() { gsap.to('.ppm_cng', { y: '-2%', repeat: -1, yoyo: true, duration: .7, ease: 'none' }) }
function mikeAnimation() { gsap.to('.ppm_element', { scale: 1.1, repeat: -1, yoyo: true, duration: 1.5, ease: 'none' }) }



gsap.to('.ppm_cloud1', { scale: 1.05,x:20, repeat: -1, yoyo: true, duration: 3.5, ease: 'none' })
gsap.to('.ppm_cloud2', { scale: 1.05,x:-20, repeat: -1, yoyo: true, duration: 3.5, ease: 'none' })
gsap.to('.ppm_cloud3', { scale: 1.05,x:20, repeat: -1, yoyo: true, duration: 3.5, ease: 'none' })

gsap.to('.ppm_rotatingBlade', { rotateY: 360, duration: .3, ease: 'none', repeat: -1 })






setTimeout(() => {
    removedAll()
}, 12000)
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
    e.stopPropagation();
    removedAll()
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
    window.open('https://www.grameenphone.com/personal/plans-offers/internet-packages')
    console.log('clicked');
})
function removedAll() {
    gsap.to('.ppm_container', { opacity: 0, duration: .5, ease: 'none',onComplete:()=>{
        document.querySelector('.ppm_container').remove()
    } })
}