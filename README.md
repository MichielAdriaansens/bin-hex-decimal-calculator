# Binairy/Hex to Decimal Calculator

A nodejs app that calculates a binairy number to decimal or a hexadecimal number to decimal.

e.g
0x10 = 16;
10 = 2;

The inputHandler.js processes the users input so that it can be fed into calculator.js.
settings.js changes the formula in calculator.js to binairy mode or hexadecimal mode depending on given user input.

# install

(nodeJs is required)

clone repository from github.

# how to use

1. run terminal from downloaded folder
2. in terminal type 'node app' and press enter
3. type a binairy or hexadecimal number in terminal and press enter
4. the decimal value gets returned in terminal

# room for improvement

- Settings get set to binairy mode(formula's base number set to 2) at start of each call. Even when input is a hex value.
- O(n2) nested array in inputHandler.js
