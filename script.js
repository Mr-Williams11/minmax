function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 1;
let max = 20;
let targetNumber = getRandomNumber(min, max);
let attempts = 0;

document.getElementById('min').textContent = min;
document.getElementById('max').textContent = max;

function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(guess) || guess < min || guess > max) {
        alert(`Please enter a valid number between ${min} and ${max}.`);
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        document.getElementById('message').innerHTML = `Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`;
        document.getElementById('message').style.color = 'green';
        disableInputAndButton();
    } else {
        let message = guess < targetNumber ? 'Try again.' : ' Try again.';
        document.getElementById('message').textContent = message;
        document.getElementById('message').style.color = 'red';
    }
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}

document.getElementById('submitGuessBtn').addEventListener('click', checkGuess);

function restartGame() {

    // Enable input and button
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;

    // Reset attempts and generate a new target number
    attempts = 0;
    targetNumber = getRandomNumber(min, max);

    // Clear input and message
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';

    // Update displayed min and max values
    document.getElementById('min').textContent = min;
    document.getElementById('max').textContent = max;
}

// Add event listener for restart button
document.getElementById('restartBtn').addEventListener('click', restartGame);
