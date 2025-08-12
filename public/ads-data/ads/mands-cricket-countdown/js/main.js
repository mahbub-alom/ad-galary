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
    DateUtc: "2024-06-02 06:30:00",
    HomeTeam: "USA",
    AwayTeam: "CAN",
  },
  {
    DateUtc: "2024-06-02 20:30:00",
    HomeTeam: "WI",
    AwayTeam: "PNG",
  },
  {
    DateUtc: "2024-06-03 18:30:00",
    HomeTeam: "NAM",
    AwayTeam: "OMA",
  },
  {
    DateUtc: "2024-06-03 20:30:00",
    HomeTeam: "SA",
    AwayTeam: "SL",
  },
  {
    DateUtc: "2024-06-04 06:30:00",
    HomeTeam: "AFG",
    AwayTeam: "UGA",
  },
  {
    DateUtc: "2024-06-04 20:30:00",
    HomeTeam: "ENG",
    AwayTeam: "SCOT",
  },
  {
    DateUtc: "2024-06-04 21:30:00",
    HomeTeam: "NED",
    AwayTeam: "NEP",
  },
  {
    DateUtc: "2024-06-05 20:30:00",
    HomeTeam: "IND",
    AwayTeam: "IRE",
  },
  {
    DateUtc: "2024-06-06 05:30:00",
    HomeTeam: "PNG",
    AwayTeam: "UGA",
  },
  {
    DateUtc: "2024-06-06 06:30:00",
    HomeTeam: "AUS",
    AwayTeam: "OMA",
  },
  {
    DateUtc: "2024-06-06 21:30:00",
    HomeTeam: "USA",
    AwayTeam: "PAK",
  },
  {
    DateUtc: "2024-06-07 01:00:00",
    HomeTeam: "NAM",
    AwayTeam: "SCOT",
  },
  {
    DateUtc: "2024-06-07 20:30:00",
    HomeTeam: "CAD",
    AwayTeam: "IRE",
  },
  {
    DateUtc: "2024-06-08 05:30:00",
    HomeTeam: "NZ",
    AwayTeam: "AFG",
  },
  {
    DateUtc: "2024-06-08 06:30:00",
    HomeTeam: "SL",
    AwayTeam: "BAN",
  },
  {
    DateUtc: "2024-06-08 20:30:00",
    HomeTeam: "NL",
    AwayTeam: "SA",
  },
  {
    DateUtc: "2024-06-08 23:00:00",
    HomeTeam: "AUS",
    AwayTeam: "ENG",
  },
  {
    DateUtc: "2024-06-09 06:30:00",
    HomeTeam: "WI",
    AwayTeam: "UGA",
  },
  {
    DateUtc: "2024-06-09 20:30:00",
    HomeTeam: "IND",
    AwayTeam: "PAK",
  },
  {
    DateUtc: "2024-06-09 23:00:00",
    HomeTeam: "OMA",
    AwayTeam: "SCOT",
  },
  {
    DateUtc: "2024-06-10 20:30:00",
    HomeTeam: "SA",
    AwayTeam: "BAN",
  },
  {
    DateUtc: "2024-06-11 20:30:00",
    HomeTeam: "PAK",
    AwayTeam: "CAN",
  },
  {
    DateUtc: "2024-06-12 05:30:00",
    HomeTeam: "SL",
    AwayTeam: "NEP",
  },

  {
    DateUtc: "2024-06-12 06:30:00",
    HomeTeam: "AUS",
    AwayTeam: "NAM",
  },

  {
    DateUtc: "2024-06-12 20:30:00",
    HomeTeam: "USA",
    AwayTeam: "IND",
  },
  {
    DateUtc: "2024-06-13 06:30:00",
    HomeTeam: "WI",
    AwayTeam: "NZ",
  },
  {
    DateUtc: "2024-06-13 20:30:00",
    HomeTeam: "BAN",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2024-06-14 01:00:00",
    HomeTeam: "ENG",
    AwayTeam: "OMA",
  },
  {
    DateUtc: "2024-06-14 06:30:00",
    HomeTeam: "AFG",
    AwayTeam: "PNG",
  },
  {
    DateUtc: "2024-06-14 20:30:00",
    HomeTeam: "USA",
    AwayTeam: "IRE",
  },
  {
    DateUtc: "2024-06-15 05:30:00",
    HomeTeam: "SA",
    AwayTeam: "NEP",
  },

  {
    DateUtc: "2024-06-15 06:30:00",
    HomeTeam: "NZ",
    AwayTeam: "UGA",
  },

  {
    DateUtc: "2024-06-15 20:30:00",
    HomeTeam: "IND",
    AwayTeam: "CAD",
  },

  {
    DateUtc: "2024-06-15 23:30:00",
    HomeTeam: "NAM",
    AwayTeam: "ENG",
  },
  {
    DateUtc: "2024-06-16 06:30:00",
    HomeTeam: "AUS",
    AwayTeam: "SCOT",
  },
  {
    DateUtc: "2024-06-16 23:30:00",
    HomeTeam: "PAK",
    AwayTeam: "IRE",
  },
  {
    DateUtc: "2024-06-17 05:30:00",
    HomeTeam: "BAN",
    AwayTeam: "NEP",
  },
  {
    DateUtc: "2024-06-17 06:30:00",
    HomeTeam: "SL",
    AwayTeam: "NL",
  },
  {
    DateUtc: "2024-06-17 20:30:00",
    HomeTeam: "NZ",
    AwayTeam: "PNG",
  },
  {
    DateUtc: "2024-06-18 06:30:00",
    HomeTeam: "WI",
    AwayTeam: "AFG",
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

var homeimg = `url("./FlagPNGs/${selected.HomeTeam}.jpg")`;
var awayimg = `url("./FlagPNGs/${selected.AwayTeam}.jpg")`;
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
