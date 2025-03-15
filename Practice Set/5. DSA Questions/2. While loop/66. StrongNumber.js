let num = 40585;
let copy = num;
let sum = 0;
while (num !== 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);
    let fact = 1;
    for (let i = 2; i <= rem; i++) {
        fact *= i;
    }
    sum += fact;
}

console.log(sum === copy ? `${sum} is a strong number` : `${sum} is not a strong number`);