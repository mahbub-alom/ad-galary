gsap.timeline()
.fromTo('.ppm_copy',{opacity: 0,display: 'none',y:'-150%'}, {opacity: 1, display: 'block', y:'0%', duration: 1, ease: 'power2.inOut'})
.fromTo('.ppm_packetContainer',{scale: 0,display: 'none'}, {scale: 1, display: 'block', duration: 1, ease: "elastic.out(1,0.6)",onComplete:()=>{
  gsap.timeline({repeat: -1, yoyo: true})
  .to('.ppm_packetContainer',{rotateY:'10',skewX:'-3deg',duration:1.5,ease:"none"})
  .to('.ppm_packetContainer',{rotateY:'-10',skewX:'3deg',duration:3,ease:"none"})
  .to('.ppm_packetContainer',{rotateY:'0',skewX:'0',duration:1.5,ease:"none"})
}},'<')
.set('.ppm_floatingContainer',{display: 'block'},'<.5')
.to('.ppm_floating1',{width: '11%',left: '79%',top: '76%', duration: 1, ease: 'power2.inOut',onComplete:()=>{gsap.to('.ppm_floating1',{y:'-5px',duration: 2, ease: 'none',repeat: -1, yoyo: true})}},'<')
.to('.ppm_floating2',{width: '12%',left: '20%',top: '37%', duration: 1, ease: 'power2.inOut',onComplete:()=>{gsap.to('.ppm_floating2',{x:'-5px',duration: 2, ease: 'none',repeat: -1, yoyo: true})}},'<.1')
.to('.ppm_floating3',{width: '13%',left: '66%',top: '39%', duration: 1, ease: 'power2.inOut',onComplete:()=>{gsap.to('.ppm_floating3',{x:'5px',duration: 2, ease: 'none',repeat: -1, yoyo: true})}},'<.1')
.to('.ppm_floating4',{width: '15%',left: '7%',top: '71%', duration: 1, ease: 'power2.inOut',onComplete:()=>{gsap.to('.ppm_floating4',{y:'-5px',duration: 2, ease: 'none',repeat: -1, yoyo: true})}},'<.1')
.fromTo('.ppm_weatherBox',{rotateY:'-180%',display: 'none',opacity: 0}, {rotateY:'0%', display: 'block', opacity: 1, duration: 1, ease: 'power2.inOut'},'<');


gsap.to('.ppm_glow',{rotateZ:'360',duration: 20, ease: 'none',repeat: -1})

var weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
async function writeHtmlJson() {
  try {
    let data = await fetch(`https://ms.purplepatch.online/weather_api_v3/`);
    if (!data.ok) return;
    data = await data.json();

    const d = new Date();
    let day = d.getDay();
    document.querySelector(".ppm_day").innerText = weekdays[day];
    let currentTemp = parseInt(data["main"]["temp"]);
    currentTemp = `${Math.ceil(currentTemp)}`;
    document.querySelector(".ppm_temp_num").innerText = currentTemp;


    if (currentTemp > 25) {
    } else {
    }
  } catch (e) {}
}

writeHtmlJson();