const isMobile = window.matchMedia("(max-width: 768px)").matches;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".ppm_tiles_container");
  const tiles = document.querySelectorAll(".ppm_tiles_image");

  // Mouse move effect
  // document.addEventListener("mousemove", (e) => {
  //   const mouseX = e.clientX / window.innerWidth - 0.5;
  //   const mouseY = e.clientY / window.innerHeight - 0.5;

  //   gsap.to(container, {
  //     duration: 1,
  //     rotateX: 45 + mouseY * 10,
  //     rotateZ: -45 + mouseX * 10,
  //     ease: "power1.out",
  //   });
  // });

  // Initialize tiles with GSAP
  tiles.forEach((tile, index) => {
    gsap.to(tile, {
      duration: 3.4,
      opacity: 1,
      x: isMobile? -150 : 0,
      delay: index * 0.06,
      ease: "sin.in",
    });
  });

  gsap.fromTo(
    ".ppm_text",
    {
      opacity: 0,
      x: isMobile? '-150%' :  "150%",
    },
    {
      duration: 1.8,
      opacity: 1,
      x: isMobile ? '-15%' : "0%",
      ease: "back.out(1.2)",
    }
  );
});

// Set tile index for other animations
document.querySelectorAll(".ppm_tiles_image").forEach((tile, index) => {
  tile.style.setProperty("--tile-index", index);
});
