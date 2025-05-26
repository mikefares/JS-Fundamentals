const args = process.argv.slice(2);

let n = parseInt(args[0]);

const factorial = function(n){
    if (n < 0){
        return "Undefined";
    }
    else if (isNaN(n) || n == 0 || n == 1){
        return 1;
    }
    return n * factorial(n - 1);
};

console.log(factorial(n));
