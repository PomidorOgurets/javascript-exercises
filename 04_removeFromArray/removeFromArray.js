const removeFromArray = function(array, ...removeArguments) {
    const finalArray = [];
    for (let item of array) {
        if (!removeArguments.includes(item)) {
            finalArray.push(item);
        }
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
