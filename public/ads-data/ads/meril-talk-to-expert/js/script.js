// gsap.to('.ppm_callBtn',{scaleX:1.1,scaleY:1.1,repeat:-1,yoyo:true})

document.querySelector('.ppm_slide_1').addEventListener('click', () => {
  gsap.set('.ppm_slide_1', { display: 'none' })
  gsap.set('.ppm_slide_2', { display: 'block' })
  document.querySelector('.ppm_slide_2_vid').play()
  gsap.timeline({ delay: 3 })
    .fromTo('.ppm_yes', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .5 })
    .fromTo('.ppm_no', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .5 }, '>')
});


document.querySelector('.ppm_no').addEventListener('click', () => {
  gsap.set('.ppm_slide_3', { display: 'block' })
  gsap.set('.ppm_slide_2', { display: 'none', delay: .1 })
  document.querySelector('.ppm_slide_3').play()
});
document.querySelector('.ppm_yes').addEventListener('click', () => {
  gsap.set('.ppm_slide_4', { display: 'block' })
  gsap.set('.ppm_slide_2', { display: 'none', delay: .1 })
  document.querySelector('.ppm_slide_4_vid').play()

  gsap.timeline({ delay: 1.5 })
    .fromTo('.ppm_problem_click_1', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .5 })
    .fromTo('.ppm_problem_click_2', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .5 }, '>')
    .fromTo('.ppm_problem_click_3', { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: .5 }, '>')
});

document.querySelector('.ppm_problem_click_1').addEventListener('click', () => {
  document.querySelector('#ppm_video').src=`./img/vid.mp4`;
  gsap.set('.ppm_video_shape', { display: 'block' })
  document.querySelector('#ppm_video').play()
});
document.querySelector('.ppm_problem_click_2').addEventListener('click', () => {
  document.querySelector('#ppm_video').src=`./img/vid2.mp4`;
  gsap.set('.ppm_video_shape', { display: 'block' })
  document.querySelector('#ppm_video').play()
});
document.querySelector('.ppm_problem_click_3').addEventListener('click', () => {
  document.querySelector('#ppm_video').src=`./img/vid.mp4`;
  gsap.set('.ppm_video_shape', { display: 'block' })
  document.querySelector('#ppm_video').play()
});