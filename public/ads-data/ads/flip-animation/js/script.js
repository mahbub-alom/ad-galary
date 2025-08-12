let ppm_container = document.querySelector('.ppm_container')
let ppm_element_close = document.querySelector('.ppm_element_close')

gsap.timeline()
  .fromTo(ppm_container, { display: "none", opacity: 0, }, { display: "block", opacity: 1, })
  .fromTo(".ppm_slide_1", { display: "none", opacity: 0, }, { display: "block", opacity: 1, })
  .fromTo(".ppm_element_1", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, "<")
  .fromTo(".ppm_element_2", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, ">")
  .fromTo(".ppm_element_4", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, "<")
  .fromTo(".ppm_element_3", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, ">")
  .fromTo(".ppm_element_5", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, "<")
  .fromTo(".ppm_element_6", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, ">")
  .fromTo(".ppm_element_7", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, "<")
  .fromTo(".ppm_element_8", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, ">")
  .fromTo(".ppm_element_9", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, "<")
  .fromTo('.ppm_slide_2',1, { display: "none", opacity: 0, }, { display: "block", opacity: 1,delay:.5 }, ">.5")
  .fromTo(".ppm_copy", .5, { display: "none", opacity: 0,y:'300px',x:'50%' }, { display: "block", opacity: 1,y:0,x:'50%',onComplete:()=>{
    gsap.to('.ppm_copy',{scaleX:1.05,scaleY:1.05,repeat:-1,yoyo:true})
  } }, ">")
  .fromTo(".ppm_cta_btn", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1,delay:.5,onComplete:()=>{
    gsap.to('.ppm_cta_btn',{scaleX:1.05,scaleY:1.1,repeat:-1,yoyo:true})
  } }, ">")
  .fromTo(".ppm_element_close", .5, { display: "none", opacity: 0, }, { display: "block", opacity: 1, }, "<");

ppm_element_close.addEventListener("click", function (e) {
  e.stopPropagation();
  gsap.to(ppm_container, 0.5, {
    display: "none",
    y: "90%",
    x: "90%",
    scale: .5,
    onComplete: function () {
      ppm_container.remove();
    }
  });
});
document.querySelector(".ppm_slide_2").addEventListener("click", function (e) {
  e.stopPropagation();
window.open('https://www.batabd.com/')
});
