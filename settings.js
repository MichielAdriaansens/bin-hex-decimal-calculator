const eventEmitter = require('events');

const calcState = new eventEmitter();

let baseNum = 2;

calcState.on('binary', () => {
    //set calculator base number to 2
    baseNum = 2;
});

calcState.on('hexadecimal', () => {
    //set calculator base number to 16
    baseNum = 16;
});

function setBinary() {
    calcState.emit('binary');
}

function setHexadecimal() {
    calcState.emit('hexadecimal');
}

function baseNumber() {
    //  console.log(baseNum);
    return baseNum;
}

module.exports = { baseNumber, setBinary, setHexadecimal };