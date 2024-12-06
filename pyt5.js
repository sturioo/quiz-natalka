let timer = 69;
let timerInterval;
let correctAnswer = '3';
let mathAnswer = 9;

function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
        document.getElementById('timer').textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            disableButtons();
            alert('Czas się skończył!');
        }
    }, 1000);
}

function checkAnswer(button, answer) {
    if (answer === correctAnswer) {
        button.classList.add('correct');
        document.getElementById('nextButton').style.display = 'inline-block';
        disableButtons();
        clearInterval(timerInterval);
        triggerConfetti();
    } else {
        button.style.backgroundColor = '#f56565';
        document.getElementById('warning').style.display = 'block';
        document.getElementById('mathPuzzle').style.display = 'block';
        document.getElementById('question').style.color = '#f56565';
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll('.options button').forEach(btn => {
        btn.disabled = true;
    });
}

function enableButtons() {
    document.querySelectorAll('.options button').forEach(btn => {
        btn.disabled = false;
        btn.style.backgroundColor = 'white';
    });
}

function checkMathAnswer() {
    const userAnswer = parseInt(document.getElementById('mathAnswer').value);
    if (userAnswer === mathAnswer) {
        document.getElementById('warning').style.display = 'none';
        document.getElementById('mathPuzzle').style.display = 'none';
        enableButtons();
        document.getElementById('question').style.color = 'white';
    } else {
        alert('Nieprawidłowa odpowiedź. Spróbuj ponownie.');
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            y: 0.6
        }
    });
}

function setNextQuestionLink(url) {
    document.getElementById('nextButton').href = url;
}

startTimer();

// Set the link for the next question
setNextQuestionLink('pyt6.html');

