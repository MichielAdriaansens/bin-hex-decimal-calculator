# Binairy/Hex to Decimal Calculator

A nodejs app that calculates a binairy number to decimal or a hexadecimal number to decimal.

e.g
0x10 = 16;
10 = 2;

The inputHandler.js processes the users input so that it can be fed into calculator.js.
settings.js changes the formula in calculator.js to binairy mode or hexadecimal mode depending on given user input.

# install

nodeJs is required or docker *see docker section below.

clone repository from github.

# how to use

1. run terminal from downloaded folder
2. in terminal type 'node app' and press enter
3. type a binairy or hexadecimal number in terminal and press enter
4. the decimal value gets returned in terminal

# docker

//install
get the image from hub.docker.com/happysoft88/bin-hex-calculator. 
in commandline type:
- $docker pull happysoft88/bin-hex-calculator

Create a container from image.
- $docker run --init -it happysoft88/bin-hex-calculator

//use
If you want to launch the app by starting a container be sure to use --interactive tag.
- $docker start --interavtive [container name | ID]