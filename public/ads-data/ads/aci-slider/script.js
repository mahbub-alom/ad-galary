a = Draggable.create('.ppm_slider', {
  type: "x", edgeResistance: .99, bounds: {
    top: 0, left: 0, width: 300, height: 250,
  }, onDrag: function () {
    console.log(this.x)
    gsap.set('.ppm_foreground',{width:`${(284+this.x)}px`})
  }
})