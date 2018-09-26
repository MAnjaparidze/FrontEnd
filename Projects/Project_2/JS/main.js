let userInterface = document.getElementById("userInterface");
let canvas = document.getElementById("playGround");
let userName = document.getElementById("userName").value;


let btnEasy = document.getElementById("easy");
let btnMedium = document.getElementById("medium");
let btnHard = document.getElementById("hard");

var btns = [btnEasy, btnMedium, btnHard];

btns.forEach(function (button) {
    button.addEventListener('click', function () {
        startTheGame();

    });
});


function startTheGame() {
    $(userInterface).fadeOut();
    setInterval(function () {
        $(canvas).fadeIn();
    }, 1000);
}

class User {
    constructor(name, difficulty) {
        this.name = name;
        this.difficulty = difficulty;
    }

}




