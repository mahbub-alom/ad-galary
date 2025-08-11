const leftControl = document.querySelector(".left_i");
const rightControl = document.querySelector(".right_i");
const pauseButton = document.querySelector(".pause_i");
const playButton = document.querySelector(".play_i");
const wrapper = document.querySelector(".ppa_wrapper");
const images = document.querySelectorAll(".ppa_wrapper > div:not(.controls)");
const audioElements = document.querySelectorAll('audio');
const controls = document.querySelectorAll('controls');

let currentImageIndex = 0;
let startX = 0;
let endX = 0;

// audioElements[0].play();


function showImage(index, swipeDirection) {
    images.forEach((img, idx) => {
        if (idx === index) {
            img.classList.remove("ppa_hidden");
            if (swipeDirection === 'left') {
                img.classList.add("swipe_left_animation");
                img.classList.remove("swipe_right_animation");
            } else if (swipeDirection === 'right') {
                img.classList.add("swipe_right_animation");
                img.classList.remove("swipe_left_animation");
            } else {
                img.classList.remove("swipe_left_animation");
                img.classList.remove("swipe_right_animation");
            }
        } else {
            img.classList.add("ppa_hidden");
        }
    });
    

    audioElements.forEach((audio, idx) => {
        if (idx !== index) {
            audio.pause();
        }
    });


    // audioElements[index].play();



 
if (currentImageIndex === 4) {
    wrapper.querySelector('.controls').classList.add("ppa_hidden");
} else if (currentImageIndex === 0) {
    leftControl.classList.add("ppa_hidden");
    wrapper.querySelector('.controls').classList.remove("ppa_hidden");
} else {
    leftControl.classList.remove("ppa_hidden");
    wrapper.querySelector('.controls').classList.remove("ppa_hidden");
}

}



showImage(currentImageIndex);
console.log(currentImageIndex);


// audioElements[0].play();


leftControl.addEventListener("click", function() {
    submitInteraction('tap',extraData)
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    showImage(currentImageIndex);
    showPlayButton(); 
    console.log(currentImageIndex);
    if (currentImageIndex === 4) {
        wrapper.querySelector('.controls').classList.add("ppa_hidden");
    } else {
        wrapper.querySelector('.controls').classList.remove("ppa_hidden");
    }
});


rightControl.addEventListener("click", function() {
    submitInteraction('tap',extraData)
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    showImage(currentImageIndex);
    showPlayButton(); 
    console.log(currentImageIndex);

    if (currentImageIndex === 4) {
        wrapper.querySelector('.controls').classList.add("ppa_hidden");
    } else {
        wrapper.querySelector('.controls').classList.remove("ppa_hidden");
    }
});


wrapper.addEventListener("touchstart", function(event) {
    submitInteraction('tap',extraData)
    startX = event.touches[0].clientX;
});


wrapper.addEventListener("touchend", function(event) {
    submitInteraction('tap',extraData)
    endX = event.changedTouches[0].clientX;
    let deltaX = endX - startX;

    if (deltaX > 50) {
     
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        showImage(currentImageIndex, 'right'); 
        showPlayButton(); 
    } else if (deltaX < -50) {
        // Swipe left
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        showImage(currentImageIndex, 'left'); 
        showPlayButton(); 
    }
});


function showPlayButton() {
    playButton.classList.remove('ppa_hidden');
    pauseButton.classList.add('ppa_hidden');
    audioElements[currentImageIndex].play();
    
}

function showPauseButton() {
    playButton.classList.add('ppa_hidden');
    pauseButton.classList.remove('ppa_hidden');
    audioElements[currentImageIndex].pause();
}

playButton.addEventListener("click", function() {
    submitInteraction('tap', extraData);
    showPauseButton();
});
pauseButton.addEventListener("click", function() {
    submitInteraction('tap',extraData)
    // audioElements[0].play(); 
    showPlayButton();
});
