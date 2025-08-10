var finalEnglishToBanglaNumber = {
  0: "০",
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
};
let extraData = getExtraData()
String.prototype.getDigitBanglaFromEnglish = function () {
  var retStr = this;
  for (var x in finalEnglishToBanglaNumber) {
    retStr = retStr.replace(new RegExp(x, "g"), finalEnglishToBanglaNumber[x]);
  }
  return retStr;
};
let notKilled = true;
let gbTween = gsap.to(".gbSliderBar", {
  x: 15,
  repeat: -1,
  yoyo: true,
  ease: "none",
  duration: 0.6,
});
let dayTween = gsap.to(".daySliderBar", {
  x: 15,
  repeat: -1,
  yoyo: true,
  ease: "none",
  duration: 0.6,
});

// gsap.timeline({delay:1.5,repeatDelay:1.5,repeat:-1})
// .to('.ppm_bonusText',{scale:.3,duration:.3,opacity:0})
// .to('.ppm_bonusText',{scale:1,duration:.3,opacity:1},'>.5');
// gsap.to('.ppm_bonusText',{opacity:0,repeat:-1,duration:1,yoyo:true})
// gsap.timeline({delay:3,repeatDelay:3,repeat:-1})
// .set('.ppm_bonusText',{opacity:0})
// .set('.ppm_bonusText',{opacity:1},'>.5');

let sliderBarPosition = document.querySelector(".gbSliderBar");
let gbValue = 3;

Draggable.create(".gbSliderBar", {
  type: "x",
  bounds: ".gbSlider",
  onDragStart: () => {
    if (notKilled) {
      gbTween.kill();
      dayTween.kill();
      notKilled = false;
      gsap.to('.daySliderBar',{x:0})
    }
    // fetch(
    //   `https://rh.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=slide&user_agent=${extraData.user_agent}&browser_cookies=${extraData.browser_cookies}&client_ip=${extraData.client_ip}`
    // );
  },
  onDrag: () => {
    // let position = sliderBarPosition.getBoundingClientRect();
    // gbSliderValue(position);
    // console.log(position)
  },
  onDragEnd: () => {
    let position = sliderBarPosition.getBoundingClientRect();
    setGbSliderPosition(position);
    gbSliderValue(position);
  },
});

function gbSliderValue(position) {
  if (position.x < 130) {
    gbValue = 3;
  } else if (position.x < 178) {
    gbValue = 10;
  } else {
    gbValue = 25;
  }
  updateTaka();
}

function setGbSliderPosition(position) {
  if (position.x < 130) {
    gsap.to(sliderBarPosition, { x: 0 });
  } else if (position.x < 178) {
    gsap.to(sliderBarPosition, { x: 46 });
  } else {
    gsap.to(sliderBarPosition, { x: 90 });
  }
}
// user_agent
// browser_cookies
// client_ip
let daySliderBarPosition = document.querySelector(".daySliderBar");
let dayValue = 7;
Draggable.create(".daySliderBar", {
  type: "x",
  bounds: ".daySlider",
  onDragStart: () => {
    if (notKilled) {
      gbTween.kill();
      dayTween.kill();
      notKilled = false;
      gsap.to('.gbSliderBar',{x:0})
    }
    // fetch(
    //   `https://rh.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=slide&user_agent=${extraData.user_agent}&browser_cookies=${extraData.browser_cookies}&client_ip=${extraData.client_ip}`
    // );
  },
  onDrag: () => {
    // let position = daySliderBarPosition.getBoundingClientRect();
    // daySliderValue(position);
    // console.log(position)
  },
  onDragEnd: () => {
    let position = daySliderBarPosition.getBoundingClientRect();
    setDaySliderPosition(position);
    daySliderValue(position);
  },
});

function daySliderValue(position) {
  if (position.x < 152) {
    dayValue = 7;
  } else {
    dayValue = 30;
  }
  updateTaka();
}

function setDaySliderPosition(position) {
  if (position.x < 152) {
    gsap.to(daySliderBarPosition, { x: 0 });
  } else {
    gsap.to(daySliderBarPosition, { x: 78 });
  }
}
let a;
let b;
let appUrl = ``;
let webUrl = ``;
updateTaka();
function updateTaka() {
  day7 = [
    {
      taka: 89,
      weblink: "https://www.banglalink.net/en/prepaid/internet/3gb-7days",
      applink: "https://app.adjust.com/18myagdg?redirect=https%3A%2F%2Fmybl.digital%2Fug6rm1cQn8Htnoj58",
    },
    {
      taka: 169,
      weblink: "https://www.banglalink.net/en/prepaid/internet/10g-b-7days",
      applink: "https://app.adjust.com/189sa1th?redirect=https%3A%2F%2Fmybl.digital%2FTciF4WdaBxZsvCXz9",
    },
    {
      taka: 249,
      weblink: "https://www.banglalink.net/en/prepaid/internet/25gb-7days",
      applink: "https://app.adjust.com/18wkha6b?redirect=https%3A%2F%2Fmybl.digital%2FKoshJ2s7PjX3W6VT7",
    },
  ];
  day30 = [
    {
      taka: 209,
      weblink: "https://www.banglalink.net/en/prepaid/internet/3gb-30days",
      applink: "https://app.adjust.com/18hftde4?redirect=https%3A%2F%2Fmybl.digital%2FybPnagSGePyzN7VC7",
    },
    {
      taka: 399,
      weblink: "https://www.banglalink.net/en/prepaid/internet/10-gb-30days",
      applink: "https://app.adjust.com/18t4sut7?redirect=https%3A%2F%2Fmybl.page.link%2FWnnVQvvE43EoTKT87",
    },
    {
      taka: 499,
      weblink: "https://www.banglalink.net/en/prepaid/internet/25-gb-30days",
      applink: "https://app.adjust.com/18j2jcmy?redirect=https%3A%2F%2Fmybl.digital%2FMQZi7UTtX3U1dN4D6",
    },
  ];
  if (dayValue == 7) {
    dayArr = day7;
  }
  if (dayValue == 30) {
    dayArr = day30;
  }

  if (gbValue == 3) {
    gbPos = 0;
  }
  if (gbValue == 10) {
    gbPos = 1;
  }
  if (gbValue == 25) {
    gbPos = 2;
  }
  let data = dayArr[gbPos];
  appUrl = data.applink;
  // webUrl = data.weblink;

  gsap.set(".takaText", { width: "164px" });

  clearInterval(a);
  clearTimeout(b);
  mainTaka = data.taka + 10;
  document.querySelector(".takaValue").innerText = mainTaka
    .toString()
    .getDigitBanglaFromEnglish();
  // console.log(dayArr[gbPos]);
  gsap.to(".takaText", { width: "120px", duration: 2 });
  a = setInterval(() => {
    document.querySelector(".takaValue").innerText = (--mainTaka)
      .toString()
      .getDigitBanglaFromEnglish();
  }, 200);
  b = setTimeout(() => {
    clearInterval(a);
    document.querySelector(".takaValue").innerText = data.taka
      .toString()
      .getDigitBanglaFromEnglish();
  }, 2200);
}

// document.querySelector(".ppm_webLink").addEventListener("click", () => {
//   window.open(webUrl);
// });
document.querySelector(".ppm_appLink").addEventListener("click", () => {
  let linkValue = `click_${dayValue}_${gbValue}`
  // fetch(
  //     `https://rh.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=${linkValue}&user_agent=${extraData.user_agent}&browser_cookies=${extraData.browser_cookies}&client_ip=${extraData.client_ip}`
  //   );
  // window.open(appUrl);
  window.open('https://www.facebook.com/airtelbuzz/')
});


function getExtraData(){
  function isiFrame() {
    if (window.location !== window.parent.location) {
        return true
    } else {
        return false
      }
}
function getCookies() {
    var pairs = document.cookie.split(";");
    if(isiFrame()){
        try{
            pairs = window.parent.document.cookie.split(";");
        }catch (e) {
            pairs = document.cookie.split(";");
        }

    }else {
         pairs = document.cookie.split(";");
    }
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
}

function getIp(){
let theUrl = 'https://www.cloudflare.com/cdn-cgi/trace';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    let data = xmlHttp.responseText;

  newData = data.trim().split('\n').reduce(function (obj, pair) {
        pair = pair.split('=');
        return obj[pair[0]] = pair[1], obj;
},{});
      console.log(newData)

 return newData;
}

  let cookiesData = getCookies()
  let ipData = getIp()
console.log(cookiesData,ipData)
  return {
    "user_agent":ipData.uag,
"browser_cookies": cookiesData._ga,
"client_ip": ipData.ip
  }
}