gsap.set('.ppm_tapIcon',{scaleX:.7,scaleY:.7})
gsap.to('.ppm_tapIcon',{scaleX:.6,scaleY:.6,yoyo:true,repeat:-1})
root = document.querySelector('.carousel');

var
  figure = root.querySelector('figure'),
  images = figure.children,

  n = images.length,
  gap = root.dataset.gap || 0,

  theta = 2 * Math.PI / n,
  currImage = 0;


console.log(images)
setupCarousel(n, 300);

function setupCarousel(n, s) {
  var
    apothem = s / (2 * Math.tan(Math.PI / n));


  figure.style.transformOrigin = `50% 50% ${-apothem}px`;

  for (var i = 0; i < n; i++) {
    images[i].style.padding = `${gap}px`;
  }
  for (i = 1; i < n; i++) {
    images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
    images[i].style.transform = `rotateY(${i * theta}rad)`;
  }


  rotateCarousel(currImage);
}



function rotateCarousel(imageIndex) {
  figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
}


setInterval(() => {
  currImage++;
  rotateCarousel(currImage);

}, 3000);




var expanded = false;
document.querySelector('.draggableDiv').addEventListener('click', () => {
  if(expanded){
    let fruits =['honey','dates','fruits']
    let imageSerial = currImage % 3;
    window.open(`https://chaldal.com/search/${fruits[imageSerial]}`, "_blank");
    console.log(fruits[imageSerial])

  }
  gsap.to('.ppm_tapIcon',{opacity:0,display:'none',duration:.3})
  expanded = true;
  gsap.to('.carousel figure div', { height: 400, ease: "back.out(1.7)" })
  gsap.to('.draggableDiv', { height: 400, ease: "back.out(1.7)" })
  gsap.to('.crossBtn', { display: 'block', opacity: 1 })
})


document.querySelector('.crossBtn').addEventListener('click', () => {
  expanded = false;
  gsap.to('.ppm_tapIcon',{opacity:1,display:'block',duration:.3})

  gsap.to('.carousel figure div', { height: 250, ease: "back.out(1.7)" })
  gsap.to('.draggableDiv', { height: 250, ease: "back.out(1.7)" })

  gsap.to('.crossBtn', { display: 'none', opacity: 0 })
})