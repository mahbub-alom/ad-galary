var bannerInfo = {
  w: 300,
  h: 250,
  f1Tl: null,
  f2Tl: null,
  startX: null,
  startY: null,
  cta: null,
  colorSlider: null,
  timeOutDur: 8,
  colorCount: 1,
};

var d = {
  mouseOver: false,
  touch: false,
  frameSeen: 1,
};

var adArea = document.getElementById("adArea");
var bg_color = document.getElementById("bg_color");

var cta = gsap.to(".cta", {
  delay: 1,
  scale: 0.9,
  repeat: -1,
  yoyo: true,
  // paused: true,
  ease: "elastic.out(1,0.3)",
});

function init() {
  gsap.to("#preloader", 0.1, {
    display: "none",
    onComplete: function () {
      firstFrameAni();
      sliderActivity();
    },
  });

  //   mouseEvents();
  //   adArea.addEventListener("click", ctaFunction);
}

function firstFrameAni() {
  bannerInfo.f1Tl = gsap
    .timeline({
      paused: true,
      onComplete: function () {},
    })
    .to(".color_slider,.arrow", 0.5, { left: -300, opacity: 0 })
    .to(".f2", 0.5, { opacity: 1 }, "-=0.3");
}

function R(max, min) {
  return Math.random() * (max - min) + min;
}

function animItem() {
  document.querySelectorAll(".biscuit-pack").forEach((elem, index) => {
    function animItemInner() {
      gsap.to(elem, {
        scale: R(1.02, 0.97),
        rotation: R(-2, 3),
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: animItemInner,
      });
    }
    animItemInner();
  });
}

function sliderActivity() {
  bannerInfo.colorSlider = $(".color_slider");

  bannerInfo.colorSlider.on("init", function () {
    document
      .querySelector(".slick-list")
      .addEventListener("click", function (e) {
        e.stopPropagation();
        // ctaFunction();
        startEvent("Click_Frame_" + d.frameSeen);
        // startedFunction();
      });

    document.querySelectorAll(".slick-arrow").forEach((current) => {
      current.addEventListener("click", function (e) {
        e.stopPropagation();
        if ($(this).hasClass("slick-next")) {
          startEvent("Button_Right");
          d.dir = "right";
        }
        if ($(this).hasClass("slick-prev")) {
          startEvent("Button_Left");
          d.dir = "left";
        }
      });
    });
  });

  // On afterchange event
  bannerInfo.colorSlider.on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      bannerInfo.colorCount++;
      console.log(bannerInfo.colorCount);

      bannerInfo.currentColor = $(".slick-current").attr("data-color");
      bannerInfo.currentColorCode = $(".slick-current").attr("data-colorcode");
      console.log(bannerInfo.currentColor);
      console.log(bannerInfo.currentColorCode);
      console.log($(".slick-current"));

      gsap.to(bg_color, 0.1, {
        backgroundColor: bannerInfo.currentColorCode,
        opacity: 0.6,
      });

      //d.frameSeen = parseFloat($('.slick-current').attr('data-count'));
      //d.seenSlide[0].slide = true; //set no 1 slide seen true
      //d.seenSlide[currentSlide].slide = true; //set slide seen true

      //startEvent("Seen_Frame_" + d.frameSeen);

      //for fiinish
      // let count = 0;
      // d.seenSlide.forEach(el => {
      //     if(el.slide === true) {
      //         count++;
      //     }

      //     if(count === d.amm) {
      //         finishedFunction();
      //     }
      // });

      if (bannerInfo.colorCount == 5) {
        setTimeout(() => {
          bannerInfo.f1Tl.play();

          gsap.set(".drag_icon", { display: "none" });
        }, 1500);
      }
    }
  );

  // On swipe event
  bannerInfo.colorSlider.on("swipe", function (event, slick, direction) {
    gsap.set(".drag_icon", { display: "none" });
    // startedFunction();
    d.dir = direction;
    // if (direction == "left") {
    //   startEvent("Swipe_Left");
    // }
    // if (direction == "right") {
    //   startEvent("Swipe_Right");
    // }
  });

  bannerInfo.colorSlider.slick({
    draggable: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "110px",
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
  });
}

function mouseEvents() {
  //touch
  adArea.addEventListener("touchstart", function () {
    if (!d.mouseOver && !d.touch) {
      d.touch = true;
      //   startEvent("Touch");
    }
  });

  //mouse over
  adArea.addEventListener("mouseover", function () {
    if (!d.mouseOver && !d.touch) {
      d.mouseOver = true;
      //   startEvent("Mouse_Over");
    }
  });
}

function loadImages() {
  initLoadImages.forEach(function (item, index) {
    var newImg = new Image();
    newImg.onload = function () {
      item.src = this.src;
      imgLoaded++;
      if (imgLoaded == initLoadImages.length) init();
    };
    newImg.src = item;
  });
}

function initLoad() {
  loadImages();
}

if (window.addEventListener) {
  window.addEventListener("load", initLoad(), false);
} else if (window.attachEvent) {
  window.attachEvent("onload", initLoad());
}
