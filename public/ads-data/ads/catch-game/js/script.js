gsap.timeline()
    .set('.ppm_basket', { x: 120 })
    .to('.ppm_basket', { x: 130, duration: .5, ease: 'none', repeat: -1, yoyo: true })

Draggable.create('.ppm_basket', {
    type: 'x',
    bounds: '.ppm_container',
    inertia: true
});

// Set initial positions for fruits
gsap.set('.ppm_fruit', {
    y: -100 // Start above the container
});

// Function to animate a fruit falling
function animateFruit(fruit, index) {
    gsap.to(fruit, {
        y: '300px', // Fall to the bottom of the container
        duration: 3,
        ease: 'linear',
        repeat: -1, // Repeat indefinitely
        onRepeat: function () {
            // Reset fruit position to top after reaching the bottom
            gsap.set(fruit, { y: -100 });
        },
        delay: Math.random() * 2, // Random delay between 0 and 2 seconds
        stagger: 0.5 * index // Stagger each fruit by 0.5 seconds times its index
    });
}

// Animate each fruit with index
document.querySelectorAll('.ppm_fruit').forEach((fruit, index) => animateFruit(fruit, index));

let caughtFruits = 0;
let fruitCaughtDoneFlag = false;

// Function to check if a fruit is caught
function checkCatch() {
    const basket = document.querySelector('.ppm_basket');
    const basketRect = basket.getBoundingClientRect();
    document.querySelectorAll('.ppm_fruit').forEach(fruit => {
        const fruitRect = fruit.getBoundingClientRect();

        const overlapWidth = Math.min(fruitRect.right, basketRect.right) - Math.max(fruitRect.left, basketRect.left);
        const fruitWidth = fruitRect.right - fruitRect.left;

        if (
            fruitRect.bottom >= basketRect.top &&
            overlapWidth >= 0.6 * fruitWidth && // At least 30% overlap
            !fruit.caught // Check if the fruit has not been caught yet
        ) {
            console.log('Fruit caught, resetting position');
            gsap.killTweensOf(fruit);
            gsap.to(fruit, { opacity: 0, display: 'none', duration: .3 }); // Reset fruit position
            fruit.caught = true; // Mark the fruit as caught
            caughtFruits++;

            // Reset the caught status after a delay to allow the fruit to fall again
            setTimeout(() => {
                fruit.caught = false;
            }, 3000); // Adjust the delay as needed
        }
    });

    if (caughtFruits >= 3) {
        // gsap.to('.ppm_container', { opacity: 0, duration: 0.5, onComplete: () => {
        //     document.querySelector('.ppm_container').style.display = 'none';
        // }});
        if (!fruitCaughtDoneFlag) {
            cooking();
            fruitCaughtDoneFlag = true;
            gsap.ticker.remove(checkCatch);
        }
    }
}


function cooking(){
    // Disable the draggable functionality of the basket
    const basketDraggable = Draggable.get('.ppm_basket');
    if (basketDraggable) {
        basketDraggable.disable();
    }

    gsap.killTweensOf('.ppm_basket')
    gsap.timeline()
    .to('.ppm_bg_new', { opacity: 1, display: 'block', duration: .5 })
    .to('.ppm_game_slide', { opacity: 0, display: 'none', duration: .5 })
    .to('.ppm_basket', { x:80,y:-75,duration:.5})
    .to('.ppm_fire', { display: 'block',opacity: 1, duration: .5 })
    .to('.ppm_steam_container', { opacity: 1, display: 'block', duration: .5 },'>.5')
    .add(fruitCaughtDone,'>2')

}
// Check for catches every 100ms
gsap.ticker.add(checkCatch);

function fruitCaughtDone() {
    console.log('fruitCaughtDone');
    gsap.timeline()
        .to(['.ppm_basket','.ppm_steam_container','.ppm_fire'], { opacity: 0, display: 'none', duration: .5 })
        .to('.ppm_bg_new', { opacity: 0, display: 'none', duration: .5 },'<')
        .fromTo('.ppm_rectangle', { display: 'none', y: '100%' }, { display: 'block', y: '0%', duration: .5 })
        .fromTo('.ppm_model', { display: 'none', x: '100%', opacity: 0 }, { display: 'block', x: '0%', opacity: 1, duration: 1 })
        .fromTo('.ppm_box', { display: 'none', x: '-100%', opacity: 0 }, { display: 'block', x: '0%', opacity: 1, duration: 1 }, '<')
        .fromTo('.ppm_text', { display: 'none', y: '-100%', opacity: 0 }, { display: 'block', y: '0%', opacity: 1, duration: 1,onComplete:()=>{
            gsap.to('.ppm_text', { scale:1.05, duration: 1, repeat: -1, yoyo: true })
        }}, '<.5')
        .fromTo('.ppm_gas', { display: 'none', x: '100%', opacity: 0 }, { display: 'block', x: '0%', opacity: 1, duration: .5 ,onComplete:()=>{
            gsap.to('.ppm_gas', { scale:1.05, duration: 1,y:-4, repeat: -1, yoyo: true })
        }}, '<')
}



