const Config = function() {
    this.bgColor = 'white';
    this.gameDuration = 200; // Game duration in seconds
    this.minTime = 1000; // Minimum mole appearance time
    this.maxTime = 1500; // Maximum mole appearance time
};

const config = new Config();

document.body.style.background = config.bgColor;

let duration = config.gameDuration * 1000;
let minTime = config.minTime;
let maxTime = config.maxTime;

const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const game = document.querySelector('.game');
const header = document.querySelector('.header');
const button = document.querySelector('button');
let lastHole;
let timeUp = false;
let score = 0;
let countdown;

// Function to generate random time between min and max
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Function to pick a random hole
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

// Function to make moles pop up
function peep() {
    if (score >= 4) {
        endGame(); // Stop game if 4 moles are hit
        return;
    }
    const time = randomTime(minTime, maxTime);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

// Start the game
function startGame() {
    header.style.opacity = 0;
    game.style.opacity = 1;
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    let seconds = duration / 1000;

    countdown = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(countdown);
            timeUp = true;
            button.textContent = 'START!';
            return;
        }
        button.textContent = `${seconds} S`;
    }, 1000);
}

// Function to handle mole clicks
function bonk(e) {
    if (!e.isTrusted || score >= 4) return; // Prevent cheating and stop after 4 hits
    score++;

    const mole = this;
    const sadMole = mole.parentNode.querySelector('.Sadmole');

    // Change opacity of the mole and sad mole
    mole.style.opacity = 0;  // Hide the happy mole
    sadMole.style.opacity = 1;  // Show the sad mole

    scoreBoard.textContent = score;

    if (score > 5) {
        endGame();
    }

    // After a short delay, hide the mole and reset the sad mole's opacity
    setTimeout(() => {
        mole.parentNode.classList.remove('up');  // Hide the mole (move it down)
        sadMole.style.opacity = 0;  // Hide the sad mole again
    }, 1100); // Delay for 300ms

    // Optionally, reset the mole's opacity to 1 for the next appearance
    setTimeout(() => {
        mole.style.opacity = 1;  // Reset happy mole opacity
    }, 1000); // Ensure mole reappears after a brief period
}

// Function to end the game
function endGame() {
    timeUp = true;
    clearInterval(countdown);
    button.textContent = 'START!';
    alert('Game Over! You killed 4 moles!');
    
    // Restart the game after 2 seconds
    setTimeout(() => {
        header.style.opacity = 1;
        game.style.opacity = 0;
    }, 2000);
}

// Dynamically attach event listeners to all moles
holes.forEach(hole => {
    const mole = hole.querySelector('.mole');
    mole.addEventListener('click', bonk);
});
