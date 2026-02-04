const removeFromArray = function(array, ...remove) {
  const Args = Array.from(remove)
  let newArr = array.filter((element) => !Args.includes(element))
  return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
