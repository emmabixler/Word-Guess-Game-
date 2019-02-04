var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var numLeft = 9;
var guessChoices = [];
var userGuess= null;

console.log(document)

document.onkeyup = function(event) {
    
    numLeft--;
    
    var userGuess = event.key;

    guessChoices.push(userGuess);

    document.getElementById("guessChoices").innerHTML = guessChoices;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];

  if (options.indexOf(userGuess) > -1) {
   
    if (userGuess == computerGuess) {
      wins++;
      numLeft = 9;
      guessChoices = [];
      document.getElementById("wons").innerHTML = wins;

    } else {
     document.getElementById("lost").innerHTML = losses; 
    }

    if (numLeft === 0) {
      numLeft = 9;
      losses++;
      guessChoices = [];
      document.getElementById("guessesLeft").innerHTML = attempts;

    }
  }
};


