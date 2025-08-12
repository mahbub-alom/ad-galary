
var buttonClicked = false;
gsap.timeline()
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_shape1', { display: 'none', opacity: 0, y: '150%' }, { display: 'block', opacity: 1, y: '0%', ease: 'none', duration: .7 })
    .fromTo('.ppm_shape2', { display: 'none', opacity: 0, y: '150%' }, { display: 'block', opacity: 1, y: '0%', ease: 'none', duration: .7 }, '<.2')
    .fromTo('.ppm_model', { display: 'none', opacity: 0, x: '150%' }, { display: 'block', opacity: 1, x: '0%', ease: 'none', duration: .7 }, '<.2')
    .fromTo('.ppm_text', { display: 'none', opacity: 0, rotateY: '180deg' }, { display: 'block', opacity: 1, rotateY: '0deg', ease: 'none', duration:.7 }, '<.2')
    .fromTo('.ppm_cta', { display: 'none', opacity: 0, scale: 0 }, { display: 'block', opacity: 1, scale: 1, ease: 'none', duration: .7, onComplete: ctaAnimation }, '<.2')


function ctaAnimation() {
    gsap.to('.ppm_cta', { scale: 1.05, repeat: -1, yoyo: true, ease: 'none' })
    setTimeout(() => {
        if (!buttonClicked) {
            clickedButton()
            buttonClicked = true;
        }
    }, 1800)
}


document.querySelector('.ppm_container').addEventListener('click', (e) => {
    if(!buttonClicked){
        clickedButton()
        buttonClicked = true;
        submitInteraction('first_clicked',extraData);
        return;
    }
    window.open('https://mybl.digital/BuyInternet');
    submitInteraction('landing_clicked',extraData);

})

function clickedButton() {
    slide2Animation()
    gsap.timeline()
        .to('.ppm_cta', { display: 'none', opacity: 0, scale: 0, ease: 'none', duration: .7 })
        .to(['.ppm_shape1','.ppm_shape2'], { display: 'none', opacity: 0, y: '150%', ease: 'none', duration: .7 },'<')
        .fromTo('.ppm_slide_3', { display: 'none', opacity: 0,x: '100%' }, { display: 'block', opacity: 1, x: '0%', ease: 'none', duration: .7 }, '<')
        .to('.ppm_model', { display: 'none',opacity: 0, ease: 'none', duration: .7 },'<')
        .fromTo('.ppm_mn', { display: 'none', opacity: 0, scale:.3,y:'30%' }, { display: 'block', opacity: 1, scale:1, y:'0%', ease: 'none', duration: .7,onComplete: mnAnimation }, '>.3')
        .to('.ppm_logo', { display: 'none', opacity: 0,rotateY: '180deg', ease: 'none', duration: .7 }, '<.4')
        .fromTo('.ppm_20gb', { display: 'none', opacity: 0, rotateY: '-180deg' }, { display: 'block', opacity: 1, rotateY: '0deg', ease: 'none', duration: .7 }, '<')
        .fromTo('.ppm_250min', { display: 'none', opacity: 0, rotateY: '-180deg' }, { display: 'block', opacity: 1, rotateY: '0deg', ease: 'none', duration: .7 }, '<')
       .fromTo('.ppm_219taka', { display: 'none', opacity: 0, rotateY: '-180deg' }, { display: 'block', opacity: 1, rotateY: '0deg', ease: 'none', duration:.7 }, '<')

}

function mnAnimation(){
    gsap.to('.ppm_mn', { scale:1.1, repeat: -1, yoyo: true, ease: 'none' })
}

function slide2Animation() {
    gsap.timeline()
        .set('.ppm_slide_2', { display: 'block' })
        .to('.ppm_icon_1', { bottom: '0%', left: '70%', ease: 'none', duration: .7 })
        .to('.ppm_icon_2', { bottom: '64%', left: '4%', ease: 'none', duration: .7 }, '<.1')
        .to('.ppm_icon_3', { bottom: '73%', left: '75%', ease: 'none', duration: .7 }, '<.1')
        .to('.ppm_icon_4', { bottom: '37%', left: '86%', ease: 'none', duration: .7 }, '<.1')
        .to('.ppm_icon_5', { bottom: '35%', left: '0%', ease: 'none', duration: .7 }, '<.1')
        .to('.ppm_icon_6', { bottom: '0%', left: '6%', ease: 'none', duration: .7 }, '<.1')
        .to('.ppm_icon_7', { bottom: '81%', left: '21%', ease: 'none', duration: .7 }, '<.1')
        .to('.ppm_icon_1', { y: -3, duration: .6, repeat: -1, yoyo: true, ease: 'none' })
        .to('.ppm_icon_2', { y: -3, duration: .6, repeat: -1, yoyo: true, ease: 'none' }, '<.1')
        .to('.ppm_icon_3', { y: -3, duration: .6, repeat: -1, yoyo: true, ease: 'none' }, '<.1')
        .to('.ppm_icon_4', { y: -3, duration: .6, repeat: -1, yoyo: true, ease: 'none' }, '<.1')
        .to('.ppm_icon_5', { y: -3, duration: .6, repeat: -1, yoyo: true, ease: 'none' }, '<.1')
        .to('.ppm_icon_6', { y: -3, duration: .6, repeat: -1, yoyo: true, ease: 'none' }, '<.1')
        .to('.ppm_icon_7', { y: -3, duration: .6, repeat: -1, yoyo: true, ease: 'none' }, '<.1')


}
// setTimeout(() => {
//     removedAll()
// }, 15000)
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
    e.stopPropagation();
    removedAll()
})

function removedAll() {
    gsap.to('.ppm_container', { opacity: 0, duration: .5, ease: 'none' })
}

