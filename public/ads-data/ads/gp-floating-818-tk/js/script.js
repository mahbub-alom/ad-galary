gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .add(twoDataAnimation)
    .fromTo('.ppm_mosha_container', { display: 'none', opacity: 0, x: '150%' }, { display: 'block', opacity: 1, x: '0%', duration: 1.5, ease: 'power2.inOut' })
    .fromTo('.ppm_shape', { display: 'none', opacity: 0, scale: 0 }, { display: 'block', opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1,0.3)', onComplete: rotateShape }, '<1')
    .fromTo('.ppm_signboard', { display: 'none', opacity: 0, y: 100 }, { display: 'block', opacity: 1, y: 0, duration: 1, ease: 'power2.inOut', onComplete: signboardAnimation }, '<')
    .add(copyAnimation,'<')



function rotateShape() { gsap.to('.ppm_shape', { rotation: 360, duration: 3, ease: 'none', repeat: -1 }) }
function signboardAnimation() {    gsap.to('.ppm_signboard', { y:5, duration: .8, ease: 'none', repeat: -1,yoyo:true,repeatRefresh:true })}

function copyAnimation(){
    gsap.timeline({repeat: -1})
    .fromTo('.ppm_copy',{display:'none',opacity:0,scale:0},{display:'block',opacity:1,scale:1,duration:1,ease:'elastic.out(1,0.45)'},'<')
    .to('.ppm_copy',{scale:0,duration:.5,ease:'none',display:'none',opacity:0},'>1.2')
}

function twoDataAnimation() {
    gsap.to('.ppm_35', {
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
    gsap.to('.ppm_700', {
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





setTimeout(() => {
    removedAll()
}, 13000)
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
    e.stopPropagation();
    removedAll()
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
    submitInteraction('landing_clicked',extraData);
    window.open('https://mygp.grameenphone.com/mygp/pack/bundle/4724?ofl=https://www.grameenphone.com/internet-package-activation/step-1/12156&utm_source=PurplePatch&utm_medium=Social&utm_campaign=GPDM_Data_Telco_Internet_818tkdm&utm_term=CPM&utm_content=RichMedia','_blank')

})
function removedAll() {
    gsap.to('.ppm_container', { opacity: 0, duration: .5, ease: 'none',onComplete:()=>{
        document.querySelector('.ppm_container').remove();
    } })
}