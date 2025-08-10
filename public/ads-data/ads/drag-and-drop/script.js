let handAnim = gsap.to('.ppm_handIcon',{x:70,y:70,opacity:.3,repeat:-1,duration:1})
function createDraggableElm(elm,imageSrc){
  Draggable.create(elm, {
    type: "x,y", edgeResistance: .95, bounds: {
      top: 0, left: 0, width: 300, height: 250,
    }, onDragEnd: function () {
      submitInteraction('drag',extraData,cm_id)
      gsap.to(elm, { x: 0, y: 0, zIndex: 2 })
    }, onDrag: function () {
      handAnim.kill()
      gsap.to('.ppm_handIcon',{display:'none',opacity:0,duration:.3})
      if (this.hitTest(".ppm_positionedBox", 40)) {
        gsap.to('.ppm_finalPic',{opacity:1})
        document.querySelector('.ppm_finalPic').src = `./img/${imageSrc}`
      }
    }
  })
}

createDraggableElm('.ppm_atta','ruti.png')
createDraggableElm('.ppm_maida','parata.png')
createDraggableElm('.ppm_chinigura','polao.png')