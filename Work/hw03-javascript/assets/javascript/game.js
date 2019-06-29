// List of possible solutions.
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Select a random letter from the letter list as the current round's solution and log it to console.
var solution = letterList[Math.floor(Math.random() * letterList.length)];
	console.log("This round's solution:", solution + ".");

// Set initial game conditions.
var gameConditions = {
	"wins": 0,
	"losses": 0,
	"guessesRemaining": 9,
	"guessesSoFar": [],
}

// Reset guesses upon winning or losing.
function resetGuesses() {
	gameConditions.guessesRemaining = 9;
	gameConditions.guessesSoFar = [];
	document.getElementById("guesses-remaining").innerHTML = gameConditions.guessesRemaining;
}

// Select a new solution.
function newSolution() {
	solution = letterList[Math.floor(Math.random() * letterList.length)];
	console.log("This round's solution:", solution + ".");
}

// Log user's keystrokes to console.
document.onkeyup = function (event) {
	var userGuess = event.key.toLowerCase();
	console.log("The user pressed: " + userGuess + ".");

	// Test whether user's keystroke is a valid guess (i.e., on the list of possible solutions), and log the result to console.
	var validGuess = letterList.includes(userGuess);
	if (validGuess === false) {
		console.log("User's keystroke is not a valid guess.");
	}

// Check user's valid guesses against the solution.
	if (validGuess === true) {
		var checkCorrect = solution.includes(userGuess);

	// If the guess was incorrect, add that guess to the current round's list of "Guesses so far" and display onscreen. Subtract one from the user's number of guesses left and display onscreen.
		if (checkCorrect === false) {
			gameConditions.guessesSoFar.push(userGuess);
			document.getElementById("guesses-so-far").innerHTML = gameConditions.guessesSoFar.join(", ");
			console.log("Wrong!")
			document.getElementById("guesses-remaining").innerHTML = --gameConditions.guessesRemaining + " ";
		}
	// If the guess was correct, add one to the user's number of wins and display onscreen. Reset guesses and generate a new solution.
		if (checkCorrect === true) {
			console.log("You are correct!");
			document.getElementById("wins").innerHTML = ++gameConditions.wins;
			resetGuesses();
			newSolution();
		}
	}
	// If the user's number of guesses remaining reaches zero, add one to the number of losses and display onscreen. Reset guesses and generate a new solution.
		if (gameConditions.guessesRemaining === 0) {
			console.log("You lose!");
			document.getElementById("losses").innerHTML = ++gameConditions.losses;
			resetGuesses();
			newSolution();
		}
}