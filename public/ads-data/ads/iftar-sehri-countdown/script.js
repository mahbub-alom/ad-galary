const displayTitle = document.querySelector('.patch_title img');
const displayCounter = document.querySelector('.patch_countdown');
const displayIftarText = document.querySelector('.patch_note img');

// https://www.prothomalo.com/religion/islam/o5119r0fkt
var sehriSet = [
    "4:29","4:28","4:27","4:26","4:24",
    "4:24","4:23","4:22","4:21","4:20",
    "4:20","4:51","4:50","4:49","4:48",
    "4:47","4:46","4:45","4:44","4:43",
    "4:42","4:41","4:40","4:39","4:38",
    "4:36","4:35","4:34","4:33","4:31","4:30","4:30"
];


var iftarSet = [
    "18:18","18:19","18:19","18:19","18:20",
    "18:20","18:21","18:21","18:21","18:22",
    "18:10","18:10","18:10","18:11","18:11",
    "18:12","18:12","18:12","18:13","18:13",
    "18:13","18:14","18:14","18:14","18:15",
    "18:15","18:16","18:16","18:17","18:17","18:18","18:18"
];

function timeUpdate() {
  var today = new Date();
  var curDate = today.getDate();
  var curTime = today.getHours()*60*60+ today.getMinutes()*60+today.getSeconds();

  var checkIftar = iftarSet[curDate].split(":");
  var checkSehri = sehriSet[curDate].split(":");
  var timeIftar = checkIftar[0]*60*60 + checkIftar[1]*60;
  var timeSehri = checkSehri[0]*60*60 + checkSehri[1]*60;
  console.log(curDate,checkIftar,checkSehri,timeSehri,timeSehri)

  if (timeSehri<timeIftar && timeSehri>curTime && timeSehri>=0){
      checkSehriTime(curDate, curTime);
  } else if (timeSehri<timeIftar && timeIftar<curTime) {
      checkSehriTime(curDate, curTime);
  } else {
      checkIftarTime(curDate, curTime);
  }
}
timeUpdate()
setInterval(timeUpdate,1e3);


function checkIftarTime(todayDate, curTime) {
    var time = iftarSet[todayDate].split(":");
    var setTime = time[0]*60*60 + time[1]*60;
    var diffTime = setTime - curTime;
    if (diffTime<setTime && diffTime>=0){
        displayTitle.src = "https://ms.purplepatch.online/ramadan/2024/countdown/aci/v4/assets/iftar.png";
        // displayIftarText.src = "https://ms.purplepatch.online/ramadan/2024/countdown/aci/v4/assets/iftartext.png";
        displayCounter.innerHTML = printTimer(diffTime);
    }
}

function checkSehriTime(todayDate, curTime) {
    var time = sehriSet[todayDate].split(":");
    var setTime = time[0]*60*60 + time[1]*60;
    var diffTime = setTime - curTime;

    if (diffTime<setTime && diffTime>=0){
        displayTitle.src = "https://ms.purplepatch.online/ramadan/2024/countdown/aci/v4/assets/sehri.png";
        // displayIftarText.src = "https://ms.purplepatch.online/ramadan/2024/countdown/aci/v4/assets/sehritext.png";
        displayCounter.innerHTML = printTimer(diffTime);
        document.querySelector('.patch_note').style.right='50px';

    } else {
        var lastTime = setTime+24*60*60;
        var sehriEnd = lastTime - curTime;
        displayTitle.src = "https://ms.purplepatch.online/ramadan/2024/countdown/aci/v4/assets/sehri.png";
        // displayIftarText.src = "https://ms.purplepatch.online/ramadan/2024/countdown/aci/v4/assets/sehritext.png";
        displayCounter.innerHTML = printTimer(sehriEnd);
        document.querySelector('.patch_note').style.right ='50px';
    }
}

function printTimer(sec) {
    hr = Math.floor(sec / 3600) % 24;
    mm = Math.floor(sec / 60) % 60;
    ss = sec % 60;

    var x = hr < 10? "0"+hr : hr;
    var y = mm < 10? "0"+mm : mm;
    var z = ss < 10? "0"+ss : ss;
    return `<span class="hour absolute">${translteNum(x)}</span> <span class="minute absolute">${translteNum(y)}</span> <span class="second absolute">${translteNum(z)}</span>`;
}

function translteNum(num_str){
        var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
        var changed_nun='';
        num_str.toString().split('').forEach(l => {
          if(isNaN(l)){changed_nun +=l;}else{changed_nun += bengali[l];}
        });
        return changed_nun;
}
