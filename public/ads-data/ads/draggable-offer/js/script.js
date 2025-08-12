checker = true;
gsap.to('.pp_hand', { x:-10,y:-1, duration: 1,repeat:-1,yoyo:true })

Draggable.create("#controller", {
  type: "rotation",
  snap: {
    rotation: function (value) {
      return Math.round(value / 45) * 45;
    }
  },
  trigger: "#knob",
  bounds: { maxRotation: 360, minRotation: 0 },
  onDrag: function () {
    // console.log('dragging');
    // console.log(this.rotation);
    if(checker){
      if(this.rotation>320){
        checker = false;
        goalDrawEnd();
      }
    }

  }, onDragStart: function () {
    gsap.to('.pp_hand', { opacity: 0, display: 'none', duration: 1 })
  }
});
gsap.to("#controller", {
  rotation: 10,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

function goalDrawEnd() {
  gsap.timeline()
    .to('.pp_slide_1',{opacity:0,display:'none',duration:.7})
    .to('.pp_slide_2',{opacity:1,display:'block',duration:.7},'<')
    .from('.pp_circle_light',{scaleX:.93,scaleY:.94,duration:.5,x:-2,y:-25},'>')
    .fromTo('.pp_watch',{opacity:0,scaleX:.93,scaleY:.94,duration:.5,x:20,y:-10},{scaleX:1,scaleY:1,opacity:1,x:0,y:0},'>-.1')
    .fromTo('.pp_a73',{opacity:0,scaleX:.93,scaleY:.94,duration:.5,x:0,y:-20},{scaleX:1,scaleY:1,opacity:1,x:0,y:0},'<')
    .fromTo('.pp_buds',{opacity:0,scaleX:.93,scaleY:.94,duration:.5,x:-20,y:-10},{scaleX:1,scaleY:1,opacity:1,x:0,y:0},'<')
    .from('.pp_jiteNow',{opacity:0,scaleX:.7,scaleY:.7,duration:.5,x:-10,y:-10},'<-.3')
    .to(['.pp_watch','.pp_buds','.pp_a73'],{scaleX:1.05,scaleY:1.05,duration:.5,stagger:.1,repeat:5,yoyo:true},'>')
    .to('.pp_slide_2',{opacity:0,display:'none',duration:.5},'>')
    .set('.pp_circle_light',{display:'none'},'<')
    .to('.pp_slide_3',{opacity:1,display:'block',duration:.5},'<')
    .to('.pp_btn',{opacity:1,display:'block',duration:.5},'>-.3')
    .to('.pp_btn',{scaleX:1.15,scaleY:1.1,duration:1,repeat:-1,yoyo:true},'>')

}