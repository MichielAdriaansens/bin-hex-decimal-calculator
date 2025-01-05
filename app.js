require('process');
const calculator = require('./calculator/calculator.js');
const InputHandler = require('./user/inputHandler.js');


process.stdout.on('data', (rawData) => {
    const data = InputHandler(rawData);

    process.stdout.write(`> ${calculator(data)} \n`);
});

process.stdout.write(`\nHello human 🤖 
Convert binary or hexadecimal to a decimal number..
Type or paste a binary/hexadecimal number and press Enter.
Ctrl + C to exit (or type q and press enter).\n\n>`);