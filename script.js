let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const userGuess = parseInt(guessInput.value);

    if (userGuess < randomNumber) {
        alert("Number is too low, try a higher number!");
    } else if (userGuess > randomNumber) {
        alert("Number is too high, try a lower number!");
    } else {
        alert("Number is correct! Congratulations!");
    }
}