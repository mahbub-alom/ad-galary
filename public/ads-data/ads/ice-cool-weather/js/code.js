// var muteBtn = document.querySelector(".mute");

// var videoPlayer = document.querySelector(".pp-video");
window.addEventListener("load", () => {
  // gsap.to("#preloader", {
  //   opacity: 0,
  // });

  // var assets_url = "./images/";

  // video event

  // pp def

  var clickTag = "{CLICK_MACRO}";

  function ctaFunction() {
    window.open(clickTag);
  }

  var cur_ev = {
    start: false,
    first: false,
    mid: false,
    third: false,
    wasPlaying: false,
    wasMuted: false,
    wasPaused: false,
    wasResume: false,
    wasComplete: false,
  };

  function addVideoEvents(vid) {
    vid.addEventListener(
      "ended",
      function (e) {
        if (!cur_ev.wasComplete) {
          cur_ev.wasComplete = true;
          // videoMetrics("complete");
        }
        //   this.currentTime = 3.5
        //   this.play();
        gsap.to(".pp-video", {
          opacity: 0,
        });
        gsap.set(".mute", {
          display: "none",
        });
        setTimeout(() => {
          gsap.to(".pp-video", {
            opacity: 1,
          });
          gsap.set(".mute", {
            display: "block",
          });
          this.play();
        }, 4000);
      },
      false
    );

    vid.addEventListener(
      "timeupdate",
      function (e) {
        let duration = this.duration / 4;
        let progress = this.currentTime;

        if (progress > duration) {
          if (!cur_ev.first) {
            cur_ev.first = true;
            // videoMetrics("firstQuartile");
          }
        }
        if (progress > duration * 2) {
          if (!cur_ev.mid) {
            cur_ev.mid = true;
            // videoMetrics("midpoint");
          }
        }
        if (progress > duration * 3) {
          if (!cur_ev.third) {
            cur_ev.third = true;
            // videoMetrics("thirdQuartile");
          }
        }
      },
      false
    );
  }

  // addVideoEvents(videoPlayer);

  const adArea = document.getElementById("adArea");
  const currentDate = new Date();
  const currentTime = currentDate.getHours();
  const weatherTemp = document.getElementById("weatherTemp");
  const weatherTown = document.getElementById("weatherTown");
  const weatherIcon = document.getElementById("weatherIcon");
  const weatherHumidity = document.getElementById("weatherHumidity");
  const weatherWindSpeed = document.getElementById("weatherWindSpeed");
  const weekDay = document.getElementById("weekDay");
  const weatherPrecipitation = document.getElementById("weatherPrecipitation");
  const currentWeather = document.getElementById("currentWeather");
  const weatherCity = document.getElementById("weatherCity");

  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ,
  ];

  const requestURL = "https://ms.purplepatch.online/weather_api_v3/";
  // "https://api.pp-creatives.com/weather-uv/storage/dhaka_weather_uv.json?ver=" +
  // cacheBuster;
  // "https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=9c2fbb439daa766aadb2a6a79e889434";
  // "./images/weather.json";

  // console.log(requestURL);

  function R(max, min) {
    return Math.random() * (max - min) + min;
  }

  gsap.to(".flare", 10, {
    rotation: 360,
    repeat: -1,
  });

  let logo = gsap.to(".logo", 0.5, { scale: 1.15, repeat: -1, yoyo: true });

  //gsap.set(".c_t1, .h_t1", {rotation: -30, x: -30})

  async function writeHtmlJson() {
    try {
      let data = await fetch(requestURL);
      console.log(data + "data");

      if (!data.ok) return;

      data = await data.json();
      // console.log(data);

      const d = new Date();
      let day = d.getDay();
      // console.log("day", weekdays[day]);
      weekDay.innerText = weekdays[day];

      // let curWeather = data["current"]["weather"][0]["main"];ss
      let curWeather = data["weather"][0]["main"];
      // console.log(curWeather);
      let currentTemp = parseInt(data["main"]["temp"]);
      currentTemp = `${Math.ceil(currentTemp)}`;
      // console.log(currentTemp);
      // let currentUvi = parseInt(data["current"]["uvi"]);
      let currentHumidity = parseInt(data["main"]["humidity"]);
      // console.log(currentHumidity);
      let currentWind = parseInt(data["wind"]["speed"]);
      // console.log(currentWind + " km/h");
      let currentPressure = data["main"]["pressure"];
      // let currentTown = data["name"];
      let icon = data["weather"][0]["icon"];
      let weatherCityName = data["name"];
      weatherCity.innerText = weatherCityName;

      gsap.to("#weather", 0.2, {
        opacity: 1,
      });
      weatherTemp.innerHTML = currentTemp;
      currentWeather.innerText = curWeather;
      // weatherTown.innerHTML = currentTown;
      // weatherIcon.classList.add("icon-" + icon);

      if (icon === "01d") {
        gsap.to(".w_sunny", {
          opacity: 1,
        });
      } else if (icon === "02d" || icon === "03d") {
        gsap.to(".w_cloudy", {
          opacity: 1,
        });
      } else if (icon === "04d" || icon === "09d" || icon === "10d") {
        gsap.to(".w_rain", {
          opacity: 1,
        });
      } else if (icon === "11d") {
        gsap.to(".w_thunder", {
          opacity: 1,
        });
      } else {
        gsap.to(".w_sunny", {
          opacity: 1,
        });
      }

      weatherHumidity.innerText = currentHumidity + "%";
      weatherWindSpeed.innerText = currentWind + " km/h";

      weatherPrecipitation.innerHTML = currentPressure + " hpa";
      // weatherOtherInfo.innerHTML =
      //   "Humidity: " +
      //   currentHumidity +
      //   "%, Wind Speed: " +
      //   currentWind +
      //   " km/h";

      if (currentTemp > 25) {
      } else {
      }

      gsap.to("#preloader", {
        opacity: 0,
      });
      gsap.set("#preloader", {
        delay: 1,
        display: "none",
      });
    } catch (e) {}
  }

  writeHtmlJson();

  adArea.addEventListener("click", ctaFunction);

  // mouseEvents();
});

var d = {
  mouseOver: false,
  touch: false,
  dir: "",
  frameSeen: 1,
};

function muteVideo() {
  mute = !mute;
  let muteImage = document.getElementById("mute");
  muteImage.src = mute
    ? "./images/mute.png"
    : "./images/unmute.png";

  videoPlayer.muted = mute;
  if (mute) {
    videoPlayer.pause();
  } else {
    videoPlayer.play();
  }
}

function mouseEvents() {
  muteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    muteVideo();
    // startedFunction();
  });
  //touch

  //mouse over
}
