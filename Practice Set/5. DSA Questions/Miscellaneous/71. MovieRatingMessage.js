// Write a program to accept rating of the movie as double and Movie name as String.

//            Rating           =====>         Message to be displayed
//          0.0 to 2.0         =====>                 Flop
//          2.1 to 3.4         =====>               Semi hit
//          3.5 to 4.5         =====>                  Hit
//          4.6 to 5.0         =====>               Super Hit

// Sol.

var prompt = require("prompt-sync")();
let movieName = prompt("Enter the Movie Name: ");
let rating = Number(prompt("Enter the Movie Rating: "));
let result = "";

if (rating >= 0.0 && rating <= 2.0) result = `Flop`;
else if (rating >= 2.1 && rating <= 3.4) result = `Semi Hit`;
else if (rating >= 3.5 && rating <= 4.5) result = `Hit`;
else if (rating >= 4.6 && rating <= 5.0) result = "Super Hit";
else result = "Invalid rating. Please enter a rating between 0.0 and 5.0.";
console.log(`${movieName} is a ${result}.`);