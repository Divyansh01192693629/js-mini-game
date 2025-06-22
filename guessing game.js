// Ask the user for the biggest number they want to guess up to
let range = prompt("enter the max number");
// If the user cancels or leaves it empty, stop the game
if (range === null || range.trim() === "") {
  console.log("Game cancelled or invalid input for range.");
} else {
  // Change the input to a number
  range = Number(range);
  // If the input is not a number or less than 1, show an error
  if (isNaN(range) || range <= 0) {
    console.log("Please enter a valid positive number for the range.");
  } else {
    // Pick a random number between 1 and the number the user gave
    let random = Math.floor(Math.random() * range) + 1;
    // Ask the user to guess the number
    let guess = prompt("guess the number between 1 and " + range);
    // Keep asking until the user gets it right, quits, or cancels
    while (true) {
      // If the user cancels, end the game
      if (guess === null) {
        console.log("Game cancelled by user.");
        break;
      }
      // If the user types 'quit', end the game
      if (guess == "quit") {
        console.log("user quit the game ");
        break;
      }
      // If the guess is correct, congratulate and stop
      if (Number(guess) === random) {
        console.log(
          "you guessed the number correctly! congratulations the number is " +
            random
        );
        break;
      } else if (Number(guess) > random) {
        // If the guess is too high, tell the user
        guess = prompt("your guess is too high than the number 😄");
      } else if (Number(guess) < random) {
        // If the guess is too low, tell the user
        guess = prompt("your guess is too low than the number 😄");
      } else {
        // If the input is not a number, ask again
        guess = prompt("Invalid input. Please enter a number or 'quit'.");
      }
    }
  }
}
