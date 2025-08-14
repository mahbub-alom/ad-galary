let vid1 = document.querySelector('.ppm_video_1')
let vid2 = document.querySelector('.ppm_video_2')
let vid3 = document.querySelector('.ppm_video_3')

let currentPosition = 1;
window.addEventListener('load', (event) => {
  vid1.play()
  vid2.play()
  vid3.play()
});

document.querySelector('.ppm_slide_1').addEventListener('click',()=>{
    gsap.to(`.ppm_video_${currentPosition}`,{opacity:0,duration:.2})
    currentPosition++;
    if(currentPosition > 3) currentPosition = 1;
    gsap.to(`.ppm_video_${currentPosition}`,{opacity:1,duration:.1})
})

gsap.to('.ppm_tap',{scaleX:1.05,scaleY:1.05,repeat:-1,yoyo:true})