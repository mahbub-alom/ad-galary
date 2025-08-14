// --------------------------------- For Interaction ----------------------------------
let extraData = function(){
  console.log(typeof(getExtraData) === 'function')
  if(typeof(getExtraData) === 'function'){
    return getExtraData()
  }else{
    return {};
  }
}();
function submitInteraction(type,extraData=extraData) {
  fetch(`https://advisorapi.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=${type}&user_agent=${extraData?.user_agent}&browser_cookies=${extraData?.browser_cookies}&client_ip=${extraData?.client_ip}`);
}
// submitInteraction('slide',extraData)
// ----------------------------------- End Interaction -----------------------------------


gsap.to('.ppm_tapHand',{scaleX:1.1,scaleY:1.1,repeat:-1,yoyo:true})
document.querySelector('.ppm_slide_1').addEventListener('click',()=>{
  gsap.set('.ppm_slide_2',{display:'block'})
  document.querySelector('.ppm_video').play()
  submitInteraction('tap_clean',extraData)
});