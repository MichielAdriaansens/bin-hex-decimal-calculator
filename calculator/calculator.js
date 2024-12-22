let { baseNumber } = require('../settings');

function calculator(inputArr) {
    let sum = 0;

    for (i = 0; i < inputArr.length; i++) {
        let num = inputArr[i];
        let exponent = i;

        let decimal = formula(num, baseNumber(), exponent)
        sum += decimal;
    }

    return sum;
}

//Positional notation method.. Binary: x * 2^index /Hex: x * 16^index
function formula(x, base, exp) {
    let output = x * Math.pow(base, exp);

    return output;
}
module.exports = calculator;