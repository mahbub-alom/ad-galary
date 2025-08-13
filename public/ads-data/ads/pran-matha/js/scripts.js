slide1 = document.querySelector('.slide1')
bg = document.querySelector('.bg')
logo = document.querySelector('.logo')
model = document.querySelector('.model')
wave1 = document.querySelector('.wave1')
wave2 = document.querySelector('.wave2')
bottle = document.querySelector('.bottle')
wave3 =  document.querySelector('.wave3')
glow = document.querySelector('.glow')
copy = document.querySelector('.copy')
slide2 = document.querySelector('.slide2')


function startAnimation() {
    setTimeout(function () {
        bottle.classList.remove('hidden');
        bottle.classList.add('bottleEntrance');
        glow.classList.remove('hidden');
        copy.classList.remove('hidden');

        setTimeout(function () {
            bottle.classList.remove('bottleEntrance');
            bottle.classList.add('hidden');
            glow.classList.add('hidden');
            copy.classList.add('hidden');
        
            startAnimation();
        }, 2000); 
    }, 1000); 
}

startAnimation();



  

  
  