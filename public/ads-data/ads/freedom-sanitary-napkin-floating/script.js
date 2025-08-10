let remoteClicked = false;
// document.querySelector('.ppm_centerTap').addEventListener('click',(e)=>{if(!remoteClicked){e.stopPropagation();remoteClick();}})
// document.querySelector('.ppm_box_splash').addEventListener('click',(e)=>{if(!remoteClicked){e.stopPropagation();remoteClick();}})

// function remoteClick() {
//   remoteClicked = true;
//   gsap.timeline()
//     .set('.ppm_splash_gif', { display: 'block' })
//     .set(['.ppm_mango', '.ppm_berry', '.ppm_orange','.ppm_tap_hand'], { display: 'none' }, '<')
//     .fromTo('.video-wrapper', { rotateX: 180, opacity: 0, display: "none" }, { rotateX: 0, opacity: 1, display: "block", onComplete: () => { document.querySelector('#ppm_video').play(); } }, '>2')
//     .set('.ppm_box_splash', { display: 'none' }, '>-.3')
//     .to(['.ppm_centerTap'], { opacity: 0, display: "none" },'<')
// }

document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})


function beginningAnimation() {
  // gsap.set(['.ppm_cementBag','.ppm_breakingGif'],{display:'block'})
  gsap.timeline()
    .fromTo('.ppm_product', { display: 'none', opacity: 0, scale: 0.1 }, { display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)" })
    .fromTo('.ppm_text_2', { display: 'none', opacity: 0, scale: 0.3 }, { display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)" }, '>')
    .fromTo('.ppm_text_3', { display: 'none', opacity: 0, rotateY: 100 }, {
      display: 'block', opacity: 1, scale: 1, rotateY: 0, ease: "none", onComplete: () => {
        gsap.timeline()
          .to('.ppm_text_2', { scale: 1.05, y: 5, repeat: -1, yoyo: true })
          .to('.ppm_text_3', { y: 5, repeat: -1, yoyo: true }, '<')
      }
    }, '>')
    .fromTo('.ppm_text_1', { display: 'none', opacity: 0, scale: .8 }, { display: 'block', opacity: 1, scale: 1, ease: "none" }, '>')
    .fromTo('.ppm_video_shape', { display: 'none', opacity: 0, y: 150 }, { display: 'block', opacity: 1, y: 0, ease: "none" }, '<')

}

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