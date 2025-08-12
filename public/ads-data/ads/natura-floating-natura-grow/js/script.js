
document.querySelector('.ppm_text_1').addEventListener('click', (e) => {
  e.stopPropagation();
  animateFloatingElements()

})
document.querySelector('.ppm_product').addEventListener('click', (e) => {
  e.stopPropagation();
  animateFloatingElements()

})

document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})


function beginningAnimation() {
  // gsap.set(['.ppm_cementBag','.ppm_breakingGif'],{display:'block'})
  gsap.timeline()
    .fromTo('.ppm_product', { display: 'none', opacity: 0, scale: 0.1 }, { display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)" })
    .fromTo('.ppm_text_1', { display: 'none', opacity: 0, scale: .8, y: '300px' }, {
      display: 'block', opacity: 1, scale: 1, ease: "none", y: 0, onComplete: () => {
        gsap.to('.ppm_text_1', { y: '-5px', delay: .2, repeat: -1, yoyo: true, ease: 'none' })
      }
    }, '>')
  // .fromTo('.ppm_video_shape', { display: 'none', opacity: 0, y: 150 }, { display: 'block', opacity: 1, y: 0, ease: "none" }, '<')

}

function animateFloatingElements() {
  gsap.set('.ppm_flying_elms', { display: 'block' })
  gsap.timeline()
    .to(['.ppm_text_1', '.ppm_product'], { duration: .5, opacity: 0, scale: 0, display: 'none' })
    .to('.ppm_product2', { duration: .5, opacity: 1, scale: 1, display: 'block' }, '>-.2')
    .to('.ppm_product2', {
      filter: 'blur(3px)',
      duration: 0.5 // adjust duration as needed
    }, '>2.5')
    .fromTo('.ppm_video_shape', { display: 'none', opacity: 0, x: '100%' }, {
      display: 'block', opacity: 1, x: '-50%', ease: "none", onComplete: () => {
        gsap.to('.ppm_flying_elms', { delay: 3.5, opacity: 0, display: 'none' })
      }
    }, '<')

  const elements = Array.from(document.querySelectorAll('.singleElm')).map(elm => '.' + Array.from(elm.classList).find(c => c.startsWith('ppm_flying_elm')));

  elements.forEach((elm, i) => {
    // Set initial position at bottom with narrow spread
    gsap.set(elm, {
      x: gsap.utils.random(-10, 10),
      y: 0,
      rotation: gsap.utils.random(-10, 10),
      scale: gsap.utils.random(0.6, 0.8),
      opacity: 0
    });

    // Spray upward animation with wider spread at top
    gsap.to(elm, {
      duration: gsap.utils.random(1.8, 2.5),
      x: `+=${gsap.utils.random(-300, 300)}`,
      y: gsap.utils.random(-350, -550),
      rotation: gsap.utils.random(-60, 60),
      scale: gsap.utils.random(1, 1.3),
      opacity: 1,
      ease: "power1.out",
      delay: i * 0.1,
      repeat: 5,
      onRepeat: () => {
        // Reset to bottom position with narrow spread
        gsap.set(elm, {
          x: gsap.utils.random(-20, 20),
          y: 0,
          rotation: gsap.utils.random(-20, 20),
          scale: gsap.utils.random(0.6, 0.8),
          opacity: 0
        });
      }
    });
  });
}



document.querySelector('.ppm_container').addEventListener('click', (e) => {
  window.open('https://www.facebook.com/NaturaCareLtd')
})

beginningAnimation()

var player = document.querySelector("#ppm_video-player");
var video = player.querySelector("#ppm_video");
var sound = player.querySelector("#ppm_sound");

var volumeUp = `<i class="material-icons">volume_up</i>`;
var volumeOff = `<i class="material-icons">volume_off</i>`;


function toggleSound(e) {
  e.stopPropagation();
  var soundIcon = video.muted ? volumeUp : volumeOff;
  sound.innerHTML = soundIcon;

  if (video.muted) video.muted = false;
  else video.muted = true;
}

sound.addEventListener("click", toggleSound);