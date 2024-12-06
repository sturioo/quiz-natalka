function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('visible');
}

function hideElement(id) {
    document.getElementById(id).classList.remove('visible');
    document.getElementById(id).classList.add('hidden');
}

function showQuestion() {
    hideElement('congratulations');
    showElement('questionContainer');
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function showResult() {
    hideElement('questionContainer');
    showElement('result');
    setTimeout(() => showElement('finalMessage1'), 1000);
    setTimeout(() => showElement('finalMessage2'), 3000);
    setTimeout(() => {
        const destination = document.getElementById('destination');
        destination.style.display = 'inline-block';
        typeWriter(destination, 'WARSZAWY', 0);
    }, 5000);
    setInterval(createHeart, 300);
}

function typeWriter(element, text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 150);
    } else {
        changeDestinationColor();
    }
}

function changeDestinationColor() {
    const colors = ['#ef4444', '#10b981', '#3b82f6'];
    let index = 0;
    setInterval(() => {
        document.getElementById('destination').style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 500);
}

function showBlackScreen() {
    hideElement('questionContainer');
    showElement('blackScreen');
}

function hideBlackScreen() {
    hideElement('blackScreen');
    showElement('questionContainer');
}

setTimeout(() => showElement('congrats1'), 1000);
setTimeout(() => showElement('congrats2'), 5000);
setTimeout(() => showElement('congrats3'), 9000);
setTimeout(showQuestion, 13000);

