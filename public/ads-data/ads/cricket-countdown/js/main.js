var countryone = document.getElementById("countryone");
var countrytwo = document.getElementById("countrytwo");
var countryoneFlg = document.getElementById("countryoneFlg");
var countryTwoFlg = document.getElementById("countryTwoFlg");

var MyHour = document.getElementById("MyHour");
var MyMin = document.getElementById("MyMin");
var MySec = document.getElementById("MySec");

var teamone = document.getElementById("teamone");
var teamtwo = document.getElementById("teamtwo");
var stat = document.getElementById("stat");
let data = [
 {
    DateUtc: "2024-06-08 00:06:30",
    HomeTeam: "SL",
    AwayTeam: "BAN",
  },
  {
    DateUtc: "2023-10-06 15:30:00",
    HomeTeam: "PAK",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2023-10-07 11:00:00",
    HomeTeam: "BAN",
    AwayTeam: "AFG",
  },
  {
    DateUtc: "2023-10-07 15:30:00",
    HomeTeam: "SA",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-10-08 11:00:00",
    HomeTeam: "IND",
    AwayTeam: "AUS",
  },
  {
    DateUtc: "2023-10-09 14:30:00",
    HomeTeam: "NZ",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2023-10-10 11:00:00",
    HomeTeam: "BAN",
    AwayTeam: "ENG",
  },
  {
    DateUtc: "2023-10-10 14:30:00",
    HomeTeam: "PAK",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-10-11 14:30:00",
    HomeTeam: "IND",
    AwayTeam: "AFG",
  },
  {
    DateUtc: "2023-10-12 14:30:00",
    HomeTeam: "AUS",
    AwayTeam: "SA",
  },
  {
    DateUtc: "2023-10-13 14:30:00",
    HomeTeam: "BAN",
    AwayTeam: "NZ",
  },
  {
    DateUtc: "2023-10-14 14:30:00",
    HomeTeam: "IND",
    AwayTeam: "PAK",
  },
  {
    DateUtc: "2023-10-15 14:30:00",
    HomeTeam: "AFG",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-10-16 14:30:00",
    HomeTeam: "AUS",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-10-17 14:30:00",
    HomeTeam: "NL",
    AwayTeam: "SA",
  },
  {
    DateUtc: "2023-10-18 14:30:00",
    HomeTeam: "NZ",
    AwayTeam: "AFG",
  },
  {
    DateUtc: "2023-10-19 14:30:00",
    HomeTeam: "BAN",
    AwayTeam: "IND",
  },
  {
    DateUtc: "2023-10-20 14:30:00",
    HomeTeam: "AUS",
    AwayTeam: "PAK",
  },
  {
    DateUtc: "2023-10-21 11:00:00",
    HomeTeam: "SL",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2023-10-22 14:30:00",
    HomeTeam: "NZ",
    AwayTeam: "IND",
  },
  {
    DateUtc: "2023-10-23  14:30:00",
    HomeTeam: "PAK",
    AwayTeam: "AFG",
  },
  {
    DateUtc: "2023-10-24 14:30:00",
    HomeTeam: "SA",
    AwayTeam: "BAN",
  },
  {
    DateUtc: "2023-10-25  14:30:00",
    HomeTeam: "AUS",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2023-10-26  14:30:00",
    HomeTeam: "ENG",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-10-27  14:30:00",
    HomeTeam: "PAK",
    AwayTeam: "SA",
  },
  {
    DateUtc: "2023-10-28 11:00:00",
    HomeTeam: "AUS",
    AwayTeam: "NZ",
  },
  {
    DateUtc: "2023-10-28 14:30:00",
    HomeTeam: "NL",
    AwayTeam: "BAN",
  },
  {
    DateUtc: "2023-10-29 14:30:00",
    HomeTeam: "IND",
    AwayTeam: "ENG",
  },
  {
    DateUtc: "2023-10-30 14:30:00",
    HomeTeam: "AFG",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-10-31 14:30:00",
    HomeTeam: "PAK",
    AwayTeam: "BAG",
  },
  {
    DateUtc: "2023-11-03 14:30:00",
    HomeTeam: "AFG",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2023-11-04 11:00:00",
    HomeTeam: "NZ",
    AwayTeam: "PAK",
  },
  {
    DateUtc: "2023-11-04 14:30:00",
    HomeTeam: "AUS",
    AwayTeam: "ENG",
  },
  {
    DateUtc: "2023-11-05 14:30:00",
    HomeTeam: "IND",
    AwayTeam: "SA",
  },

  {
    DateUtc: "2023-11-06 14:30:00",
    HomeTeam: "BAN",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-11-07 14:30:00",
    HomeTeam: "AFG",
    AwayTeam: "AUG",
  },
  {
    DateUtc: "2023-11-08 14:30:00",
    HomeTeam: "ENG",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2023-11-09 14:30:00",
    HomeTeam: "NZ",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2023-11-10 14:30:00",
    HomeTeam: "AFG",
    AwayTeam: "SA",
  },
  {
    DateUtc: "2023-11-11 11:00:00",
    HomeTeam: "AUS",
    AwayTeam: "BAN",
  },
  {
    DateUtc: "2023-11-11 14:30:00",
    HomeTeam: "ENG",
    AwayTeam: "PAK",
  },
  {
    DateUtc: "2023-11-12 14:30:00",
    HomeTeam: "IND",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2023-11-15 14:30:00",
    HomeTeam: "IND",
    AwayTeam: "NZ",
  },
  {
    DateUtc: "2023-11-16 14:30:00",
    HomeTeam: "SA",
    AwayTeam: "AUS",
  },
  {
    DateUtc: "2023-11-19 14:30:00",
    HomeTeam: "IND",
    AwayTeam: "AUS",
  },


];
let selected, i;
livetime();
function livetime() {

  for (i = 0; i < data.length; i++) {
    let current = new Date();
    // console.log(current)
    let check = new Date(data[i].DateUtc);
    // console.log(check)
    if (check > current) {
      selected = data[i];
      // console.log(selected)
      break;
    }
  }
}
function handleTickInit(tick) {
  var counter = Tick.count.down(new Date(selected.DateUtc), {
    format: ["h", "m", "s"],
  });
  // console.log(selected.HomeTeam)
  countryone.innerText = selected.HomeTeam;
  countrytwo.innerText = selected.AwayTeam;

var homeimg = `url("https://ms.purplepatch.online/2023/banglalink/oct-2023/FlagPNGs/${selected.HomeTeam}.jpg")`;
var awayimg = `url("https://ms.purplepatch.online/2023/banglalink/oct-2023/FlagPNGs/${selected.AwayTeam}.jpg")`;
  countryoneFlg.style.backgroundImage = homeimg;
  countryTwoFlg.style.backgroundImage = awayimg;

  if (data.stat == false) {
    stat.innerText = "";
  } else {
    let time = new Date(selected.DateUtc);
    stat.innerText = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    livetime();
    handleTickInit(tick);
  };
  function updateWCTime() {
    var kickoff = new Date(selected.DateUtc);
    var diff = kickoff - new Date();

    var dd = Math.floor(diff / (1000 * 60 * 60 * 24));
    console.log(dd)
    var hh = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hh)
    var mm = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    console.log(mm)
    var ss = Math.floor((diff % (1000 * 60)) / 1000);

    var hhh = hh + dd * 24;
    var h = hhh < 10 ? "0" + hhh : hhh;
    // console.log(h)
    var m = mm < 10 ? "0" + mm : mm;
    var s = ss < 10 ? "0" + ss : ss;

    // var h = hh < 10 ? "0" + hh : hh;
    // var m = mm < 10 ? "0" + mm : mm;
    // var s = ss < 10 ? "0" + ss : ss;

    MyHour.innerHTML = h;
    MyMin.innerHTML = m;
    MySec.innerHTML = s;


    setTimeout(updateWCTime, 1000);
  }
  setTimeout(updateWCTime, false);
}

// function translteNum(num_str) {
//   var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
//   var changed_nun = "";
//   num_str.toString().split("").forEach((l) => {if (isNaN(l)) { changed_nun += l; } else { changed_nun += bengali[l];}});
//   return changed_nun;
// }
