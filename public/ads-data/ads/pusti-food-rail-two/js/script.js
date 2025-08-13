var ppm_initialClick = false;
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})
document.querySelector('.ppm_container').addEventListener('click', (e) => {
  let landingUrl = 'http://pusti.com.bd/';
  console.log('Landing Url: ', landingUrl)
  window.open(landingUrl);
})

gsap.to('.ppm_selector',{x:5,duration:0.5,ease:'none',repeat:-1,yoyo:true})

function beginningAnimation() {
  gsap.timeline({delay:1})
    .set('.ppm_container', { display: 'block' })
    .fromTo('.ppm_mobile',{opacity:0,x:'100%',display:'none'},{opacity:1,duration:1,x:'0%',display:'block'})
    .fromTo('.ppm_troly',{opacity:0,x:'-100%',display:'none'},{opacity:1,duration:1,x:'0%',display:'block'},'<')
    .add(productRailAnimation,'>.2')
    .fromTo('.ppm_cta',{opacity:0,display:'none'},{opacity:1,duration:.5,display:'block',onComplete:ctaAnimation},'<')

}
beginningAnimation();
logoAnimation();

function productRailAnimation() {
  gsap.set(".ppm_product_track", {x: "100%", display:'flex'});
  gsap.to(".ppm_product_track", {x: "-450%", duration: 28, repeat: -1, ease: "none"});

  gsap.to(".ppm_product_track img", {
    scale: 1.1,
    duration: 0.6,
    ease: "none",
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.3,
      repeat: -1,
      yoyo: true
    }
  });
}

function logoAnimation() {
  gsap.fromTo('.ppm_logo', {rotationY: 0, opacity: 0, scale: 0.5}, {rotationY: 360, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", repeat: -1, repeatDelay: 2}, '<.2');
}

function ctaAnimation() {
  gsap.to('.ppm_cta', {scale:1.05,duration:.6,ease:'none',repeat:-1,yoyo:true});
}


