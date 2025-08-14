goal = 0;
tournament = true;
flagCode = '';
ts = 0;
keeper = document.querySelector('.pp_keeper')
ball = document.querySelector('.pp_ball')
pp_container = document.querySelector('.pp_container')
gsap.to('.pp_startBtn', { scaleX: 1.15, scaleY: 1.15, duration: 1, repeat: -1, yoyo: true });

document.querySelector('.pp_startBtn').addEventListener('click', function () {

  gsap.timeline()
    .to('.pp_startBtn', { opacity: 0, display: 'none', duration: .5 })
    .to('.flag_select', { opacity: 1, display: 'block', duration: .7 });

})

function topFlagOperation(flagVar) {
  // console.log(flagVar);
  flagCode = flagVar;
  document.querySelector('.pp_topFlag').src = `//ms.purplepatch.online/2023/tvs/flick-football-game/slide5/flagsSlide/topflags/${flagVar}.png`;
  gsap.timeline()
    .to('.flag_select', { opacity: 0, display: 'none', duration: 1 })
    .to('.pp_topFlag', { display: 'block' }, '<');
  mainPlay();
}

function mainPlay() {
  gsap.timeline()
    .to('.pp_hand', { display: 'block', opacity: 1, duration: .5 })
    .fromTo('.pp_hand', { y: 0 }, { y: -30, duration: .5, repeat: 2, yoyo: true, ease: Linear.easeNone })
    .to('.pp_hand', { display: 'none', opacity: 0, duration: .5 }, ">")

  playing();
}

document.querySelector('.pp_getOffer').addEventListener('click', function () {
  // gsap.set('',{});
  gsap.to('.pp_slide_3', { display: 'block', opacity: 1, duration: .5 });
})





document.querySelector('.pp_againBtn').addEventListener('click', function () {

  gsap.timeline()
    .to('.pp_keeper', { display: 'block', duration: .2 })
    .to(['.pp_againBtn', '.pp_finalScore'], { opacity: 0, display: 'none', duration: .5 })
    .to('.pp_hand', { display: 'block', opacity: 1, duration: .5 })
    .fromTo('.pp_hand', { y: 0 }, { y: -30, duration: .5, repeat: 2, yoyo: true, ease: Linear.easeNone })
    .to('.pp_hand', { display: 'none', opacity: 0, duration: .5 }, ">")

  playing();
})

// working on closure
function counter() {
  let count = 0;
  function increment() {
    count++;
  }
  function decrement() {
    count--;
  }
  function makeZero() {
    // console.log(count);
    count = 0;
  }
  function showVal() {
    // console.log(count);
  }
  function setRemainingBall() {
    count=3;
  }

  function modify(val) {
    if (val === '1') increment();
    else if (val === '2') decrement();
    else if (val === '3') setRemainingBall();
    else if (val === '4') showVal();
    else if (val === '0') makeZero();
    return count;
  }
  return modify;
}
const closureTotal = counter();
const closureRemaining = counter();
// closure end


function playing() {
  ts = 0;
  shoot = false;
  dragged = false;
  minDis = 15;
  overhead = 60;
  missY = -175;
  goalY = -135;
  ballSize = .3;
  shootDuration = .2;
  bounceBaseY = -85;
  goal = 0;
  remainingBall = 3;
  closureTotal('0');
  closureRemaining('3');
  keeper = document.querySelector('.pp_keeper')
  ball = document.querySelector('.pp_ball')
  pp_container = document.querySelector('.pp_container')
  document.getElementById('pp_score').innerText = goal;
  gsap.set(['#ball_1', '#ball_2', '#ball_3'], { display: 'flex' });
  gsap.set(['.pp_ball_replica', '.pp_ball', '.pp_shadow'], { display: 'block', opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1 });

  Draggable.create('.pp_ball_replica', {
    type: "x,y", edgeResistance: .99, cursor: 'auto', bounds: {
      top: 100, left: 50, width: 200, height: 135,
    },
    onDragEnd: function () {
      py = Math.abs(this.y);
      if (py <= minDis) {
        gsap.to(".pp_ball_replica", { duration: .1, x: 0, y: 0 });
      } else if (py < overhead && (!shoot)) {
        shoot = true;
        // console.log('shooting...end');
        shootBall(this.x, py);
      }
      gsap.to(".pp_ball_replica", { duration: .1, x: 0, y: 0 });


    },

    onDrag: function () {
      py = Math.abs(this.y);
      if (py > minDis && py < overhead && (!dragged)) {
        dragged = true;
        dragInterval = setInterval(() => {
          if (!shoot) {
            // console.log('shooting...ondrag');
            shootBall(this.x, py);

            shoot = true;
          }
        }, 400);
      }
      // up: for drag shot

      if (py > overhead && (!shoot)) {
        shoot = true;
        // console.log('shooting...max');
        shootBall(this.x, py);

      }
    }
  })



  function shootBall(checkX, checkY) {
    lastX = checkX * 1.722;
    clearInterval(dragInterval);
    gsap.set('.pp_shadow', { display: 'none' });
    gsap.set('.pp_ball_replica', { display: 'none' });

    if (checkY > minDis && checkY < overhead) {
      lastY = goalY;
    } else {
      lastY = missY;
    }


    gsap.to(".pp_ball", {
      y: lastY, x: lastX, scaleX: ballSize, scaleY: ballSize, duration: shootDuration, ease: Linear.easeNone,
      onComplete: function () {

        var pp_containerRect = pp_container.getBoundingClientRect();
        var keeperRect = keeper.getBoundingClientRect().left - pp_containerRect.left;

        // console.log("keeper: ", keeperRect);
        var ballRect = ball.getBoundingClientRect().left - pp_containerRect.left;
        // console.log("ball: ", ballRect);

        if (lastY == -175) {
          document.querySelector('.pp_goal_text').innerText = 'Missed';
          // goal--;
          ballReduce();
          playNoGoal();
          ts++;

        }
        else if (ballRect < 73 || ballRect > 222) {
          // console.log('missAnimation side');
          document.querySelector('.pp_goal_text').innerText = 'Missed';
          // goal--;
          ballReduce();
          playNoGoal();
          ts++;

        } else if ((keeperRect - 5) <= ballRect && (keeperRect + 40) >= ballRect) {
          // console.log('saved');
          document.querySelector('.pp_goal_text').innerText = 'Blocked';
          // goal--;
          ballReduce();
          playNoGoal();
          ts++;

        } else {
          goal++;
          document.querySelector('.pp_goal_text').innerText = 'Goal';
          closureTotal('1');
          playGoal();
          (closureTotal('4') <= 10) ? ts = ts + 2 : ts = ts + 3;
        }
        goalAnimation();
        document.getElementById('pp_score').innerText = goal;

        bounceBall(lastX, lastY);
        // clearBall();
      }
    });
  }
  function goalAnimation() {
    gsap.fromTo('.pp_goal_text', { delay: .3, display: 'none', opacity: 0, scale: .5 }, { display: 'flex', opacity: 1, scale: 1, duration: .5 });
    gsap.set('.pp_goal_state', { display: 'flex' });
    gsap.to('.pp_goal_text', { delay: 1, display: 'none', opacity: 0, scale: .5, duration: .3 });
  }


  function clearBall() {
    if (closureRemaining('4') > 0) {
      setTimeout(() => {
        gsap.to(".pp_ball", { opacity: 1, y: 0, x: 0, scaleX: 1, scaleY: 1, duration: .001 });
        gsap.set('.pp_shadow', { display: 'block', x: 0, y: 0 });
        gsap.set('.pp_ball_replica', { display: 'block', x: 0, y: 0 });
        shoot = false;
        dragged = false;
      }, 600);
    } else {
      // console.log('ball empty');
      gsap.timeline({ delay: .5 })
        .to('.pp_keeper', { display: 'none', duration: .2 })
        .to('.pp_lead_before', { display: 'block', opacity: 1, duration: .5 }, '<')
        .to('.pp_lead_before', { display: 'none', opacity: 0, duration: .5 }, ">1.5")
        .fromTo('.pp_finalScore', { display: 'none', opacity: 0, scale: .5 }, { display: 'flex', opacity: 1, scale: 1, duration: .5 }, '<.2')
        .fromTo('.pp_againBtn', { display: 'none', opacity: 0, scale: .5 }, { display: 'flex', opacity: 1, scale: 1, duration: .5 }, '<');
      document.getElementById('finalScore').innerText = closureTotal('4');

    }

  }





  function bounceBall(posX, posY) {
    // console.log('baseLine:', posX, posY);
    difference = posY - bounceBaseY;

    if (posX > 25) {
      moveX = [30, 50, 70, 90, 110];
    } else if (posX < -25) {
      moveX = [-30, -50, -70, -90, -110];
    } else if (posX < 0) {
      moveX = [-20, -30, -40, -50, -60];
    } else if (posX >= 0) {
      moveX = [20, 30, 40, 50, 60];
    }

    gsap.timeline({ defaults: { ease: Linear.easeNone }, onComplete: clearBall })
      .to(".pp_ball", { delay: .01, opacity: 1, y: bounceBaseY, x: posX + moveX[0], duration: .2 })

      .to(".pp_ball", { opacity: 1, y: bounceBaseY + (difference / 1.5), x: posX + moveX[1], duration: .15 }, ">")

      .to(".pp_ball", { opacity: .8, y: bounceBaseY, x: posX + moveX[2], duration: .15 }, ">")

      .to(".pp_ball", { opacity: .5, y: bounceBaseY + (difference / 3), x: posX + moveX[3], duration: .15 }, ">")

      .to(".pp_ball", { opacity: 0.2, y: bounceBaseY, x: posX + moveX[4], duration: .15 }, ">");
  }

  manAnimation(.4);
  function manAnimation(moveDuration) {
    gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: Linear.easeNone } })
      .to('.pp_keeper', { x: 50, duration: moveDuration })
      .to('.pp_keeper', { x: -50, duration: 2 * moveDuration })
      .to('.pp_keeper', { x: 50, duration: 2 * moveDuration })
      .to('.pp_keeper', { x: -50, duration: 2 * moveDuration })
      .to('.pp_keeper', { x: 0, duration: moveDuration });

  }

  function ballReduce() {
    document.getElementById('ball_' + remainingBall).style.display = 'none';
    remainingBall--;
    closureRemaining('2');
  }
}



document.querySelector('.pp_submit_btn').addEventListener('click', function () {
  // gsap.set('',{});
  var name = getValue('name');
  var mobileNum = getValue('mobile_no');
  var age = getValue('age');

  if (checkMobileNumber()) {
    if (checkAge() && checkName() && checkDistrict()) {
      gsap.to('.pp_slide_3', { display: 'none' });
      gsap.to('.pp_slide_2', { display: 'none' });
      gsap.to('.pp_slide_4', { display: 'block' });
      // gsap.to('.pp_finalPage', { display: 'flex', opacity: 1 });
      submitForm(name, mobileNum, age);
    }
  }
})

function checkName() {
  var name = getValue('name');
  if (name != '') {
    document.getElementById('name').classList.add('success');
    document.getElementById('name').classList.remove('error');
    return true;
  }
  document.getElementById('name').classList.add('error');
  document.getElementById('name').classList.remove('success');
  return false;
}

function checkAge() {
  var age = getValue('age');
  if (age > 2 && age <= 100) {
    document.getElementById('age').classList.add('success');
    document.getElementById('age').classList.remove('error');
    return true;
  }
  document.getElementById('age').classList.add('error');
  document.getElementById('age').classList.remove('success');

  return false;
}

function submitForm(name, mobileNum, age) {
  var xhttp;
  if (name == "" || mobileNum == "" || age == "") {
    return;
  }
  districtValue = getValue('district')
  const formData = new FormData();
  formData.append("name", name);
  formData.append("mobile", mobileNum);
  formData.append("age", age);
  formData.append("goal", closureTotal('4'));
  formData.append("link", window.top.location.href);
  formData.append("flagCode", flagCode);
  formData.append("districtValue", districtValue);
  formData.append("ts", ts);
  // console.log('ts:', ts);


  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      if ('success' == this.responseText) {
        console.log('successfully inserted');
        showLeaderBoard();
      }
    }
  };

  xhttp.open("POST", 'https://ms.purplepatch.online/2023/tvs/flick-football-game/database/data.php', true);
  xhttp.send(formData);
}


function checkMobileNumber() {
  var mobileNum = getValue('mobile_no');
  var mobilePattern = /^(?:\+88|88)?(01[3-9]\d{8})$/;

  if (mobileNum.match(mobilePattern)) {
    document.getElementById('mobile_no').classList.remove('error');
    document.getElementById('mobile_no').classList.add('success');

    return true;
  } else {
    document.getElementById('mobile_no').classList.add('error');
    document.getElementById('mobile_no').classList.remove('success');


    return false;

  }
}

function checkDistrict() {
  var districtVal = getValue('district');
  // console.log(districtVal);

  if (districtVal != '') {

    document.querySelector('#district').classList.remove('error');
    document.querySelector('#district').classList.add('success');

    return true;
  } else {
    document.querySelector('#district').classList.add('error');
    document.querySelector('#district').classList.remove('success');
    return false;

  }
}

// leaderboard operation
function showLeaderBoard() {
  tbodyHtml = '';
  rank = 1;
  if (tournament) {
    fetchUrl = 'https://ms.purplepatch.online/2023/tvs/flick-football-game/database/tournamentLeader.php';
  }
  else {
    fetchUrl = 'https://ms.purplepatch.online/2023/tvs/flick-football-game/database/todayLeader.php';
  }
  fetch(fetchUrl)
    .then(res => res.json())
    .then(data => dataToTable(data))
}



function dataToTable(data) {
  tbodyHtml = '';
  data.forEach(element => {
    tbodyHtml += `<tr>
  <td>${rank++}</td>
  <td>${element.NAME}</td>
  <td class='tdTeamFlag' style="margin:0;"><img src='//ms.purplepatch.online/2023/tvs/flick-football-game/slide5/flagsSlide/topflags/${element.FLAG_CODE}.png'  style="width: 100%; height: 24px;"></td>
  <td>*-${element.MOBILE.slice(-6)}</td>
  <td>${element.GOAL}</td>
</tr>`
  });
  document.querySelector('#tbodyAdd').innerHTML = tbodyHtml;
}

function showTodayLeader() {
  gsap.set(['.pp_today2', '.pp_tournament2'], { display: 'none' });
  gsap.set(['.pp_today1', '.pp_tournament1'], { display: 'block' });

  tournament = false;
  showLeaderBoard();
}
function showTournamentLeader() {
  gsap.set(['.pp_today1', '.pp_tournament1'], { display: 'none' });
  gsap.set(['.pp_today2', '.pp_tournament2'], { display: 'block' });

  tournament = true;
  showLeaderBoard();
}


document.querySelector('.pp_today2').addEventListener('click', showTodayLeader);
document.querySelector('.pp_tournament1').addEventListener('click', showTournamentLeader);

function playGoal() {
  document.getElementById("goal").play();
}
function playNoGoal() {
  document.getElementById("noGoal").play();
}

document.getElementById("goal").volume = .2;
document.getElementById("noGoal").volume = .2;



// Add remove Get set
function addClass(elementId, className) {
  document.getElementById(elementId).classList.add(className);
}
function removeClass(elementId, className) {
  document.getElementById(elementId).classList.remove(className);
}

function getValue(elementId) {
  return document.getElementById(elementId).value;
}
function setInnerHtml(elementId, text) {
  document.getElementById(elementId).innerHTML = text;
}


district = ['Dhaka', 'Barguna',
  'Barishal',
  'Bhola',
  'Jhalokati',
  'Patuakhali',
  'Pirojpur',
  'Bandarban',
  'Brahmanbaria',
  'Chandpur',
  'Chattogram',
  'Cumilla',
  "Cox's Bazar",
  'Feni',
  'Khagrachhari',
  'Lakshmipur',
  'Noakhali',
  'Rangamati',
  'Faridpur',
  'Gazipur',
  'Gopalganj',
  'Kishoreganj',
  'Madaripur',
  'Manikganj',
  'Munshiganj',
  'Narayanganj',
  'Narsingdi',
  'Rajbari',
  'Shariatpur',
  'Tangail',
  'Bagerhat',
  'Chuadanga',
  'Jashore',
  'Jhenaidah',
  'Khulna',
  'Kushtia',
  'Magura',
  'Meherpur',
  'Narail',
  'Satkhira',
  'Jamalpur',
  'Mymensingh',
  'Netrokona',
  'Sherpur',
  'Bogura',
  'Joypurhat',
  'Naogaon',
  'Natore',
  'Chapai Nawabganj',
  'Pabna',
  'Rajshahi',
  'Sirajganj',
  'Dinajpur',
  'Gaibandha',
  'Kurigram',
  'Lalmonirhat',
  'Nilphamari',
  'Panchagarh',
  'Rangpur',
  'Thakurgaon',
  'Habiganj',
  'Moulvibazar',
  'Sunamganj',
  'Sylhet']



districtList = '';
district.forEach(element => {
  districtList += `<option value="${element}">${element}</option>`
});
document.getElementById('district').innerHTML = districtList;
  $('.js-searchBox').searchBox();

  // document.querySelector('#district').addEventListener('change',checkDistrict)
  // document.querySelector('#district').addEventListener('keyup',checkDistrict)