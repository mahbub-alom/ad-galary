let lets = document.querySelector(".lets");
let impo = document.querySelector(".impo");

// gsap
var tl = gsap.timeline({ defaults: { duration: 1 } });
var ti = gsap.timeline({ defaults: { duration: 1 } });
var th = gsap.timeline({ defaults: { duration: 1 } });
th.fromTo(".lets", {scale: 0.9 }, { scale: 1, yoyo: true, repeat: -1 }, "-=1");
ti.fromTo(".impo", {scale: 0.9 }, { scale: 1, yoyo: true, repeat: -1 ,delay:.5});

lets.addEventListener("click", function () {
  console.log("clicked");
  tl.to(".slide", { y: "-100%" });
  tl.to(".pp_try", { display: "block", x: "0%" });
  tl.from(".product", { y: "-100%", ease: "bounce" }, "-=1");
  tl.from(".godrejexpert", { scale: 0, ease: "bounce" });
  tl.to(".slide_two", { display: "block", x: "0%" }, "=1");
  tl.from(".model", { x: "100%", ease: "power2" }, "-=1");
  tl.fromTo(
    ".stayfivemin",
    { scale: 0.9 },
    { scale: 1, yoyo: true, repeat: 10 },
    "-=1"
  );
});
impo.addEventListener("click", function () {

  console.log("clicked");
  tl.to(".slide", { y: "100%" });
  tl.to(".impossible", { display: "block", x: "0%" });
  tl.from(".product", { y: "-100%", ease: "bounce" }, "-=1");
  tl.from(".ifgodrejimposs", { scale: 0, ease: "bounce" });
  tl.to(".slide_four", { display: "block", x: "0%" }, "=1");
  tl.from(".model", { x: "100%", ease: "power2" }, "-=1");
  tl.fromTo(
    ".stayfivemin",
    { scale: 0.9 },
    { scale: 1, yoyo: true, repeat: 10 },
    "-=1"
  );
});
