
    // elpements
    var bg = document.getElementById("bg");

    // vars
    var brushSize = 40;
    var w = 600;
    var h = 500;

    var innerSize = 0.94;

    var gridArray = [];
    var gridHits = {
        cur: 0,
        total: 0,
        needed: 0.7
    }

    var image = new Image();
    var canvas = document.getElementById("ctx");
    var ctx = canvas.getContext("2d");

    // var canvasDark = document.getElementById("ctxDark");
    // var ctxDark = canvasDark.getContext("2d");

    var mouseStatus = 'none';
    var mouseStatus2 = 'none';
    var mousePos = {x:0, y:0};
    var cursorAnimInt;

    function init(){
        animate();
        var scale = 2;

        ctx.drawImage(image, -((1-1)*w/2), -(1-1)*h/2, w*1, h*1);
        ctx.globalCompositeOperation='destination-out';

        setGrid();
        showOver();
        var revealCont = document.getElementById("bg1");
        revealCont.style.backgroundImage = "url('"+rSrc+"')";
        revealCont.style.backgroundSize = "100% 100%";
    }

    function setGrid(){
        var w = canvas.offsetWidth;
        var h = canvas.offsetHeight;
        // w = 300;
        // h = 480;
        var b = brushSize;
        //console.log(w, h, b)

        var c = Math.round( w / b );
        var r = Math.round( h / b );
        //console.log(c, r);

        var wS = (w-(c-1)*b)/2 + 0;
        var hS = (h-(r-1)*b)/2 + 0;

        for(var i=0; i<c; i++){
            gridArray.push([]);
            for(var j=0; j<r; j++){
                var pos = {
                    x: wS + b*i,
                    y: hS + b*j,
                    hit: false
                }
                gridArray[i].push(pos);
            }
        }

        gridHits.total = c*r;
    }

    function showOver(){
        
            addEvents();
    }

    var inverseLoop = false;


    function animate(time) {
        //requestAnimationFrame(animate);
        requestAnimFrame(animate);
        TWEEN.update(time);
      }

      // requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                  window.setTimeout(callback, 1000 / 60);
              };
    })();

    function otherVal(val){
        if(val){
            return false;
        } else {
            return true;
        }
    }

    function showFireworks(){
        // createFirework(83,56,2,3,null,null,null,null,false,true);
    }

    function endErase(){
        changeOpacity(canvas, 0 , 500, 0)
        var steps = Math.floor(canvas.offsetHeight / brushSize)*2 + 5;
        //console.log(steps)
        var curStep = 1;
        var side = "right";

        ctx.beginPath();
        ctx.lineWidth = brushSize*2;
        ctx.lineCap = 'round';
        ctx.moveTo(0, 0);

        hideOverEl();

        // ctxDark.beginPath();
        // ctxDark.lineWidth = brushSize*2*innerSize;
        // ctxDark.lineCap = 'round';
        // ctxDark.moveTo(0, 0);

        showFireworks();

        var eraseInt = setInterval(
            function(){
                var x, y;
                switch(side){
                    case "left":
                        y = 0;
                        x = brushSize*curStep;
                        side = "right";
                        break;
                    case "right":
                        //x = canvas.offsetWidth;
                        x = 0;
                        y = brushSize*curStep;
                        side = "left";
                        break;
                }

                ctx.lineTo(x, y);
                ctx.stroke();

                // ctxDark.lineTo(x, y);
                // ctxDark.stroke();

                if(curStep == steps){
                    clearInterval(eraseInt);
                }
                curStep++;
            }, 30
        );
    }

    function clickPos(x, y){
        ctx.fillRect(x-2,y-2,5,5);
    }

    /* 
        E V E N T S
    */

    var ctxArea = document.getElementById("ctx");

    function addEvents(){
        // console.log("addEvents")
        //ctxArea.addEventListener("click", mouseClick);
        ctxArea.addEventListener("mousedown", mouseDown);
        ctxArea.addEventListener("mouseup", mouseUp);
        ctxArea.addEventListener('mousemove', mouseMove);
        //ctxArea.addEventListener('mouseleave', mouseLeave);

        ctxArea.addEventListener('touchstart', touchDown);
        ctxArea.addEventListener("touchend", touchUp);
        ctxArea.addEventListener("touchmove", touchMove);
    }

    var lastPoint = {x:-1, y:-1};
    var firstPoint = true;

    function showLine(x, y){
        if(lastPoint.x != -1){
            ctx.beginPath();
            ctx.lineWidth = brushSize*2;
            ctx.moveTo(lastPoint.x, lastPoint.y);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    function showPoint(x, y){
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.arc(x, y, brushSize, 0, 2*Math.PI);
        ctx.fill();

        // ctxDark.beginPath();
        // ctxDark.fillStyle = '#000000';
        // ctxDark.arc(x, y, brushSize*innerSize, 0, 2*Math.PI);
        // ctxDark.fill();

        for(var i=0;i<gridArray.length; i++){
            for(var j=0;j<gridArray[i].length; j++){
                var x = gridArray[i][j].x;
                var y = gridArray[i][j].y;
                if((!gridArray[i][j].hit) && (ctx.isPointInPath(x, y))) {
                    gridArray[i][j].hit = true;
                    gridHits.cur++;
                    //console.log( gridHits.cur, gridHits.total );
                    if((gridHits.cur > gridHits.total*gridHits.needed) && (!revealed)){
                        // end scratch
                        revealBehind();
                        revealed = true;
                    }
                }        
            }
        }
    }

    var ft = false;

    function hideOver(){
        
        if(!ft){
            document.getElementById("scratch").style.display="none";
            setTimeout(endScratchIfInactive, 3000);

            // hideOverEl();


            ft = true;
        }
    }

    function endScratchIfInactive(){
        if(!revealed){
            revealBehind();
            revealed = true;
        }            
    }

    function hideOverEl(){
        console.log("hideOverEl");
        document.querySelector('.lead_box').style.display = 'block';
        var val2 = { val: 1 };
        var val1 = 0;
        var el = document.getElementById("over");
        var tween = new TWEEN.Tween(val2)
        .to({val: val1 }, 1000)
        .onUpdate(function(){
            el.style.opacity = this.val;
        })
        .start()
        .onComplete(function() {
        })


        var val2b = { val: 1 };
        var val1b = 0;
        var elb = document.getElementById("endAnimCont");
        var tween = new TWEEN.Tween(val2)
        .to({val: val1b }, 1100)
        .onUpdate(function(){
            var s = 0.85 + 0.15 * (1-this.val);
            moveVerScaleEl(elb, 0, s);
        })
        .easing(TWEEN.Easing.Cubic.Out)
        .start()
        .onComplete(function() {
        })

    }

    function changeOpacity(el, val, dur, delay){
        var val1, val2;
        if (val == 0){
            val2 = { val: 1 };
            val1 = 0;
        } else { 
            val2 = { val: 0 };
            val1 = 1;
        }

        var tween = new TWEEN.Tween(val2)
        .to({val: val1 }, dur)
        //.easing(TWEEN.Easing.Sinusoidal.In)
        .onUpdate(function(){
          // el.style.opacity = this.val;
          // var overEl = document.getElementById("darkOver");
          // overEl.style.opacity = this.val*0.5;
        })
        .delay(delay)
        .start()
        .onComplete(function() {
        })
    }


    function moveEl(el, side, dist, dur, delay, ease){
        var moveDist;
        switch(side){
            case "right":
                moveDist = dist;
                break;
            case "left":
                moveDist = -dist;
                break;
        }

        moveHor(el, dist);

        var val2 = { val: 1 };
        var val1 = 0;
        var tween = new TWEEN.Tween(val2)
        .to({val: val1 }, dur)
        .easing(ease)
        .onUpdate(function(){
            var val = this.val * moveDist;
            moveHor(el, val);
            el.style.opacity = 1-this.val;
        })
        .delay(delay)
        .start()
        .onComplete(function() {
        })
    }

    function moveHor(el, val){
        el.style.msTransform = "translate("+val+"px, 0px)";
        el.style.webkitTransform = "translate("+val+"px, 0px)";
        el.style.transform = "translate("+val+"px, 0px)";
    }

    function moveVer(el, val){
        el.style.msTransform = "translate(0px, "+val+"px)";
        el.style.webkitTransform = "translate(0px, "+val+"px)";
        el.style.transform = "translate(0px, "+val+"px)";
    }

    var ftEvent = false;
    function mouseDown(e){
        if(!ftEvent){
            ftEvent = true;
        }
        scratching = true;
        mouseStatus = 'down';
        firstPoint = false;

        hideOver();

        x = e.offsetX;
        y = e.offsetY;
        showPoint(x, y);
    }
    function mouseUp(e){
        scratching = false;
        firstPoint = true;
        mouseStatus = 'none';
        lastPoint.x = -1;
    }
    function mouseMove(e){
        x = e.offsetX;
        y = e.offsetY;
        mousePos.x = x;
        mousePos.y = y;

        if (mouseStatus == 'down'){
            showPoint(x, y);
            showLine(x, y);
            lastPoint.x = x;
            lastPoint.y = y;
        }
    }

    var ftTouch = false;

    function touchDown(e){
        if(!ftEvent){
            ftEvent = true;
        }
        ftTouch = true;
        scratching = true;
        mouseStatus = 'down';
        document.documentElement.style.overflow = 'hidden';
        e.preventDefault();
        firstPoint = false;

        hideOver();


        x = e.offsetX * 2;
        y = e.offsetY * 2;
        showPoint(x, y);
    }

    function touchUp(e){
        scratching = false;
        mouseStatus = 'none';
        document.documentElement.style.overflow = 'auto';
        e.preventDefault();
        lastPoint.x = -1;
    }

    function touchMove(e){
        mouseStatus2 = 'move';

        element = document.getElementById("ctx");
        var rect = element.getBoundingClientRect();

        var touch = e.touches[0];
        var x = touch.clientX - rect.left;
        var y = touch.clientY - rect.top;

        x = x  * 2;
        y = y  * 2;

        mousePos.x = x;
        mousePos.y = y;

        if (mouseStatus == 'down'){
            showPoint(x, y);
            showLine(x, y);
            lastPoint.x = x;
            lastPoint.y = y;
        }

        e.preventDefault();
    }

    var scratching = false;
    var scrCur = 0;
    var scrNeed = 1500;
    var revealed = false;

    function activateControls(){
    }

    function outBack(n, s){
      //var s = 1.70158;
      return --n * n * ((s + 1) * n + s) + 1;
    };

    function moveVerScaleEl(el, y, scale){
        el.style.msTransform = "scale("+scale+") translate(0px, "+y+"px)";
        el.style.webkitTransform = "scale("+scale+") translate(0px, "+y+"px)";
        el.style.transform = "scale("+scale+") translate(0px, "+y+"px)";
    }

    function revealBehind(){
        ctxArea.removeEventListener("mousedown", mouseDown);
        ctxArea.removeEventListener("mouseup", mouseUp);
        ctxArea.removeEventListener('mousemove', mouseMove);
        ctxArea.removeEventListener('touchstart', touchDown);
        ctxArea.removeEventListener("touchend", touchUp);
        ctxArea.removeEventListener("touchmove", touchMove);

        // endErase();
        setTimeout(activateClickTag, 1000);
        setTimeout(endErase, 50);
        var val = 1;
        var valDec = 0.02; // didesnis sk greiciau baigiasi perejimas


        var val2 = { val: 0 };
        var tween = new TWEEN.Tween(val2)
        .to({val: 1 }, 900)
        .onUpdate(function(){
            // console.log(1, this.val);
            // var el = document.getElementById("end_text");
            // el.style.opacity = this.val;
            // var s = this.val;
            // moveVerScaleEl(el, 0, s);
        })
        .easing(TWEEN.Easing.Quadratic.Out)
        .delay(500)
        .start()
        .onComplete(function() {
        })
    }

    function activateClickTag(){
        // ctxArea.addEventListener("click", clickTagEvent);
    }

    function clickTagEvent(e){
        // window.open(ctaUrl);
    }

    /* 
        L O A D
    */

    image.onload = function() {
        countLoad();
    };
    image.src = '//ms.purplepatch.online/tvs/scratch/images/bg2.jpg';

    var d = new Date();
    var n = d.getDay() + 1;

    var nameValue, mobValue, nameOk, mobileOk;
    var nameBox = document.querySelector('.name_box');
    var numberBox = document.querySelector('.tel_box');
    var jelaBox = document.querySelector('.jela_box');
    var choiceBox = document.querySelector('.choice_box');
    var submitBtn = document.querySelector('.input_btn');

    var message = document.querySelector('.message');





    nameBox.onkeyup = function(){
        // nameValue= this.value.replace(/^[a-zA-Z ]+}$/);
        // var nameRegex= /^[a-zA-Z ]+$/.test(nameValue);
        nameValue= this.value.replace(/^[^\d.,]+}$/);
        var nameRegex= /^[^\d.,]+$/.test(nameValue);
        if (nameRegex){
            nameBox.style.border="2px solid #008000";
            nameBox.style.color="#05509e";
            nameOk=nameRegex;
            // messageBox.innerHTML ="It's valid name ";
            // messageBox.style.color="#ffffff";
        }
        else{
            nameBox.style.border="2px solid #f00";
            nameBox.style.color="#f00";
            // messageBox.innerHTML ="Give a valid name";
            // messageBox.style.color="#f00";
            nameOk=null;
        }
        setTimeout(()=>nameBox.style.borderWidth="1px",3e3)
    }

    numberBox.onkeyup = function () {
        mobValue= this.value.replace(/([^0-9\+]+)?(\+88)?([^0-9\+]+)?/ig, '');
        var res= /^(\+88)?(01[3-9]{1})([0-9]{8})+$/.test(mobValue);
        if(res){
            numberBox.style.border="2px solid #008000";
            numberBox.style.color="#05509e";
            mobileOk=res;
            // messageBox.innerHTML ="It's valid number ";
            // messageBox.style.color="#ffffff";
        }else{
            numberBox.style.border="2px solid #f00";
            numberBox.style.color="#f00";
            // messageBox.innerHTML ="Give a valid BD Number";
            // messageBox.style.color="#f00";
            mobileOk=null;
        }
        setTimeout(()=>numberBox.style.borderWidth="1px",3e3)
    }







    var submitted = false;
    submitBtn.addEventListener("click", submitNumber);
    function submitNumber(){
        var xhttp = new XMLHttpRequest();
        if(!submitted && mobileOk){
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    submitted=true;
                }
            };
            xhttp.open("POST", 'https://ms.purplepatch.online/tvs/scratch/info/index.php', true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.send('data='+[nameValue, mobValue, jelaBox.value, choiceBox.value, 'https://www.bd-pratidin.com/']);
            // xhttp.send('data='+[nameValue, mobValue, jelaBox.value, choiceBox.value, window.top.location.href]);
            // console.log(nameValue+' '+mobValue+' '+jelaBox.value+' '+choiceBox.value+' '+window.top.location.href);

            nameBox.style.display = 'none';
            numberBox.style.display = 'none';
            submitBtn.style.display = 'none';
            document.querySelector('.lead_box2').style.display = 'block';
            message.style.opacity = 1;
        }
        else{
            messageBox.innerHTML ="Field is Empty!";
            messageBox.style.color="#f00";
        }
    }


    var land = document.querySelector('.landing');

    land.addEventListener('click',()=>{
        window.open(ctaUrl,'_blank');
    });

