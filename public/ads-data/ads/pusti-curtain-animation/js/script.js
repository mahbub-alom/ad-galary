gsap.timeline({delay:1.5,repeat:-1,repeatDelay:1.5})
.to('.ppm_Div1 .ppm_left', {x:'-100%'})
.to('.ppm_Div1 .ppm_right', {x:'100%'},'<')
.to('.ppm_Div2 .ppm_left', {x:'-100%'},'>1.5')
.to('.ppm_Div2 .ppm_right', {x:'100%'},'<')
.to('.ppm_Div3 .ppm_left', {x:'-100%'},'>1.5')
.to('.ppm_Div3 .ppm_right', {x:'100%',onComplete:()=>{
  gsap.set('.ppm_Div4',{zIndex:'110'})
  gsap.set([
    '.ppm_Div1 .ppm_left',
    '.ppm_Div1 .ppm_right',
    '.ppm_Div2 .ppm_left',
    '.ppm_Div2 .ppm_right',
    '.ppm_Div3 .ppm_left',
    '.ppm_Div3 .ppm_right',
  ],{x:'0%'})
}},'<')
.to('.ppm_Div4 .ppm_left', {x:'-100%'},'>1.5')
.to('.ppm_Div4 .ppm_right', {x:'100%',onComplete:()=>{
  gsap.set('.ppm_Div4',{zIndex:'70'})
  gsap.set('.ppm_Div4 .ppm_left',{x:'0%'})
  gsap.set('.ppm_Div4 .ppm_right',{x:'0%'})
}},'<')
