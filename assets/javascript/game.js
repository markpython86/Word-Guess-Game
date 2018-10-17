/*LogicChoose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

*Use key events to listen for the letters that your players will type.

*Display the following on the page:

*Press any key to get started!

*Wins: (# of times user guessed the word correctly).

*If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

*As the user guesses the correct letters, reveal them: m a d o _ _ a.

*Number of Guesses Remaining: (# of guesses remaining for the user).

*Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

*After the user wins/loses the game should automatically choose another word and make the user play it.

*/
console.log("we are connected!");

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


var word = ["hello", "world", "mistake"];
// need to change this to a random index pick ** for now this is just a text**
var randword = 0;
//empty array for storing the guess
var wordGuess = [];
// var makeGuess = [];
var guessedLetters = [];  



    
for (var i = 0; i < word[randword].length; i++) {
  
        wordGuess.push("_");
    }


function updateDisplay() {
    document.getElementById("underscore").innerText = "";
    for (var i = 0; i < wordGuess.length; i++) {
        document.getElementById("underscore").innerText += wordGuess[i];
    }
    document.getElementById("userchoice-text").innerText = guessedLetters;
};


document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
        // Check to make sure a-z was pressed.
        if(alphabet.indexOf(event.key.toLowerCase()) !== -1) {
            makeGuess(event.key.toLowerCase());
          console.log("working")
        }
};

function makeGuess(letter) {;
   
        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            checkGuess(letter);
        }
    
    updateDisplay();
};

// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function checkGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < word[randword].length; i++) {
        if(word[randword][i] === letter) {
            positions.push(i);
        }
    }
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            wordGuess[positions[i]] = letter;
        }
    
};
