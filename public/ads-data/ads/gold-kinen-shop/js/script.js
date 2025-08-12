// gsap.to('.ppm_callBtn',{scaleX:1.1,scaleY:1.1,repeat:-1,yoyo:true})
// document.querySelector('.ppm_slide_1').addEventListener('click',()=>{
//   submitInteraction('tap_call',extraData)
//   window.open(`tel:+8801872607360`);
// });

// Get all elements with the class 'price'
const prices = document.querySelectorAll('.price');

prices.forEach(price => {
  price.addEventListener('click', function () {
    // Remove 'ppm_active_price' class from all elements
    prices.forEach(p => p.classList.remove('ppm_active_price'));

    // Add 'ppm_active_price' to the clicked element
    this.classList.add('ppm_active_price');
  });
});

const arrayOfTimes = ['3 Months', '6 Months', '12 Months'];
let currentIndex = 0; // Initial index for '3 Months'

// Reference the time display div
const timeDisplay = document.getElementById('timeDisplay');

// Function to update the displayed time
function updateTime() {
  timeDisplay.textContent = arrayOfTimes[currentIndex];
}

// Increase button functionality
document.getElementById('increase').addEventListener('click', function () {
  if (currentIndex < arrayOfTimes.length - 1) {
    currentIndex++;
    updateTime();
  }
});

// Decrease button functionality
document.getElementById('decrease').addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateTime();
  }
});