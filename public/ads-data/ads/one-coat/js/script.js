function removedAll() {
  gsap.to(".ppm_container", {
    opacity: 0,
    display: "none",
    duration: 0.5,
    ease: "none",
    onComplete: () => {
      document.querySelector(".ppm_container").remove();
    },
  });
}
document.querySelector(".ppm_container").addEventListener("click", (e) => {
  window.open("https://www.bergerbd.com/product/one-coat-emulsion/", "_blank");
  submitInteraction('landing_clicked',extraData);
});
document
  .querySelector(".ppm_closeBtn_takeover")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    removedAll();
  });

setTimeout(() => {
  removedAll();
}, 9000);

function beginAnimation() {
  var isMobile = window.innerWidth < 768;
  if (isMobile) {
    let dBrushDuration = 0.8;
    gsap
      .timeline()
      .set(".ppm_innerContainer", { display: "block" })
      .set(".ppm_brush", {
        display: "block",
        bottom: "77%",
        left: "25%",
        width: "50%",
      })
      .to(".ppm_brush", {
        bottom: "-20%",
        duration: dBrushDuration,
        ease: "none",
      })
      .to(
        ".ppm_mFull",
        {
          "--pp_clip_5": "100%",
          duration: dBrushDuration,
          ease: "none",
          onComplete: showLogoProductCopyVideo,
        },
        "<"
      )
      .to(".ppm_brush", {
        left: "100%",
        display: "none",
        duration: 0.2,
        ease: "none",
      });
  } else {
    let dBrushDuration = 0.6;
    gsap
      .timeline()
      .set(".ppm_innerContainer", { display: "block" })
      .set(".ppm_brush", {
        display: "block",
        bottom: "50%",
        left: "35%",
        width: "30%",
      })
      .to(".ppm_brush", {
        bottom: "-55%",
        duration: dBrushDuration,
        ease: "none",
      })
      .to(
        ".ppm_dFull",
        {
          "--pp_clip_1": "100%",
          duration: dBrushDuration,
          ease: "none",
          onComplete: () => {
            showLogoProduct();
            showCopyVideo();
          },
        },
        "<"
      )
      .to(".ppm_brush", {
        left: "100%",
        display: "none",
        duration: 0.2,
        ease: "none",
      });
  }
}

function showLogoProductCopyVideo() {
  gsap
    .timeline()
    .fromTo(
      ".ppm_product",
      { opacity: 0, display: "none", y: "100%" },
      { opacity: 1, display: "block", y: "0%", duration: 0.5, ease: "none" }
    )
    .fromTo(
      ".ppm_bergerlogo",
      { opacity: 0, display: "none", y: "-100%" },
      { opacity: 1, display: "block", y: "0%", duration: 0.5, ease: "none" },
      "<.1"
    )
    .fromTo(
      ".ppm_copy",
      { opacity: 0, display: "none", scale: 0.4 },
      {
        opacity: 1,
        display: "block",
        scale: 1,
        duration: 0.5,
        ease: "none",
        onComplete: copyAnimation,
      },
      "<.1"
    )
    .fromTo(
      ".ppm_video_shape",
      { opacity: 0, display: "none", x: "100%" },
      {
        opacity: 1,
        display: "block",
        x: "0%",
        duration: 0.5,
        ease: "none",
        onComplete: playVideo,
      },
      "<.2"
    )
    .fromTo(
      ".ppm_text_1",
      { opacity: 0, display: "none", x: "-100%" },
      { opacity: 1, display: "block", x: "0%", duration: 0.5, ease: "none" }
    )
    .fromTo(
      ".ppm_text_2",
      { opacity: 0, display: "none", x: "-100%" },
      { opacity: 1, display: "block", x: "0%", duration: 0.5, ease: "none" },
      "+=1" // 1 second after previous animation ends
    )
    .fromTo(
      ".ppm_text_3",
      { opacity: 0, display: "none", x: "-100%" },
      { opacity: 1, display: "block", x: "0%", duration: 0.5, ease: "none" },
      "+=2.5" // 1 second after previous animation ends
    );
}

function copyAnimation() {
  gsap.to(".ppm_copy", {
    scale: 1.1,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "none",
  });
}

function showLogoProduct() {
  gsap
    .timeline()
    .fromTo(
      ".ppm_product",
      { opacity: 0, display: "none", y: "100%" },
      { opacity: 1, display: "block", y: "0%", duration: 0.5, ease: "none" }
    )
    .fromTo(
      ".ppm_bergerlogo",
      { opacity: 0, display: "none", scale: 0.4 },
      { opacity: 1, display: "block", scale: 1, duration: 0.5, ease: "none" },
      "<"
    );
}

function showCopyVideo() {
  gsap
    .timeline()
    .fromTo(
      ".ppm_copy",
      { opacity: 0, display: "none", y: "-100%" },
      {
        opacity: 1,
        display: "block",
        y: "0%",
        duration: 0.5,
        ease: "none",
        onComplete: copyAnimation,
      }
    )
    .fromTo(
      ".ppm_video_shape",
      { opacity: 0, display: "none", x: "100%" },
      {
        opacity: 1,
        display: "block",
        x: "0%",
        duration: 0.5,
        ease: "none",
        onComplete: playVideo,
      },
      "<"
    )
    .fromTo(
      ".ppm_text_1",
      { opacity: 0, display: "none", y: "100%" },
      { opacity: 1, display: "block", y: "0%", duration: 0.5, ease: "none" }
    )
    .fromTo(
      ".ppm_text_2",
      { opacity: 0, display: "none", y: "100%" },
      { opacity: 1, display: "block", y: "0%", duration: 0.5, ease: "none" },
      "+=1" // start 1 second after previous animation ends
    )
    .fromTo(
      ".ppm_text_3",
      { opacity: 0, display: "none", y: "100%" },
      { opacity: 1, display: "block", y: "0%", duration: 0.5, ease: "none" },
      "+=2.5" // again, 1 second after previous
    );
}

function playVideo() {
  document.querySelector("#ppm_video").play();
}

beginAnimation();

// video code
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
