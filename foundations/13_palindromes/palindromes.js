const palindromes = function (string) {
    //given a string, the reverse is equal to it

   let newStr = ""
    const punctuation = [",", ".", "!", "/" , "?", "`"]
    for (let i = (string.length - 1); i >= 0; i--) {
        if (punctuation.includes(string[i])) {
            string = string.replace(string[i], "")
            continue;
        }
        newStr += string[i]


    }

    return newStr.toLowerCase().replace(/ /g, "") === (string.toLowerCase().replace(/ /g, ""))


};

// Do not edit below this line
module.exports = palindromes;
