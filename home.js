function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');

    // Randomize starting position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = -30 + 'px'; // Start above the viewport

    // Randomize size
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + 'px';

    // Randomize animation duration and delay
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;
    heart.style.animation = `fall ${duration}s ${delay}s linear infinite`;

    document.body.appendChild(heart);
}

// Create more hearts more frequently
setInterval(createHeart, 100);

// Simple fade-in animation
document.body.style.opacity = 0;
window.onload = function() {
    let opacity = 0;
    let intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.1;
            document.body.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 100);
}

