const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	let sum = 0
  for (let num of array){
    sum += num
  }
  return sum
};

const multiply = function(array) {
  return array.reduce((accum,currentNum) => {return accum * currentNum}, 1)

};

const power = function(b, e) {
  return b**e
};

const factorial = function(num) {
  let sum = 1

  if (num === 0) {
    return 1
  } 

	for (let i = 2; i <= num; i++) {
    sum *= i
  
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
