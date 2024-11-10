const reverseString = function(string) {
    let finalString = ''
    const string_array = [...string];
    for (let i = string_array.length - 1; i >= 0; i--) {
        finalString += string_array[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
