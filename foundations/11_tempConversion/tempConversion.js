const convertToCelsius = function(num) {
  let faren;
  if (((num - 32) * (5/9)) != 0) {
     faren = ((num - 32) * (5/9)).toFixed(1);
  } else {
    faren = ((num - 32) * (5/9));
  }
  return Number(faren);
};

const convertToFahrenheit = function(num) {
  let faren;
  if (Number.isInteger(((Number(num) * (9/5)) + 32))){
  faren = ((Number(num) * (9/5)) + 32)
  } else {
    faren = ((Number(num) * (9/5)) + 32).toFixed(1)
  }
  
  return Number(faren)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
