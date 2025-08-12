// --------------------------------- For Interaction ----------------------------------
// let extraData = getExtraData()
let extraData = function () {
  // console.log(typeof(getExtraData) === 'function')
  if (typeof (getExtraData) === 'function') {
    return getExtraData()
  } else {
    return {};
  }
}();

function submitInteraction(type, extraData = extraData) {
  fetch(`https://advisorapi.purplepatch.online/ssp/richmedia_events?cm_id=${cm_id}&pub_id=${window.location.host}&type=${type}&user_agent=${extraData?.user_agent}&browser_cookies=${extraData?.browser_cookies}&client_ip=${extraData?.client_ip}`);
}
// submitInteraction('slide',extraData)
// ----------------------------------- End Interaction -----------------------------------

var varClearInterval;

var final_transcript = '';
wordFound = false
bannerClose = false
var recognizing = false;
var ignore_onend;

if (!('webkitSpeechRecognition' in window)) {
  console.log('upgrade browser')
} else {
  // debugger
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition()
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function () {
    // document.querySelector('.ppm_mic').classList.remove('bg_red')
    gsap.set('.ppm_bg',{display:'none'});
    clearTimeout(varClearInterval)
    varClearInterval = setTimeout(() => {
      console.log('stopping')
      recognition.stop();
      if (!wordFound) {
        // console.log('bgred')
        // document.querySelector('.ppm_mic').classList.add('bg_red')
    gsap.set('.ppm_bg',{display:'block'});

      }
    }, 4000);
    recognizing = true;
    // console.log('in')
  };
  recognition.onerror = function (event) {
    // console.log('error')
    if (event.error == 'no-speech') {
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {

      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      ignore_onend = true;
    }
  };
  recognition.onend = function () {

    recognizing = false;
    if (ignore_onend) {
      return;
    }
    if (!final_transcript) {
      return;
    }
  };
  recognition.onresult = function (event) {
    // console.log('result')
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }

    if (final_transcript || interim_transcript) {
      if (!wordFound) searchText(interim_transcript)
      if (!wordFound) searchText(final_transcript)
    }
  };
}

function searchText(speechText) {
  console.log(speechText)
  if (speechText.toLowerCase().includes('kfc')) {
    // console.log('foundBd')
    wordFoundAction()
    recognition.stop();
    wordFound = true;
  }
}


function startButton() {
  final_transcript = '';
  recognition.lang = 'en-US';
  recognition.start();
  ignore_onend = false;
}



function wordFoundAction() {
  document.querySelector('.cheese_vid').play()
  // submitInteraction('cheese',extraData)
  gsap.timeline()
    .to(['.cheese_vid'], { display: 'block', duration: .3 })
    .to(['.ppm_bg','.ppm_bg1'], { display: 'none', opacity: 0, duration: .3 }, '<')
    // .to('.ppm_cheese_all', { y: 500, duration: 1, ease: 'none' })
}
document.querySelector('.cheese_vid').addEventListener('ended',()=>{
  gsap.timeline({onComplete:()=>{
    gsap.to(".ppm_orderBtn",{scaleX:1.1,scaleY:1.1,repeat:-1,yoyo:true,duration:.8})
  }})
  .to('.ppm_slide_3',{display:'block'})
})

document.querySelector('.ppm_bg').addEventListener('click', () => {
  submitInteraction('mic_tap',extraData)
  clearTimeout(varClearInterval)
  varClearInterval = setTimeout(() => {
    console.log('stopping')
    recognition.stop();
    if (!wordFound) {
    gsap.set('.ppm_bg',{display:'block'});
    }
  }, 4000);
  if (!recognizing) startButton();
})




function getExtraData() {
  function isiFrame() {
    if (window.location !== window.parent.location) {
      return true;
    } else {
      return false;
    }
  }
  function getCookies() {
    var pairs = document.cookie.split(";");
    if (isiFrame()) {
      try {
        pairs = window.parent.document.cookie.split(";");
      } catch (e) {
        pairs = document.cookie.split(";");
      }
    } else {
      pairs = document.cookie.split(";");
    }
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
    }
    return cookies;
  }

  function getIp() {
    let theUrl = "https://www.cloudflare.com/cdn-cgi/trace";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    let data = xmlHttp.responseText;

    newData = data
      .trim()
      .split("\n")
      .reduce(function (obj, pair) {
        pair = pair.split("=");
        return (obj[pair[0]] = pair[1]), obj;
      }, {});
    // console.log(newData);

    return newData;
  }

  let cookiesData = getCookies();
  let ipData = getIp();
  // console.log(cookiesData, ipData);
  return {
    user_agent: ipData.uag,
    browser_cookies: cookiesData._ga,
    client_ip: ipData.ip,
  };
}