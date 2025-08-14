let frontElm = document.querySelector('.front')
let backElm = document.querySelector('.back')

let array = [1, 2]
let current = 1;
let activeFront = true;
function nextElement() {
  current++;
  if (current >= array.length) current = 0;
  activeFront = (!activeFront);
}

function completeOperation() {
  console.log(current,activeFront,array[current])
  if (!activeFront) frontElm.style.backgroundImage = `url('https://ms.purplepatch.online/flip/realme/dec-24/v1/assets/${array[current]}.jpg?v=1.1')`
  else backElm.style.backgroundImage = `url('https://ms.purplepatch.online/flip/realme/dec-24/v1/assets/${array[current]}.jpg?v=1.1')`
  nextElement()
  console.log(current,activeFront)
  gsap.to('.card', { rotateY: `${activeFront ? 180 : 0}deg`,delay:2, duration: 1, onComplete: completeOperation })
}
gsap.to('.card', { rotateY: `${activeFront ? 180 : 0}deg`,delay:.5, duration: 1, onComplete: completeOperation })
