var word =           // Word list
    [
        "STING",
        "AEROSMITH",
        "MEGADETH",
        "NIRVANA",
        "QUEEN",
        "METALLICA",
        "EAGLES"
    ];

const lives = 10;            // Maximum number of tries player has

var guessedLetters = [];        // Stores the letters the user guessed
var randWord;           // Index of the current word in the array
var wordGuess = [];          // This will be the word we actually build to match the current word
var guessesLeft = 0;       // How many tries the player has left
var gameOver = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up

var metallica = new Audio('./assets/audio/metallica.wav');
var aerosmith = new Audio('./assets/audio/aerosmith.wav');
var megadeth = new Audio('./assets/audio/megadeth.wav');
var nirvana = new Audio('./assets/audio/nirvana.wav');
var queen = new Audio('./assets/audio/queen.wav');
var eagles = new Audio('./assets/audio/eagles.wav');
var sting = new Audio('./assets/audio/sting.wav');

// Reset our game-level variables
function gameReset() {
    guessesLeft = lives;

    // Use Math.floor to round the random number down to the nearest whole.
    randWord = Math.floor(Math.random() * (word.length));

    // Clear out arrays
    guessedLetters = [];
    wordGuess = [];

    // Make sure the hangman image is cleared
    document.getElementById("hangmanImage").src = "";
    document.getElementById("singer").src = "";

    // Build the guessing word and clear it out
    for (var i = 0; i < word[randWord].length; i++) {
        wordGuess.push("_");
    }   

    // Hide game over and win images/text
    document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
    document.getElementById("gameover").style.cssText = "display: none";
    document.getElementById("youWin").style.cssText = "display: none";

    // Show display
    updateDisplay();
};

//  Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("winTotal").innerText = wins;

    // Display how much of the word we've already guessed on screen.
    // Printing the array would add commas (,) - so we concatenate a string from each value in the array.
    var wordGuessString = "";
    for (var i = 0; i < wordGuess.length; i++) {
        wordGuessString += wordGuess[i];
    }

    //
    document.getElementById("wordGuess").innerText = wordGuessString;
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("guessedLetters").innerText = guessedLetters;
};


// Updates the image depending on how many guesses
function updateHangmanImage() {
    document.getElementById("hangmanImage").src = "assets/images/" + (lives - guessesLeft) + ".png";
};

// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function checkGuess(letter) {
    // Array to store letterPosition of letters in string
    var letterPosition = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < word[randWord].length; i++) {
        if(word[randWord][i] === letter) {
            letterPosition.push(i);
        }
    }

    // if there are no indicies, remove a guess and update the hangman image
    if (letterPosition.length <= 0) {
        guessesLeft--;
        updateHangmanImage();
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < letterPosition.length; i++) {
            wordGuess[letterPosition[i]] = letter;
        }
    }
};
// Checks for a win by seeing if there are any remaining underscores in the wordGuess we are building.
function checkIfWin() {
    if(wordGuess.indexOf("_") === -1) {
        document.getElementById("youWin").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
        wins++;
        gameOver = true;
    }
};


// Checks for a loss
function checkIfLoss()
{
    if(guessesLeft <= 0) {
        loseSound.play();
        document.getElementById("gameover").style.cssText = "display: block";
        document.getElementById("pressKeyTryAgain").style.cssText = "display:block";
        gameOver = true;
    }
}

// Makes a guess
function makeGuess(letter) {
    if (guessesLeft > 0) {
        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            checkGuess(letter);
        }
    }
    
};


// Event listener
document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(gameOver) {
        gameReset();
        gameOver = false;
    } else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toUpperCase());
            updateDisplay();
            checkIfWin();
            checkIfLoss();
            singerImage();
        }
    }
};

function singerImage(){
    document.getElementById("singer").style.cssText = "display: block";
    document.getElementById("singer").src = "assets/images/" + word[randWord] + ".jpg";
    megadeth.play();
}