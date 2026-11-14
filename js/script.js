const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");

const message = document.querySelector("#message");
const attemptsDisplay = document.querySelector("#attempts");

const restartBtn = document.querySelector("#restartBtn");

let secretNumber = Math.floor(Math.random() * 100) + 1;

let attemptsRemaining = 10;

let gameOver = false;

guessForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Stop if game is already over
    if (gameOver) {
        return;
    }

    // Get user's guess
    const guess = Number(guessInput.value);

    // Validate input
    if (guessInput.value.trim() === "" || guess < 1 || guess > 100 || !Number.isInteger(guess)) {

        message.textContent = "Please enter a whole number between 1 and 100.";

        return;
    }

    // Decrease remaining attempts
    attemptsRemaining--;

    // Compare user's guess with secret number
    if (guess === secretNumber) {

        message.textContent = "Congratulations! Your guess is correct!";

        gameOver = true;

    } else if (guess < secretNumber) {

        message.textContent = "Too small! Try a larger number.";

    } else {

        message.textContent = "Too large! Try a smaller number.";

    }

    // Display remaining attempts
    attemptsDisplay.textContent = `Attempts remaining: ${attemptsRemaining}`;

    // Check whether attempts are exhausted
    if (!gameOver && attemptsRemaining === 0) {

        message.textContent = `Game over! The correct number was ${secretNumber}.`;

        gameOver = true;

    }

    // Disable input after game ends
    if (gameOver) {

        guessInput.disabled = true;

        document.querySelector("#guessBtn").disabled = true;

    }

    // Clear input for next guess
    guessInput.value = "";

});

restartBtn.addEventListener("click", function() {

    // Generate a new secret number
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset attempts
    attemptsRemaining = 10;

    // Reset game status
    gameOver = false;

    // Reset messages
    message.textContent = "Make your first guess!";

    attemptsDisplay.textContent = "Attempts remaining: 10";

    // Enable input and button
    guessInput.disabled = false;

    document.querySelector("#guessBtn").disabled = false;

    // Clear previous input
    guessInput.value = "";

});
