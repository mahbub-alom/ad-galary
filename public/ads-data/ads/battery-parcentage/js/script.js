navigator.getBattery()
  .then(function (battery) {
    battery.onlevelchange = () => {
      // console.log(battery.level);
      // console.log('Battery changed');
      updateBatteryImage(battery.level);
    }
    // console.log(battery.level);
    updateBatteryImage(battery.level);
  });

function updateBatteryImage(batteryLevel) {
  let imageSrc = 4;
  if(batteryLevel > 0.75)imageSrc = 4;
  else if(batteryLevel > 0.5)imageSrc = 3;
  else if(batteryLevel > 0.15)imageSrc = 2;
  else imageSrc = 1;

  document.querySelector('.ppm_bg').src = `https://ms.purplepatch.online/2024/battery-percentage/gluco-maxd/v2/assets/${imageSrc}.jpg`
  document.querySelector('.ppm_percentageText').innerText = `${Math.floor((batteryLevel)*100)}%`;
  if(imageSrc ===2){
    document.querySelector('.ppm_batteryPercentage').style.left = "195px";
  }else{
    document.querySelector('.ppm_batteryPercentage').style.left = "185px";
  }
  gsap.to('.ppm_bg',{opacity:1});
  gsap.to('.ppm_batteryPercentage',{opacity:1});
}