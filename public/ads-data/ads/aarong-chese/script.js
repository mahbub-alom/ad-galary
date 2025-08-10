window.onload = function () {
  let imageProps = window.getComputedStyle(
    document.querySelector(".featureImg")
  );
  console.log(imageProps.height);

  gsap
    .timeline({
      onComplete: () => {
        gsap.timeline({ repeat: -1 });
      },
    })
    //imagetakeover
    .set(".takeover_bg", { y: imageProps.height })
    .to(".takeover_bg", { display: "block", y: 0, duration: 0.8, ease: "none" })
    .to(".logo", { display: "block", duration: 0.1, ease: "power1.inOut" })
    .to(".purple_bg", { display: "none", duration: 1, x: -230 })
    .staggerTo(
      [
        ".product1",
        ".product2",
        ".product3",
        ".copy",
        ".c1",
        ".c2",
        ".c3",
        ".c5",
        ".c6",
      ],
      1,
      { display: "block", y: 0, opacity: 1, ease: "power1.inOut" },
      0.2
    )
    .staggerTo([".drip", ".drip_cheese"], 0.3, {
      display: "block",
      duration: 1,
      y: -43,
    })
    .staggerTo(
      [
        ".c1",
        ".c2",
        ".c3",
        ".c5",
        ".c6",
        ".product1",
        ".product2",
        ".product3",
      ],
      0.4,
      { y: "100%", opacity: 0, ease: "power1.inOut" },
      0.4
    )
    .staggerTo(
      [".copy"],
      1,
      { y: "-100%", opacity: 0, ease: "power1.inOut" },
      0.4
    )
    .to(".logo", { display: "none", duration: 0.1 })
    .staggerTo(
      [".drip", ".drip_cheese", ".takeover_bg"],
      1,
      { y: "100%", opacity: 0, ease: "power1.inOut" },
      0.4
    )
    //overlay
    .to(".prev", { display: "block", duration: 0.1 })
    .to(".overlay_logo", { display: "block", duration: 0.1 })
    .to(".overlay_cheese", {
      display: "block",
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    })
    .staggerTo(
      [".overlay_oh", ".overlay_my", ".overlay_cheeseCopy"],
      0.3,
      { display: "block", duration: 0.1 },
      0.4
    )
    .to(".overlay_cheeseVideo", { display: "block" })
    .staggerTo(
      [".overlay_product1", ".overlay_product2", ".overlay_product3"],
      1,
      { display: "block", duration: 1 }
    )
    .to(
      [".overlay_product1", ".overlay_product2", ".overlay_product3"],
      { duration: 2, y: 10, ease: "power1.inOut", repeat: -1, yoyo: true },
      0.4
    )
    .staggerTo(
      [".overlay_oh", ".overlay_my", ".overlay_cheeseCopy"],
      1,
      { duration: 2, x: 10, ease: "power1.inOut", repeat: -1, yoyo: true },
      0.4
    );
};
