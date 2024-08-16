const marquee = document.querySelector('.marquee');
const pauseButton = document.getElementById('pauseButton');
const normalButton = document.getElementById('normalButton');
const fastButton = document.getElementById('fastButton');

let currentSpeed = 20; // Default speed

function updateMarqueeSpeed(speed) {
    marquee.style.animationDuration = `${speed}s`;
}

pauseButton.addEventListener('click', () => {
    marquee.style.animationPlayState = 'paused';
    console.log('done');
});

normalButton.addEventListener('click', () => {
    currentSpeed = 20;
    updateMarqueeSpeed(currentSpeed);
    marquee.style.animationPlayState = 'running';
});

fastButton.addEventListener('click', () => {
    currentSpeed = 10;
    updateMarqueeSpeed(currentSpeed);
    marquee.style.animationPlayState = 'running';
});
