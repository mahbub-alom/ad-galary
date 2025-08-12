const isMobile = window.innerWidth < 768;

// Change image sources for mobile devices
if (isMobile) {
  document.querySelector(".ppf_surrounding_image_left").src =
    "assets/mobile_1.png";
  document.querySelector(".ppf_surrounding_image_right").src =
    "assets/mobile_2.png";
}

gsap
  .timeline()

  .set(".ppf_text_image", {
    opacity: 0,
  })

  .set(".ppf_surrounding_images", {
    display: "block",
  })

  .fromTo(
    ".ppf_surrounding_image_left",
    {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.inOut",
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: function () {
        // Add floating animation after initial appearance
        gsap.to(".ppf_surrounding_image_left", {
          y: "+=10",
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
    }
  )

  .fromTo(
    ".ppf_surrounding_image_right",
    {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power2.inOut",
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: function () {
        // Add floating animation after initial appearance
        gsap.to(".ppf_surrounding_image_right", {
          y: "+=15",
          scale: 1.05,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
    },
    ">-1"
  )

  .fromTo(
    ".ppf_surrounding_image_up",
    {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.inOut",
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: function () {
        // Add floating animation after initial appearance
        gsap.to(".ppf_surrounding_image_up", {
          y: "-=12",
          scale: 1.08,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
    },
    ">-1"
  )

  .fromTo(
    ".ppf_surrounding_image_bottom",
    {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.inOut",
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: function () {
        // Add floating animation after initial appearance
        gsap.to(".ppf_surrounding_image_bottom", {
          y: "+=8",
          scale: 1.12,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
    },
    ">-1"
  )

  .fromTo(
    ".ppf_bg",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut",
    },
    ">-1"
  )

  .fromTo(
    ".ppf_product_image",
    {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power2.inOut",
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    }
  )

  .to(".ppf_product_image", {
    x: isMobile ? -0 : "-250px",
    y: isMobile ? "-120px" : 0,
    ease: "power2.inOut",
  })

  .to(".ppf_text_image", {
    opacity: 1,
    ease: "power2.inOut",
  })

  .fromTo(
    ".ppf_logo",
    {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.inOut",
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .add(hideEverything);


document
    .querySelector(".ppm_closeBtn_takeover")
    .addEventListener("click", () => {
      gsap
        .timeline()
        .to(".ppf_container", { display: "none", opacity: 0, duration: 0.3 });
    });
  function hideEverything() {
    gsap
      .timeline()
      .to(".ppf_container", { display: "none", opacity: 0, duration: 1, delay: 5 });
  }

  document.querySelector(".ppf_container").addEventListener("click", () => {
    window.open("https://www.bergerbd.com/product/ecocoat/", "_blank");
  });