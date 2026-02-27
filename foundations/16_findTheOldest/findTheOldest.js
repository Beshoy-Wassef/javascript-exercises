const findTheOldest = function(array) {


    const newArr = array.toSorted(function(a, b) {
        if (!a.yearOfDeath){
            a["yearOfDeath"] = new Date().getFullYear()
        }
        if (!b.yearOfDeath) {
            b["yearOfDeath"] = new Date().getFullYear()
        }

       return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    } )

    return newArr[0]

};

// Do not edit below this line
module.exports = findTheOldest;
