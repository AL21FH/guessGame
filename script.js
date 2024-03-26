// function checkGuess() {
//     const userGuess = parseInt(prompt("Guess a number between 1 & 100"));

//     if (isNaN(userGuess)) {
//         alert("Please enter a valid number!");
//         return;
//     }

//     if (userGuess < 1 || userGuess > 100) {
//         alert("Please guess a number between 1 & 100.");
//     } else if (userGuess < randomNumber) {
//         alert("Number is too low -> try a higher number!");
//     } else if (userGuess > randomNumber) {
//         alert("Number is too high -> try a lower number!");
//     } else {
//         alert("Number is correct!");
//     }
// }

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
function checkGuess() {
    let userGuess = 0;
    while (userGuess !== randomNumber) {
        let userGuess = parseInt(prompt("Guess a number between 1 & 100"));
        if (userGuess !== null) {
            if (userGuess < 1 || userGuess > 100) {
                alert("Please guess a number between -> 1 & 100.");
            } else if (userGuess < randomNumber) {
                alert("Number is too low -> try a higher number!");
            } else if (userGuess > randomNumber) {
                alert("Number is too high -> try a lower number!");
            } else {
                alert("Number is correct! Congratulations!");
                break;
            }
        }
        else {
            alert("Please guess a number between 1 & 100.");
        }
    }
}
checkGuess();

