const args = process.argv.slice(2);

let firstNum = Number(args[0]);
let secondNum = Number(args[1]);

function add(a, b) {
    return a + b;
};

console.log(add(firstNum, secondNum));