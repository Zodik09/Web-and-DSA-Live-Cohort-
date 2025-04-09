// Ques.70. You need to write a program where the user inputs an amount in Indian Rupees, and the program should output the number of currency notes required to make up that amount using the largest denominations first. Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1

// Example 1:

// Input:
// Amount: 4327

// Output:
// ₹2000x2
// ₹500x 0
// ₹200x1
// ₹100x1
// ₹50× 0
// ₹20x1
// ₹10x 0
// ₹5x1
// ₹2×1
// ₹1×0

// Sol:

var prompt = require("prompt-sync")();
let rupees = Number(prompt("Enter the amount: "));

let money = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

for (const note of money) {
    let count = Math.floor(rupees / note)
    rupees %= note;
    console.log(`₹${note} X ${count}`);
}
