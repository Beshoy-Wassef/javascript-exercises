const fibonacci = function(index) {
    //define the fibnoacci sequence
    //compute the fibonacci sequence up until index number
    //store it into an array
    //return the index of the array

    //fib = add 2 previous
    let sum = 0
    let arr = []
    if (index == 0){
        return 0;
    } else if (!Number(index) || index < 0) {
        return "OOPS"
    }
    for (let i = 0; i <= index; i++){
        if (i < 2){
            arr[i] = 1
        } else {
            for (let j = (i - 2); j < i; j++) {
                sum += arr[j]
            }
            arr[i] = sum
            sum = 0
        }

    }
    return arr[index - 1]
};

// Do not edit below this line
module.exports = fibonacci;
