document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const model = document.querySelector(".model");
  const slogan = document.querySelector(".slogan");
  const taka100 = document.querySelector(".taka-100");
  const taka500 = document.querySelector(".taka-500");
  const tagline = document.querySelector(".tagline");
  const taglineContainer = document.querySelector(".tagline-container");
  const scrollingImages = document.querySelector(".scrolling-images");
  const scrollingImagesTwo = document.querySelector(".scrolling-images-two");
  const ctaElement = document.querySelector(".cta");

  // Add click event to CTA
  if (ctaElement) {
    ctaElement.addEventListener("click", () => {
      window.open("https://www.nagad.com.bd", "_blank");
    });
  }

  // Create a GSAP timeline
  const mainTimeline = gsap.timeline();

  // 1. Model and Slogan animation first
  mainTimeline
    // Model comes from right
    .to(model, {
      duration: 1,
      x: 0,
      ease: "power2.out",
    })
    // Slogan comes from left to center
    .to(
      slogan,
      {
        duration: 1,
        x: 0,
        ease: "power2.out",
      },
      "-=0.5"
    ) // Start slightly before model animation completes
    // Slogan scale animation (infinite)
    .to(slogan, {
      duration: 1,
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })
    // 2. Start Taka animations after model and slogan
    .add(animateTaka, "<-0.5")

    // 3. Tagline animation
    .to(
      tagline,
      {
        duration: 1,
        y: 0,
        ease: "power2.out",
        onComplete: () => {
          // Start tagline container scale animation after tagline appears
          gsap.to(taglineContainer, {
            duration: 1.5,
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        },
      },
      "-=0.5"
    ); // Start slightly before slogan animation completes

  // Taka animations function with minimal delays
  function animateTaka() {
    const takaTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    // 100 Taka animation - faster transitions and shorter delays
    takaTimeline
      .to(taka100, {
        duration: 1, // Reduced from 0.5 to 0.3
        y: 0,
        opacity: 1,
        ease: "power2.out",
      })
      .to(
        taka100,
        {
          duration: 1, // Reduced display time
          y: 0,
          opacity: 1,
          ease: "none",
        },
        "+=0.2"
      ) // Minimal delay
      .to(taka100, {
        duration: 1,
        y: "10vh",
        opacity: 0,
        ease: "power2.in",
      })

      // 500 Taka animation - immediately after 100 Taka
      .to(
        taka500,
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power2.out",
        },
        "-=0.1"
      ) // Overlap with previous animation
      .to(
        taka500,
        {
          duration: 1, // Reduced display time
          y: 0,
          opacity: 1,
          ease: "none",
        },
        "+=0.2"
      ) // Minimal delay
      .to(taka500, {
        duration: 1,
        y: "10vh",
        opacity: 0,
        ease: "power2.in",
      });

    return takaTimeline;
  }

  // Calculate the width of three images plus margins
  const scrollImgs = document.querySelectorAll(".scroll-img");
  const imgWidth = scrollImgs[0].offsetWidth + 10; // width + margin
  const totalWidth = imgWidth * scrollImgs.length;

  // Scrolling images animation (infinite)
  function animateScrollingImages() {
    // Clone the images to create a seamless loop
    const clonedImages = Array.from(scrollImgs).map((img) =>
      img.cloneNode(true)
    );
    clonedImages.forEach((clone) => scrollingImages.appendChild(clone));

    // Create infinite scrolling animation
    gsap.to(scrollingImages, {
      duration: 15, // Increased duration for smoother movement
      x: -totalWidth, // Move by the width of the original set of images
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(scrollingImages, { x: 0 });
      },
    });
  }

  // Start the scrolling animation
  animateScrollingImages();
});
