gsap.to('.pp_copy2', { scaleX: 1.1, scaleY: 1.1, duration: .5, repeat: -1, yoyo: true })

shoot = false;
dragged = false;
minDis = 15;
overhead = 60;
missY = -90;
goalY = -60;
ballSize = .65;
shootDuration = .2;
bounceBaseY = -85;
goal = 0;
remainingBall = 3;

Draggable.create('.pp_ball_replica', {
  type: "x,y", edgeResistance: .99, cursor: 'auto', bounds: {
    top: 100, left: 30, width: 238, height: 235,
  },
  // onDragEnd: function () {
  //   gsap.to(".pp_ball_replica", { duration: .1, x: 0, y: 0 });
  // },

  onDragEnd: function () {
    py = Math.abs(this.y);
    if (py <= minDis) {
      gsap.to(".pp_ball_replica", { duration: .1, x: 0, y: 0 });
    } else if (py < overhead && (!shoot)) {
      shoot = true;
      console.log('shooting...end');
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
          console.log('shooting...ondrag');
          shootBall(this.x, py);

          shoot = true;
        }
      }, 400);
    }
    // up: for drag shot

    if (py > overhead && (!shoot)) {
      shoot = true;
      console.log('shooting...max');
      shootBall(this.x, py);

    }
  }


  // onDragStart: function () {

  //   gsap.to('.pp_copy2', { opacity: 0, duration: .5, scale: .5 })
  //   setTimeout(() => {
  //     fireWork()

  //     setTimeout(() => {
  //       // fireWork()
  //     }, 500);
  //     gsap.timeline()
  //       .to('.pp_ball', { x: -55, y: -65, duration: .5, scale: .5 })
  //       .to('.pp_canvas', { opacity: 1, display: 'block', duration: .5 }, ">")
  //       // .to('.pp_fireworks', { opacity: 0, display: 'none', duration: .5 }, ">1.5")
  //       .to(['.pp_ball', '.pp_goalPost', '.pp_ball_replica'], { opacity: 0, display: 'none', duration: .5 }, "<1.5")
  //       .to('.pp_slide_2', { opacity: 1, display: 'block', duration: .5 }, "<")
  //       .to(['.pp_bottom', '.pp_tvs', '.pp_cta'], { opacity: 1, display: 'block', duration: .7, stagger: .1 }, "<")
  //       .to('.pp_canvas', { opacity: 0, display: 'none', duration: 3 }, ">")
  //       .to('.pp_cta', { scaleX: 1.15, scaleY: 1.1, duration: .5, repeat: -1, yoyo: true },'<')



  //   }, 100);

  // }
})
ball = document.querySelector('.pp_ball')

function shootBall(checkX, checkY) {
  lastX = checkX * 1.722;
  clearInterval(dragInterval);

  if (checkY > minDis && checkY < overhead) {
    lastY = goalY;
  } else {
    lastY = missY;
  }


  gsap.to(".pp_ball", {
    y: lastY, x: lastX, scaleX: ballSize, scaleY: ballSize, duration: shootDuration, ease: Linear.easeNone,
    onComplete: function () {
      var ballRect = ball.getBoundingClientRect();
      console.log("ball: ", ballRect.left);

      goalAnimation();


      // bounceBall(lastX, lastY);
      // clearBall();
    }
  });
}
function goalAnimation() {
  gsap.to('.pp_copy2', { opacity: 0, duration: .5, scale: .5 })
    setTimeout(() => {
      fireWork()

      setTimeout(() => {
        // fireWork()
      }, 500);
      gsap.timeline()
        .to('.pp_ball', {  opacity: 0.5 })
        .to('.pp_canvas', { opacity: 1, display: 'block', duration: .5 }, ">")
        // .to('.pp_fireworks', { opacity: 0, display: 'none', duration: .5 }, ">1.5")
        .to(['.pp_ball', '.pp_goalPost', '.pp_ball_replica'], { opacity: 0, display: 'none', duration: .5 }, "<1.5")
        .to('.pp_slide_2', { opacity: 1, display: 'block', duration: .5 }, "<")
        .to(['.pp_bottom', '.pp_tvs', '.pp_cta'], { opacity: 1, display: 'block', duration: .7, stagger: .1 }, "<")
        .to('.pp_canvas', { opacity: 0, display: 'none', duration: 3 }, ">")
        .to('.pp_cta', { scaleX: 1.15, scaleY: 1.1, duration: .5, repeat: -1, yoyo: true },'<')



    }, 100);

}

function bounceBall(posX, posY) {
  console.log('baseLine:', posX, posY);
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



// fireworks

function fireWork() {

window.addEventListener("resize", resizeCanvas, false);
window.addEventListener("DOMContentLoaded", onLoad, false);
onLoad();
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var canvas, ctx, w, h, particles = [], probability = 0.04,
  xPoint, yPoint;





function onLoad() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();

  window.requestAnimationFrame(updateWorld);
}

function resizeCanvas() {
  if (!!canvas) {
    w = canvas.width = 300;
    h = canvas.height = 250;
  }
}

function updateWorld() {
  update();
  paint();
  window.requestAnimationFrame(updateWorld);
}

function update() {
  if (particles.length < 500 && Math.random() < probability) {
    createFirework();
  }
  var alive = [];
  for (var i = 0; i < particles.length; i++) {
    if (particles[i].move()) {
      alive.push(particles[i]);
    }
  }
  particles = alive;
}

function paint() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw(ctx);
  }
}

function createFirework() {
  xPoint = Math.random() * (w - 200) + 100;
  yPoint = Math.random() * (h - 200) + 80;
  var nFire = Math.random() * 50 + 25;
  var c = "rgb(255,"
    + (~~(Math.random() * 125 + 130)) + "," + (~~(Math.random() * 115 + 35)) + ")";
  for (var i = 0; i < nFire; i++) {
    var particle = new Particle();
    particle.color = c;
    var vy = Math.sqrt(100 - particle.vx * particle.vx);
    if (Math.abs(particle.vy) > vy) {
      particle.vy = particle.vy > 0 ? vy : -vy;
    }
    particles.push(particle);
  }
}

function Particle() {
  this.w = this.h = Math.random() * 2 + 1;

  this.x = xPoint - this.w / 2;
  this.y = yPoint - this.h / 2;

  this.vx = (Math.random() - 0.5) * 10;
  this.vy = (Math.random() - 0.5) * 10;

  this.alpha = Math.random() * .3 + .4;

  this.color;
}

Particle.prototype = {
  gravity: 0.05,
  move: function () {
    this.x += this.vx / 4;
    this.vy += this.gravity;
    this.y += this.vy / 4;
    this.alpha -= 0.01;
    if (this.x <= -this.w || this.x >= screen.width ||
      this.y >= screen.height ||
      this.alpha <= 0) {
      return false;
    }
    return true;
  },
  draw: function (c) {
    c.save();
    c.beginPath();

    c.translate(this.x + this.w / 2, this.y + this.h / 2);
    c.arc(0, 0, this.w, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.globalAlpha = this.alpha;

    c.closePath();
    c.fill();
    c.restore();
  }
}
}