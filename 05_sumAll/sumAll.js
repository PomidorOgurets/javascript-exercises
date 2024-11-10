const sumAll = function(firstInt, secondInt) {
    if ((firstInt < 0) || (secondInt < 0)) {
        return "ERROR";
    }
    if (!Number.isInteger(secondInt - firstInt)) {
        return 'ERROR';
    }
    if (typeof(firstInt) != 'number' || typeof(secondInt) != 'number') {
        return 'ERROR';
    }
    secondInt > firstInt ? bigInt = secondInt : bigInt = firstInt;
    secondInt > firstInt ? smallInt = firstInt : smallInt = secondInt;
    return (bigInt + smallInt) / 2 * (bigInt - smallInt + 1);
};

// Do not edit below this line
module.exports = sumAll;
