topBannerDrag = Draggable.create('.ppm_slider', {
  type: "x", edgeResistance: .99, bounds: {
    top: 0, left: 0, width: 300, height: 250,
  }, onDrag: function () {
    if(this.x < -130){
      topBannerDrag[0].disable()
      hideSlider()
    }
    console.log(this.x)
    gsap.set('.ppm_foreground',{width:`${(284+this.x)}px`})
  }
})


function hideSlider() {
  // hostUrl = window.location.host
  // fetch(`https://rh.purplepatch.online/ssp/richmedia_events?cm_id=1746&pub_id=${hostUrl}&type=1`)
  gsap.to('.ppm_foreground',{x:-300})
  gsap.to('.ppm_slider',{x:-300,duration:.3})
}