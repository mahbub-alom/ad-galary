hitStatus = true;
gsap.set('.ppm_ringSlide2',{y:-150})
Draggable.create('.ppm_hand', {
  type: "x", edgeResistance: .99, cursor: 'pointer', bounds: {
    top: 0, left: -116, width: 450, height: 250,
  },

  onDragEnd: function () {
    if (hitStatus) {
      gsap.to(".ppm_dragText", { display: "block", opacity: 1, duration: .5 });
      gsap.to(".ppm_hand", { duration: .8, x: 0, y: 0, rotate: 0 });
    }
  },
  onDrag: function () {
    // gsap.to(".ppm_hand", { rotate: -20 });
    if (this.hitTest(".ppm_pos", '30%') && hitStatus) {
      hitStatus = false;
      console.log('hitted');
      paymentInitiate();
    }
  },
  onDragStart: function () {
    gsap.to(".ppm_dragText", { display: "none", opacity: 0, duration: .5 });
  }
})


function paymentInitiate(){
  gsap.timeline()
  .to('.ppm_hand', {display: "none", opacity: 0, duration: .5 })
  .to('.ppm_pos', {display: "none", opacity: 0, duration: .5 },'<')
  .to('.ppm_pos_reciept', {display: "block", opacity: 1, duration: .5 },'<')
  .to('.ppm_slide_1', {display: "none", opacity: 0, duration: .7 },'>.4')
  .to('.ppm_slide_2', {display: "block", opacity: 1, duration: .7 },'<')
  .to('.ppm_ringSlide2', {display: "block", opacity: 1, duration: 1,x:0,y:0 },'>.2')
  .to('.ppm_ringSlide2', { ease:'none',duration: .9,y:-10,repeat:-1,yoyo:true },'>.2')
}

document.querySelector('.ppm_slide_2').addEventListener('click',()=>{
  window.open('https://ebl.com.bd/wearebl/')
})