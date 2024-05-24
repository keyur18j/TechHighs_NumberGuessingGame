document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('submit-guess').addEventListener('click', submitGuess);

let lower, upper, numberToGuess, maxChances, chancesUsed = 0;

function startGame() {
    lower = parseInt(document.getElementById('lower').value);
    upper = parseInt(document.getElementById('upper').value);

    if (isNaN(lower) || isNaN(upper) || lower >= upper) {
        alert('Please enter valid lower and upper bounds.');
        return;
    }

    numberToGuess = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    maxChances = Math.ceil(Math.log2(upper - lower + 1));
    chancesUsed = 0;

    document.querySelector('.input-section').style.display = 'none';
    document.querySelector('.game-section').style.display = 'block';
    document.getElementById('message').textContent = `You've only ${maxChances} chances to guess the integer!`;
    document.getElementById('result').textContent = '';
}

function submitGuess() {
    let guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess)) {
        alert('Please enter a valid number.');
        return;
    }

    chancesUsed++;

    if (guess === numberToGuess) {
        document.getElementById('result').textContent = `Congratulations, you guessed the right number in ${chancesUsed} tries!`;
        endGame();
    } else if (chancesUsed >= maxChances) {
        document.getElementById('result').textContent = `You've used all your chances. The number was ${numberToGuess}. Better luck next time!`;
        endGame();
    } else if (guess < numberToGuess) {
        document.getElementById('result').textContent = 'You guessed too low!';
    } else if (guess > numberToGuess) {
        document.getElementById('result').textContent = 'You guessed too high!';
    }
}

function endGame() {
    document.getElementById('guess').disabled = true;
    document.getElementById('submit-guess').disabled = true;
}
