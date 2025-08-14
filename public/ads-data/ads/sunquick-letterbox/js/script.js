// createTimer();
function getEnvelopePath() {
  return window.innerWidth >= 601 ? "#envelopePathDesktop" : "#envelopePathMobile";
}
document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  cleanEverything()
})
function cleanEverything() {
  gsap.to('.ppm_container', {
    opacity: 0, duration: .5, display: 'none', onComplete: () => {
      document.querySelector('.ppm_container').remove();
    }
  })
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
}
document.querySelector('.ppm_container').addEventListener('click', (e) => {
  console.log('clicked landing')
  // window.open('https://www.pusti.com.bd/')
})
let sentBtnClicked = false;
function beginningAnimation() {
  gsap.timeline()
    .set('.ppm_container', { display: 'block' })
}

function popupAnimation() {
  gsap.to('.ppm_enjoy', { scale: 1.1, duration: 1, ease: 'elastic.out(1,0.3)', repeat: -1, yoyo: true })
}
function bgAnimation() {
  gsap.to('.ppm_bg', { scale: 1.3, duration: 10, ease: 'none', x: '-20%', y: '-5%', repeat: -1, yoyo: true })
}

gsap.to('.ppm_cta', { scale: 1.1, duration: 1, ease: 'none', repeat: -1, yoyo: true })

gsap.registerPlugin(MotionPathPlugin);

function envelopeAnimation() {
  gsap.to(".ppm_envolope", {
    duration: 4,
    // repeat: 1,
    ease: "power1.inOut",
    motionPath: {
      path: getEnvelopePath(),
      align: getEnvelopePath(),
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      smoothOrigin: true,
      curviness: 5
    },
    onComplete: sideBoxAnimation
  });
}

function sideBoxAnimation() {
  gsap.timeline()
    .to('.ppm_envolope', { opacity: 0, duration: .5, scale: 4, display: 'none' })
    .fromTo('.ppm_letter_container', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .5 }, '<')
    .to('.ppm_letter_lid', { rotateX: 180, duration: .5, onComplete: animateFloatingElements })
    .set('.ppm_letter_lid', { zIndex: 8 })
    .to('.ppm_letter_card', { y: '-100%', duration: .5, onComplete: sideContainerEventListeners })
    .set('.ppm_letter_card', { zIndex: 25 })
    .to('.ppm_letter_card', { y: '-40%', scale: 1.15, duration: .5, onComplete: letterTextAnimation })
    .fromTo('.ppm_bottle', { display: 'none', opacity: 0, scale: 0, x: '300' }, { display: 'block', x: '0', opacity: 1, scale: 1, duration: .5, ease: 'power1.out' }, '>')
    .to('.ppm_flying_elms', { opacity: 0, duration: .5, display: 'none', delay: 5 })
    .add(cleanEverything)
}
document.querySelector('.ppm_lowerBackground_content').addEventListener('click', () => {
  if (!sentBtnClicked) {
    sentBtnClicked = true;
    movingAnimaton();
  }
})

function sideContainerEventListeners() {
  document.querySelector('.ppm_side_container').addEventListener('click', () => {
    window.open('https://www.facebook.com/SunquickBangladesh/', '_blank')
  })
}

setTimeout(() => {
  if (!sentBtnClicked) {
    sentBtnClicked = true;
    movingAnimaton();
  }
}, 2500);

function movingAnimaton() {
  gsap.timeline()
    .add(envelopeAnimation)
    .to('.ppm_cta', { opacity: 0, duration: 1, y: '100%', display: 'none' }, '<')
    .to(['.ppm_post1', '.ppm_post2', '.ppm_tree'], { opacity: 0, duration: 1, y: '200', display: 'none' }, '>-.5')
}

beginningAnimation()


function letterTextAnimation() {
  gsap.to('.ppm_letter_text', { scale: 1.05, repeat: -1, yoyo: true, duration: 1, ease: 'elastic.out(1,0.3)' })
}

function animateFloatingElements() {
  gsap.set('.ppm_flying_elms', { display: 'block' })

  // gsap.to('.ppm_flying_elms',{delay:4.5,opacity:0,display:'none'})
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

    let animationValue = {
      duration: gsap.utils.random(1.8, 2.5),
      x: `+=${gsap.utils.random(-300, 300)}`,
      y: gsap.utils.random(-350, -650),
      rotation: gsap.utils.random(-60, 60),
      scale: gsap.utils.random(1, 1.3),
      opacity: 1,
      ease: "power1.out",
      delay: i * 0.1,
      repeat: 6,
    }
    if (window.innerWidth < 601) {
      animationValue = {
        duration: gsap.utils.random(1.8, 2.5),
        x: `+=${gsap.utils.random(-300, 300)}`,
        y: gsap.utils.random(-200, -350),
        rotation: gsap.utils.random(-60, 60),
        scale: gsap.utils.random(1, 1.3),
        opacity: 1,
        ease: "power1.out",
        delay: i * 0.1,
        repeat: 6,
      }
    }
    // Spray upward animation with wider spread at top
    gsap.to(elm, {
      ...animationValue,
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

function createTimer() {
  // Create timer element
  const timerElement = document.createElement('div');
  timerElement.style.position = 'fixed';
  timerElement.style.top = '20px';
  timerElement.style.left = '20px';
  timerElement.style.zIndex = '9999';
  timerElement.style.fontSize = '24px';
  timerElement.style.fontWeight = 'bold';
  timerElement.style.color = '#000';
  timerElement.id = 'ppm-timer';
  document.body.appendChild(timerElement);

  // Set initial time (0)
  let timeElapsed = 0;

  // Update timer every second
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;

    // Format time as MM:SS
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeElapsed >= 5 * 60) {
      clearInterval(timerInterval);
    } else {
      timeElapsed++;
    }
  }, 1000);
}

