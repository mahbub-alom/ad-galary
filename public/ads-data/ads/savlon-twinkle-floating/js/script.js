let remoteClicked = false;


document.querySelector('.ppm_closeBtn_takeover').addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.ppm_container').remove();
  gsap.set('.ppm_closeBtn_takeover', { display: 'none' })
})


gsap.timeline()
  .set('.ppm_containerFirst', { opacity: 1, display: 'block' })
  .fromTo('.ppm_product1', { opacity: 0, display: 'none',x:'-100px',scale:.9 }, { opacity: 1, display: 'block',x:0,scale:1,duration:.6 }, '>')
  .fromTo('.ppm_product2', { opacity: 0, display: 'none',x:'100px',scale:.9 }, { opacity: 1, display: 'block',x:0,scale:1,duration:.6}, '<')
  .to(['.ppm_product1','.ppm_product2'], { scale:1.1 }, '>')
  .to(['.ppm_product1','.ppm_product2'], { scale:1,onComplete:beginningAnimation }, '>')

function beginningAnimation() {
  // gsap.set(['.ppm_cementBag','.ppm_breakingGif'],{display:'block'})
  gsap.timeline()
    .to(['.ppm_containerFirst'], { opacity: 0, display: 'none' })
    .fromTo('.ppm_product_mini1', { display: 'none', opacity: 0, scale: 0.1,y:'300px',rotate:-360 }, { display: 'block', opacity: 1, scale: 1,y:0,rotate:0, ease: "none" },'<.2')
    .fromTo('.ppm_product_mini2', { display: 'none', opacity: 0, scale: 0.1,y:'300px',rotate:360 }, { display: 'block', opacity: 1, scale: 1,y:0,rotate:0, ease: "none" },'>-.1')
    // .fromTo('.ppm_text_2', { display: 'none', opacity: 0, scale: 0.3 }, { display: 'block', opacity: 1, scale: 1, ease: "back.out(1.7)" }, '>')
    .fromTo('.ppm_text_1', { display: 'none', opacity: 0, scale: .8 }, { display: 'block', opacity: 1, scale: 1, ease: "none" }, '>')
    .fromTo('.ppm_text_2', { display: 'none', opacity: 0, rotateY: 100 }, {
      display: 'block', opacity: 1, scale: 1, rotateY: 0, ease: "none", onComplete: () => {
        gsap.timeline()
          .to('.ppm_text_1', { scale: 1.03, y: 4, repeat: -1, yoyo: true })
          .to('.ppm_text_2', { y: 4, repeat: -1, yoyo: true }, '<')
      }
    }, '>')
    .fromTo('.ppm_video_shape', { display: 'none', opacity: 0, x: '100%' }, { display: 'block', opacity: 1, x: '-50%', ease: "none", onComplete: () => {
      gsap.to('#ppm_video', { display: 'block', opacity: 1 })
    } }, '>')

}


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