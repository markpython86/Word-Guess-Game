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

var word = ["hello", "world", "mistake"];
// need to change this to a random index pick ** for now this is just a text**
var randword = 0;
//empty array for storing the guess
var wordGuess = [];


//loop for creating the blanks on the screen as the numbers of char in the word
for (var i = 0; i < word[randword].length; i++) {
        wordGuess.push("_");
  // wordGuess.replace(",", " ");
        // var x = event.keyCode;
}
 document.getElementById("underscore").innerText = wordGuess;