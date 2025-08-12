gsap.set('.ppm_offer',{scale:1})
let offerGsap = gsap.to('.ppm_offer',{scale:1.1,duration:1,ease:'none',repeat:-1,yoyo:true})
let tapGsap = gsap.to('.ppm_tap',{scale:1.1,duration:1,ease:'none',repeat:-1,yoyo:true})
let firstClick = false;

gsap.timeline({})

document.querySelector('.ppm_container').addEventListener('click',()=>{
  if(firstClick){
    window.open('https://www.butterflygroupbd.com/')
    return;
  }
  firstClick = true;
  offerGsap.kill();
  tapGsap.kill();
  gsap.to('.ppm_tap',{display:'none',opacity:0,duration:0.3})
  handleClick();
})

function handleClick(){
 gsap.timeline({repeat:-1,repeatDelay:1})
 .to('.ppm_offer',{scale:0.8,duration:0.5,y:-15,ease:'none'})
 .to('.ppm_sku',{scale:0.85,duration:0.5,y:-33,ease:'none'},'<')
 .fromTo('.ppm_tv',{scale:0,x:100,y:-100,display:'none',opacity:0},{scale:1,x:0,y:0,display:'block',opacity:1,duration:0.5,ease:'none'},'<')
 .fromTo('.ppm_ref',{scale:0,x:0,y:-100,display:'none',opacity:0},{scale:1,x:0,y:0,display:'block',opacity:1,duration:0.5,ease:'none'},'<')
 .fromTo('.ppm_ac',{scale:0,x:-100,y:-100,display:'none',opacity:0},{scale:1,x:0,y:0,display:'block',opacity:1,duration:0.5,ease:'none'},'<')
 .to(['.ppm_tv','.ppm_ac','.ppm_ref'],{duration:0.5,y:-5,ease:'none',repeat:3,yoyo:true},'>')
 .to(['.ppm_offer','.ppm_sku'],{duration:0.5,y:0,scale:1,ease:'none'},'>.2')
 .to('.ppm_tv',{duration:0.5,y:-100,x:100,scale:0,display:'none',opacity:0,ease:'none'},'<')
 .to('.ppm_ref',{duration:0.5,y:-100,x:0,scale:0,display:'none',opacity:0,ease:'none'},'<')
 .to('.ppm_ac',{duration:0.5,y:-100,x:-100,scale:0,display:'none',opacity:0,ease:'none'},'<')
}
