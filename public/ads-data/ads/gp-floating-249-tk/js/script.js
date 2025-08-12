gsap
  .timeline({
    defaults: {
      duration: 1,
      ease: "power2.inOut",
    },
  })

  // Set up initial state for card flip
  .set(".ppf-offer-image", {
    rotationY: 180, // Start flipped away
    opacity: 0,
    transformPerspective: 1000, // Add perspective for 3D effect
    backfaceVisibility: "hidden", // Hide when flipped
  })

  // Scale down and move to bottom
  .to(".ppf-offer-image", {
    scale: 0.8,
    y: 40,
    duration: 0.8,
  })
  .to(
    ".ppf-offer-image",
    {
      rotationY: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut",
    },
    ">-0.8"
  )
  // Text comes from top
  .fromTo(
    ".ppf-text-image",
    {
      opacity: 0,
      y: "-200px",
    },
    {
      opacity: 1,
      y: "-110px",
    },
    ">-0.8"
  )
  .fromTo(
    ".ppf-cta-image",
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
    },
    ">-0.8"
  );

// Number spinner animation
const numberSpinner = gsap.timeline({
  defaults: {
    duration: 0.3,
    ease: "power1.inOut",
  },
});

// Set all images initially invisible
gsap.set(".ppf-gb-number", { opacity: 0 });

// Add blur class to all numbers except the final one
document.querySelectorAll(".ppf-gb-number:not(:last-child)").forEach((el) => {
  el.classList.add("blur");
});

// Randomize the spinning a bit to make it more realistic
const speedFactor = 0.15; // Controls the speed of spinning
const startDelay = 0.7; // When to start spinning after main animation

// Create the spinning animation sequence
numberSpinner
  .to(".ppf-gb-number:nth-child(1)", { opacity: 1 }, 0)
  .to(".ppf-gb-number:nth-child(1)", { opacity: 0 }, speedFactor * 2)
  .to(".ppf-gb-number:nth-child(2)", { opacity: 1 }, speedFactor * 2)
  .to(".ppf-gb-number:nth-child(2)", { opacity: 0 }, speedFactor * 4)
  .to(".ppf-gb-number:nth-child(3)", { opacity: 1 }, speedFactor * 4)
  .to(".ppf-gb-number:nth-child(3)", { opacity: 0 }, speedFactor * 6)
  .to(".ppf-gb-number:nth-child(4)", { opacity: 1 }, speedFactor * 6)
  .to(".ppf-gb-number:nth-child(4)", { opacity: 0 }, speedFactor * 8)
  .to(".ppf-gb-number:nth-child(5)", { opacity: 1 }, speedFactor * 8)
  .to(".ppf-gb-number:nth-child(5)", { opacity: 0 }, speedFactor * 10)
  .to(".ppf-gb-number:nth-child(6)", { opacity: 1 }, speedFactor * 10)
  .to(".ppf-gb-number:nth-child(6)", { opacity: 0 }, speedFactor * 12)
  // First quick cycle complete, now slow down gradually for multiple spins
  // Second cycle (faster)
  .to(".ppf-gb-number:nth-child(1)", { opacity: 1 }, speedFactor * 12)
  .to(".ppf-gb-number:nth-child(1)", { opacity: 0 }, speedFactor * 13)
  .to(".ppf-gb-number:nth-child(2)", { opacity: 1 }, speedFactor * 13)
  .to(".ppf-gb-number:nth-child(2)", { opacity: 0 }, speedFactor * 14)
  .to(".ppf-gb-number:nth-child(3)", { opacity: 1 }, speedFactor * 14)
  .to(".ppf-gb-number:nth-child(3)", { opacity: 0 }, speedFactor * 15)
  .to(".ppf-gb-number:nth-child(4)", { opacity: 1 }, speedFactor * 15)
  .to(".ppf-gb-number:nth-child(4)", { opacity: 0 }, speedFactor * 16)
  .to(".ppf-gb-number:nth-child(5)", { opacity: 1 }, speedFactor * 16)
  .to(".ppf-gb-number:nth-child(5)", { opacity: 0 }, speedFactor * 17)
  // Third cycle (even slower, ending at 70)
  .to(".ppf-gb-number:nth-child(6)", { opacity: 1 }, speedFactor * 17)
  .to(".ppf-gb-number:nth-child(6)", { opacity: 0 }, speedFactor * 19)
  .to(".ppf-gb-number:nth-child(7)", { opacity: 1 }, speedFactor * 19)
  // Add a slight bounce effect to the final number
  .to(
    ".ppf-gb-number:nth-child(7)",
    { scale: 1.2, duration: 0.2 },
    speedFactor * 21
  )
  .to(
    ".ppf-gb-number:nth-child(7)",
    { scale: 1, duration: 0.2 },
    speedFactor * 22
  );

// Play the spinner animation after the main animation
gsap.timeline().add(numberSpinner, startDelay);
