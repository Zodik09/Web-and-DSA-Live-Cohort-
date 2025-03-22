var prompt = require('prompt-sync')();
let compGuess = Math.floor((Math.random() * 100) + 1);
console.log(compGuess);
let userInput
do {
    userInput = Number(prompt("Enter the number (b/w 1 to 100): "));
    if (isNaN(userInput) || userInput < 0 || userInput > 100) {
        console.error(`Invalid Number, Enter the valid number (b/w 1 to 100).`);
        continue;
    }
    else if (userInput > compGuess) {
        console.log(`Too High.`);
        continue;
    }
    else if (userInput < compGuess) {
        console.log(`Too Low.`);
        continue;
    }
    else {
        console.log(`Congrats you have guessed the right number.`);
        break;
    }
} while (compGuess !== userInput);