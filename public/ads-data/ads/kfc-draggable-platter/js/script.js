const draggableItems = document.querySelectorAll('.draggable');
const totalDraggableItems = draggableItems.length;
let draggedItemCount = 0;


gsap.to(".text", {delay: 1, x: -150, opacity: 1, duration:1});
gsap.to([".rice", '.legpis', '.mayo', '.wings', '.pav', '.drink'], {scale: .9, repeat: -1, yoyo: true, duration: 1});


function handleItemDragEnd() {
    submitInteraction('tap',extraData)
  draggedItemCount++;
  if (draggedItemCount === totalDraggableItems) {
    gsap.to(".ppa_slide1", { delay: 1, opacity: 0, display: 'none' });
    gsap.to(".ppa_slide2", { opacity: 1, display: 'block', duration: 1, ease: "power1.inOut" });
    gsap.to('.price', {duration: 1,display: 'block', scale: 1.2, ease: "power1.inOut"});
    gsap.to('.save', {delay: .6,duration: 1,display: 'block', scale: 1.2, ease: "power1.inOut", repeat: -1, yoyo: true});
    gsap.to(".cta", { delay: 1, display: 'block',scale: 1.2, duration: .9, repeat: -1, yoyo: true});
  }
}

// Add event listeners for drag end on all draggable items
draggableItems.forEach(item => {

  Draggable.create(item, {
    bounds: "body",
    onPress: function() {
      gsap.killTweensOf(this.target);
    },
    onDragStart: function() {
      gsap.killTweensOf(this.target);
      gsap.to(".text", {opacity:0});
    },
    onDragEnd: function() {
      gsap.to(this.target, {opacity: 0});
      gsap.to(".d_" + this.target.classList[0], {display: 'block'});
      handleItemDragEnd();
    }
  });
});

