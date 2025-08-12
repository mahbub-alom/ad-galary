selectedCircle = 1


gsap.timeline()
  .set('.leftDivImg', { attr: { src: './bgBlue.png' } })
  .set('.rightDivImg', { attr: { src: './bgBlue.png' } })
  .set('.leftDiv', { x: 0 })
  .set('.rightDiv', { x: 0 })


function changeColor(newCircle) {
  if (newCircle == selectedCircle) return
  selectedCircle = newCircle
  if (newCircle == 1) {
    newSrc = './bgBlue.png'
    newDest = 0
  }
  if (newCircle == 2) {
    newSrc = './bgGreen.png'
    newDest = -64
  }
  if (newCircle == 3) {
    newSrc = './bgYellow.png'
    newDest = 63
  }

  gsap.timeline()
    .set('.ppm_selectionRing', { x: newDest })
    .set('.ppm_bgBlue', { attr: { src: newSrc } })
    .to('.leftDiv', { x: -150 })
    .to('.rightDiv', { x: 150 }, '<')
    .set('.leftDivImg', { attr: { src: newSrc } })
    .set('.rightDivImg', { attr: { src: newSrc } })
    .set('.leftDiv', { x: 0 })
    .set('.rightDiv', { x: 0 })
}

document.querySelector('.ppm_smallBlue').addEventListener('click', () => {
  changeColor(1)
})
document.querySelector('.ppm_smallGreen').addEventListener('click', () => {
  changeColor(2)
})
document.querySelector('.ppm_smallYellow').addEventListener('click', () => {
  changeColor(3)
})