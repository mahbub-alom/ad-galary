gsap.to('.ppm_dot1',{scaleX:1.3,scaleY:1.3,repeat:-1,yoyo:true})
gsap.to('.ppm_dot2',{delay:.2,scaleX:1.3,scaleY:1.3,repeat:-1,yoyo:true})
gsap.to('.ppm_dot3',{delay:.4,scaleX:1.3,scaleY:1.3,repeat:-1,yoyo:true})


// document.querySelector('.ppm_dot1').addEventListener('mouseover',hoverOperation)

function hoverOperation(dotNo) {
  gsap.to(`.ppm_hoverText`,{display:'none',opacity:0,duration:.2})

  showArr = []
  for(i=1;i<=3;i++){
    if(i!=dotNo) showArr.push(`.ppm_line${i}`)
  }
  gsap.to(showArr,{display:'none',opacity:0,duration:.2})
  gsap.to(`.ppm_line${dotNo}`,{display:'block',opacity:1,duration:.2})
}


document.querySelector('.ppm_button').addEventListener('click',()=>{
  window.open('https://www.samsung.com/bd/watches/galaxy-watch/galaxy-watch6-44mm-graphite-bluetooth-sm-r940nzkaswa/')
})