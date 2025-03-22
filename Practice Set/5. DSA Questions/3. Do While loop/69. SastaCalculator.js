var prompt = require('prompt-sync')();
let result;
let restart = `y`;

do {
    let num1 = Number(prompt("Enter the first number: "));
    let num2 = Number(prompt("Enter the second number: "));
    switch (prompt("Enter the operator (+,-,*,/): ")) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:
            result = `Enter the correct operator (+,-,*,/).`;
    }
    console.log(result);
    restart = prompt("Do you want to continue or not (y or n): ");
} while (restart.toLowerCase() === `y`)