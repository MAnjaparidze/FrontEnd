var userInterface = document.getElementById("userInterface");
var menu = document.getElementById("menu");
var mainDisplay = document.getElementById("mainDisplay");
var canvas = document.getElementById("playGround");
var userName = document.getElementById("userName");

var btnMenu = document.getElementById("menuBtn");
var btnBack = document.getElementById("backBtn");
var btnEasy = document.getElementById("easy");
var btnMedium = document.getElementById("medium");
var btnHard = document.getElementById("hard");
var btnStart = document.getElementById("start");

var btns = [btnEasy, btnMedium, btnHard];       // Creating array of numbers


//#region Classes6

class User {
    constructor(name, difficulty) {
        this.name = name;
        this.difficulty = difficulty;
    }
}

// class Snake {
//     constructor(size) {
//         this.size = size;
//     }

//     drawSnake(x, y) {
//         var snakeSize = this.size;

//         canvas.fillStyle = 'green';
//         canvas.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
//         // This is the border of the square
//         canvas.strokeStyle = 'darkgreen';
//         canvas.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);

//         snake = [];

//         for (var i = size; i >= 0; i--) {
//             snake.push({ x: i, y: 0 });
//         }
//     }
// }


class Apples {
    constructor(size) {
        this.size = size;
    }

    randomAppear() {

    }

}

//#endregion Classes

btnMenu.addEventListener('click', function(){
    $("#userInterface").fadeOut();
    setInterval(function () {
        $("#menu").fadeIn();
    }, 1000);
});

btnBack.addEventListener('click', function(){
    $("#menu").fadeOut();
    setInterval(function () {
        $("#userInterface").fadeIn();
    }, 1000);
})

btnStart.addEventListener('click', function () { // Assigning Events of startTheGame function to Start Button
    startTheGame();
});


//#region Functions

function startTheGame() {       // Creating the function to fade the User interface and open the game
    $(userInterface).fadeOut();
    setInterval(function () {
        $(canvas).fadeIn();
    }, 1000);
}

//#endregion Functions




