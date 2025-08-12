// --------------------------------- For Interaction ----------------------------------
let extraData = function () {
  console.log(typeof (getExtraData) === 'function')
  if (typeof (getExtraData) === 'function') {
    return getExtraData()
  } else {
    return {};
  }
}();
function submitInteraction(type, extraData = extraData) {
  fetch(`https://advisorapi.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=${type}&user_agent=${extraData?.user_agent}&browser_cookies=${extraData?.browser_cookies}&client_ip=${extraData?.client_ip}`);
}
// submitInteraction('slide',extraData)
// ----------------------------------- End Interaction -----------------------------------
let a;
let firstVid = document.querySelector('.ppm_video');
let secondVid = document.querySelector('.ppm_video2');


document.querySelector('.ppm_slide_1').addEventListener('click',()=>{
  if(a){a.kill()}
  gsap.set('.ppm_slide_3',{display:'block'})
  document.querySelector('.ppm_video').remove()
  document.querySelector('.ppm_video2').play()
  submitInteraction('tap',extraData)
  // document.querySelector('.ppm_video2').addEventListener('ended',()=>{
  //   console.log(secondVid.currentTime)
  //   secondVid.currentTime = 6.50
  //   secondVid.play()
  // })
});

  document.querySelector('.ppm_video').addEventListener('ended',()=>{
    console.log('ended')
    gsap.set('.ppm_first_loop',{display:'block'})
  })

// document.querySelector('.ppm_slide_3').addEventListener('click',()=>{
//   console.log(secondVid.currentTime)
// });