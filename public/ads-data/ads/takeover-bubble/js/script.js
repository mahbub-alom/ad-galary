let isMobile = window.innerWidth < 601;

// Function to create bubbles
function createBubbles() {
  const bubblesContainer = document.getElementById("ppm_bubbles_container");
  bubblesContainer.innerHTML = ""; // Clear existing bubbles

  const numBubbles = isMobile ? 100 : 500;

  for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("ppm_bubble");

    // Random size between 5px and 30px for mobile, 5px and 20px for desktop
    const size = isMobile
      ? Math.floor(Math.random() * 25 + 5)
      : Math.floor(Math.random() * 15 + 5);

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random horizontal position
    const posLeft = Math.floor(Math.random() * 100);
    bubble.style.left = `${posLeft}%`;

    // Random animation duration (5-45 seconds)
    const speed = Math.random() * 10 + 3;
    bubble.style.animationDuration = `${speed}s`;
    bubble.style.webkitAnimationDuration = `${speed}s`;

    bubblesContainer.appendChild(bubble);
  }

  gsap.set(".ppm_bubbles_container", { display: "block" });

  // Set a timeout to hide the bubbles container after the animations are done
  setTimeout(() => {
    gsap.to(".ppm_bubbles_container", {
      opacity: 0,
      duration: 2,
      display: "none",
    });
  }, 2000); // 6 seconds should be enough for most bubbles to start disappearing
}

// No need for the animateBubbles function since we're using CSS animations
// Function to animate bubbles
function animateBubbles() {
  // This is now empty as we're using CSS animations
  return gsap.timeline(); // Return an empty timeline for compatibility
}

// Create a new timeline for the repeating part
if (isMobile) {
  gsap
    .timeline()
    .fromTo(".ppm_container", { display: "none" }, { display: "flex" })
    .fromTo(".ppm_container_inner", { opacity: 0 }, { opacity: 1 })
    .set(".box-body", {
      height: "100px",
      width: "100px",
    })
    .set(".ppm_ball_1", {
      x: "20%",
      y: "-50%",
      display: "block",
      scale: 0.5,
      duration: 0.2,
      ease: "none",
    })
    .set(".ppm_ball_nemo", {
      x: "20%",
      y: "-50%",
      display: "block",
      scale: 0.2,
      rotationY: 180,
      opacity: 0,
      duration: 0.2,
      ease: "none",
    })
    .to(".ppm_ball_1", {
      x: "-10%",
      y: "0%",
      duration: 1,
      ease: "none",
      rotation: 720,
    })
    .to(
      ".ppm_ball_nemo",
      {
        x: "-10%",
        y: "0%",
        duration: 1,
        ease: "none",
        rotation: 720,
      },
      "<"
    )
    .to(".ppm_ball_1", {
      x: "-50%",
      y: "-50%",
      duration: 0.3,
      scale: 0.7,
      ease: "none",
    })
    .to(".ppm_ball_1", {
      delay: 1, // Stay for 1 second before the next animation
    })
    .to(
      ".ppm_ball_nemo",
      {
        x: "-50%",
        y: "-50%",
        duration: 0.3,
        scale: 2,
        ease: "none",
      },
      "<"
    )
    .to(".ppm_ball_1", {
      duration: 0.3,
      ease: "none",
      rotationY: 180,
      opacity: 0,
    })
    .to(
      ".ppm_ball_nemo",
      {
        duration: 0.3,
        ease: "none",
        rotationY: 360,
        opacity: 1,
      },
      "<"
    )
    .add(() => {
      createBubbles();
    })
    .to(
      ".ppm_ball_nemo",
      {
        x: "-50%",
        y: "-50%",
        duration: 0.5,
        scale: 2,
        ease: "elastic.out(1.5,0.5)",
      },
      ">0.4"
    )
    .to(
      ".ppm_ball_nemo",
      { opacity: 0, display: "none", scale: 0.5, duration: 0.5, ease: "none" },
      ">0.5"
    )
    .fromTo(
      ".gift-box",
      { display: "none", opacity: 0, scale: 0.3 },
      {
        display: "block",
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: "elastic.out(1,0.5)",
      },
      "<.2"
    )
    .add(() => {
      // Immediately open the gift box and animate products
      document.querySelector(".box-body").classList.add("active");

      // Trigger confetti when box opens
      launchConfetti();

      // Small delay before products blast out
      setTimeout(() => {
        // Animate products coming out of the box
        animateProducts();
      }, 300);
    });
} else {
  gsap
    .timeline()
    .fromTo(".ppm_container", { display: "none" }, { display: "flex" })
    .fromTo(".ppm_container_inner", { opacity: 0 }, { opacity: 1 })
    .set(".ppm_ball_1", {
      x: "100%",
      y: "-50%",
      display: "block",
      scale: 0.5,
      duration: 0.2,
      ease: "none",
      rotationY: 0,
    })
    .set(".ppm_ball_nemo", {
      x: "100%",
      y: "-50%",
      display: "block",
      scale: 0.5,
      rotationY: 180,
      opacity: 0,
      duration: 0.2,
      ease: "none",
    })
    .to(".ppm_ball_1", {
      x: "30%",
      y: "0%",
      duration: 1,
      ease: "none",
      rotation: 720,
    })
    .to(
      ".ppm_ball_nemo",
      {
        x: "30%",
        y: "0%",
        duration: 1,
        ease: "none",
        rotation: 720,
        opacity: 0,
      },
      "<"
    )
    .to(".ppm_ball_1", {
      x: "-50%",
      y: "-50%",
      duration: 0.3,
      scale: 0.7,
      ease: "none",
    })
    .to(".ppm_ball_1", {
      delay: 1, // Stay for 1 second before the next animation
    })
    .to(
      ".ppm_ball_nemo",
      {
        x: "-50%",
        y: "-50%",
        duration: 0.3,
        scale: 0.7,
        ease: "none",
      },
      "<"
    )
    .to(".ppm_ball_1", {
      duration: 0.3,
      ease: "none",
      rotationY: 180,
      opacity: 0,
    })
    .to(
      ".ppm_ball_nemo",
      {
        duration: 0.3,
        ease: "none",
        rotationY: 360,
        opacity: 1,
      },
      "<"
    )
    .add(() => {
      createBubbles();
    })
    .to(
      ".ppm_ball_nemo",
      {
        x: "-50%",
        y: "-50%",
        duration: 0.5,
        scale: 1,
        ease: "elastic.out(1.5,0.5)",
        // onComplete: () => {
        //   launchConfetti();
        // },
      },
      ">0.4"
    )
    .to(
      ".ppm_ball_nemo",
      { opacity: 0, display: "none", scale: 0.5, duration: 0.5, ease: "none" },
      ">0.5"
    )
    .fromTo(
      ".gift-box",
      { display: "none", opacity: 0, scale: 0.3 },
      {
        display: "block",
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: "elastic.out(1,0.5)",
      },
      "<.2"
    )
    .add(() => {
      // Immediately open the gift box and animate products
      document.querySelector(".box-body").classList.add("active");

      // Trigger confetti when box opens
      launchConfetti();

      // Small delay before products blast out
      setTimeout(() => {
        // Animate products coming out of the box
        animateProducts();
      }, 300);
    })
    .add(hideEverything, "+=8");
}

document
  .querySelector(".ppm_closeBtn_takeover")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    gsap
      .timeline()
      .to(".ppm_container", { display: "none", opacity: 0, duration: 0.3 });
  });
function hideEverything() {
  gsap
    .timeline()
    .to(".ppm_container", { display: "none", opacity: 0, duration: 0.3 });
}

document.querySelector(".ppm_container").addEventListener("click", () => {
  window.open("https://www.coca-cola.com/bd/en", "_blank");
});

// Add a click event to the gift box to open it
document.addEventListener("DOMContentLoaded", function () {
  const giftBox = document.querySelector(".box-body");
  if (giftBox) {
    giftBox.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent the container click from triggering
      if (!this.classList.contains("active")) {
        this.classList.add("active");

        // Trigger confetti when box opens
        launchConfetti();

        // Animate products coming out of the box
        animateProducts();
      }
    });
  }
});

// Function to animate products coming out of the box
function animateProducts() {
  const products = document.querySelectorAll(".product-item");

  // Apply classes to products for easier targeting
  products[0].classList.add("ppm_gift1"); // Cola
  products[1].classList.add("ppm_gift2"); // Fridge
  products[2].classList.add("ppm_gift3"); // TV
  products[3].classList.add("ppm_gift4"); // Mobile
  products[4].classList.add("ppm_copy"); // Copy

  // Set initial state for all products
  gsap.set(products, {
    scale: 0,
    opacity: 0,
    x: 0,
    y: 0,
  });

  // Create the main timeline for the explosion
  const tl = gsap.timeline({
    delay: 0.1,
    onComplete: () => {
      // Create floating animation for each product with slightly different parameters
      products.forEach((product, index) => {
        gsap.to(product, {
          y: isMobile ? `-=${10}%` : `-=${15}%`, // Reduced floating height variation
          duration: 1.2,
          repeat: 3,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
  });

  tl.to(
    ".gift-box",
    {
      scale: isMobile ? 1.5 : 1.3,
      duration: 0.2,
      ease: "back.out(1.2)",
      y: isMobile ? "10%" : "0%",
    },
    0
  );

  // Add all products to the timeline simultaneously with initial scale up
  tl.to(
    ".ppm_gift1",
    {
      x: isMobile ? "439%" : "439%",
      y: isMobile ? "-238%" : "-238%", // Reduced height
      scale: isMobile ? 1.7 : 2,
      duration: 0.2,
      opacity: 1,
      ease: "back.out(1.2)",
    },
    0
  )
    .to(
      ".ppm_gift2",
      {
        x: isMobile ? "471%" : "471%",
        y: isMobile ? "21%" : "21%", // Reduced height
        scale: isMobile ? 1.5 : 1.7,
        duration: 0.5,
        opacity: 1,
        ease: "back.out(1.2)",
      },
      0
    )
    .to(
      ".ppm_gift3",
      {
        x: isMobile ? "-423%" : "-423%",
        y: isMobile ? "-300%" : "-300%", // Reduced height
        scale: isMobile ? 2 : 2.3,
        duration: 2,
        opacity: 1,
        ease: "back.out(1.2)",
      },
      0
    )
    .to(
      ".ppm_gift4",
      {
        x: isMobile ? "-493%" : "-493%",
        y: isMobile ? "-38%" : "-38%", // Reduced height
        scale: isMobile ? 1.2 : 1.5,
        duration: 0.5,
        opacity: 1,
        ease: "back.out(1.2)",
      },
      0
    )
    .to(
      ".ppm_copy",
      {
        x: isMobile ? "0%" : "0%",
        y: isMobile ? "-822%" : "-822%", // Reduced height
        scale: isMobile ? 4 : 5,
        duration: 0.5,
        opacity: 1,
        ease: "back.out(1.2)",
        rotation: 30,
      },
      0
    );

  // Add slight rotation to make the explosion more dynamic
  products.forEach((product) => {
    tl.to(
      product,
      {
        rotation: -15 + Math.random() * 30, // Random rotation between -15 and 15 degrees
        duration: 0.5,
      },
      0
    );
  });

  tl.to(".ppm_copy", {
    scale: isMobile ? 4.5 : 5.5, // Slightly increased scale
    duration: 1, // Duration for smooth effect
    ease: "power1.inOut",
    yoyo: true, // Creates the scale up & down effect
    repeat: 3, // Infinite animation
  });

  return tl;
}
