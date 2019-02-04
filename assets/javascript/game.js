var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var wins = 0;
var losses = 0;
var numLeft = 9;
var guessChoices = [];
var userGuess = null;

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


document.onkeyup = function(event) {
  var userGuess = event.key;
};

if(options.indexOf(userGuess)>-1) {
    
    if(userGuess == computerGuess){
        wins++;
        numLeft = 9;
        guessChoices = [];
    }
    else {
       
        if(computerChoices.includes(userGuess)){
        }
        s
        else {
            numLeft --;
            guessChoices.push(userGuess);
        }

    }
    if(numLeft ===0) {
        numLeft=9;
        losses ++;
        guessChoices =[];
    }
}

