let num = 25;
let copy = num;
let numSqrt = Math.pow(num, 2);
let digit = 0;
while (num !== 0) {
    num = Math.floor(num / 10);
    digit++;
}
let lastDigit = numSqrt % Math.pow(10, digit);
console.log(lastDigit === copy ? `${copy} is an Automorphic Number.` : `${copy} is not an Automorphic Number.`);