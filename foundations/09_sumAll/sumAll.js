const sumAll = function(a, b) {
    // consider large number first
    // error check for anything that is not a positive integer
    let sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR"
    } else {
        let highest = a > b ? a: b
        let lowest = a < b ? a: b
        for (let i = lowest; i <= highest; i++){
            sum += i;

        }
        return sum;

    }
};

// Do not edit below this line
module.exports = sumAll;
