const { setBinary, setHexadecimal } = require('../settings');

const hexLetters = ['A', 'B', 'C', 'D', 'E', 'F'];

function InputHandler(rawUserInput) {
    let userInput = String(rawUserInput).trim().toUpperCase().replaceAll(' ', '');

    let inputSorted = getInputArray(userInput);

    return inputSorted;
}

function getInputArray(input) {

    setBinary();

    //const newArr = Array.from(String(input), Number);
    let newArr = input.toString().split('');

    //checks if user wants to quit app
    if (newArr.length === 1 && newArr[0].toLowerCase() === 'q') {
        process.exit();
    }

    //remove the hex number indicator.. '0x'
    if (newArr[0] === '0' && newArr[1] === 'X') {
        newArr = newArr.slice(2, newArr.length);
        setHexadecimal();
    }

    for (i = 0; i < newArr.length; i++) {
        newArr[i] = isHexa(newArr[i]);
    }

    //Positional Notation Method reads from right to left. 
    newArr = newArr.reverse();

    return newArr;
}

//checks if the given number/letter belongs to hexadecimal and edit accordingly
function isHexa(num) {
    if (num != 1 || num != 0) {

        if (isNaN(num)) {
            setHexadecimal();
            for (j = 0; j < hexLetters.length; j++) {
                if (num === hexLetters[j]) {
                    const newNum = Number(num = '1' + j);
                    return newNum;
                }
            }

            return NaN;
        }
    }

    return Number(num);
}

module.exports = InputHandler;