let userInterface = document.getElementById("userInterface");
let menu = document.getElementById("menu");
let mainDisplay = document.getElementById("mainDisplay");
let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');

let btnEasy = document.getElementById("easy");
let btnMedium = document.getElementById("medium");
let btnHard = document.getElementById("hard");
let btnStart = document.getElementById("startGame");

let btns = [btnEasy, btnMedium, btnHard, btnStart];

let snakeLength;
let canvasSize;
let appleNum;
let speed;
let score = 0;
let food;
let dx = 20;
let dy = 0;
let x = 20;
let y = 20;
let foodX = this.randomTen(0, canvas.width - 20);
let foodY = this.randomTen(0, canvas.height - 20);
let snake = [];

updateMenu();

//#region classes
class Canvas {
    constructor(size) {
        this.size = size;
    }

    createCanvas() {
        var canvasDiv = document.createElement("div");
        var canvas = document.createElement("canvas");
        var scoresDiv = document.createElement("div");
        var currScoreP = document.createElement("p");
        var highScoreP = document.createElement("p");

        canvasDiv.setAttribute("id", "canvasDiv");
        canvas.setAttribute("id", "canvas");
        scoresDiv.setAttribute("id", "scores");
        currScoreP.setAttribute("id", "currentScore");
        highScoreP.setAttribute("id", "highestScore");

        currScoreP.innerText = "Score: ";
        highScoreP.innerText = "HighScore: ";

        scoresDiv.appendChild(currScoreP);
        scoresDiv.appendChild(highScoreP);
        canvasDiv.appendChild(canvas);
        canvasDiv.appendChild(scoresDiv);
        mainDisplay.appendChild(canvasDiv);


        canvas.style.width = this.width;
        canvas.style.height = this.height;
        if (this.size == "small") {
            this.smallSize();

        }
        else if (this.size == "medium") {
            this.mediumSize();
        }
        else if (this.size == "large") {
            this.largeSize();
        }
    }

    smallSize() {
        canvas.style.width = "300px";
        canvas.style.height = "300px";
    }

    mediumSize() {
        canvas.style.width = "400px";
        canvas.style.height = "400px";
    }

    largeSize() {
        canvas.style.width = "600px";
        canvas.style.height = "500px";
    }
}

class Snake {
    constructor(length) {
        this.length = length;
    }
    createSnake() {
        var snakeSize = this.length;

        for (var i = snakeSize; i > 0; i--) {           // Assigns the position for each snake part so illusion of snake body is created
            snake.push({ x: i * 20, y: 20 });
        }
    }
    drawSnake() {
        var width = x;
        var height = y;
        function drawSnakePart(snakePart) {

            context.fillStyle = 'lightgreen';
            context.strokestyle = 'lightgreen';
            context.fillRect(snakePart.x, snakePart.y, width, height);
            context.strokeRect(snakePart.x, snakePart.y, width, height);
        }
        snake.forEach(drawSnakePart);
    }
    clearCanvas() {
        context.fillStyle = "black";
        context.strokeStyle = "black";

        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeRect(0, 0, canvas.width, canvas.height);
    }
    moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        snake.unshift(head);
        const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
        if (didEatFood) {
            // Increase score
            function createFood() {
                foodX = randomTen(0, canvas.width - 20);
                foodY = randomTen(0, canvas.height - 20);
                snake.forEach(function isOnSnake(part) {
                    if (part.x == foodX && part.y == foodY) createFood();
                });
            }
            createFood();
            score += 10;
            // Display score on screen
            document.getElementById("currentScore").innerHTML = "Score: " + score;
            // Generate new food location
        } else {
            // Remove the last part of snake body
            snake.pop();
        }
    }
    changeDirection(event) {
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;

        const keyPressed = event.keyCode;
        const goingUp = dy === -20;
        const goingDown = dy === 20;
        const goingRight = dx === 20;
        const goingLeft = dx === -20;

        if (keyPressed === LEFT_KEY && !goingRight) {
            dx = -20;
            dy = 0;
        }
        if (keyPressed === UP_KEY && !goingDown) {
            dx = 0;
            dy = -20;
        }
        if (keyPressed === RIGHT_KEY && !goingLeft) {
            dx = 20;
            dy = 0;
        }
        if (keyPressed === DOWN_KEY && !goingUp) {
            dx = 0;
            dy = 20;
        }
    }
}


class Apples {
    constructor(quantity) {
        this.quantity = quantity;
    }
    drawFood() {
        context.fillStyle = 'red';
        context.strokestyle = 'darkred';
        context.fillRect(foodX, foodY, 20, 20);
        context.strokeRect(foodX, foodY, 20, 20);
    }
    createFood() {
        foodX = randomTen(0, canvas.width - 20);
        foodY = randomTen(0, canvas.height - 20);
        snake.forEach(function isOnSnake(part) {
            if (part.x == foodX && part.y == foodY) createFood();
        });

    }

}

//#endregion classes

btns.forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = this.value.toString();
        if (buttonValue == 'start') {
            getInfo();
            setInfo();
            startTheGame();
        }
        else {
            checkDifficulty(buttonValue);
            getInfo();
            setInfo();
            startTheGame();
        }
    })
});


//#region functions
function startTheGame() {       // Creating the function to fade the User interface and open the game

    let canvas = new Canvas(canvasSize);
    canvas.createCanvas();

    fadeUI();

    let python = new Snake(snakeLength);

    let apples = new Apples(appleNum);
    python.createSnake();
    python.drawSnake();
    main();
    apples.createFood();

    document.addEventListener("keydown", python.changeDirection);

    if (didGameEnd()) {
        alert("Game Over! Your score is: " + score);
        location.reload();
        return;
    }

    function main() {
        if (didGameEnd()) {
            alert("Game Over! Your score is: " + score);
            location.reload();
            return;
        }

        setTimeout(function onTick() {
            python.clearCanvas();
            apples.drawFood();
            python.moveSnake();
            python.drawSnake();
            // Call main again
            main();
        }, speed)
    }
}


function getInfo() {
    snakeLength = parseInt(document.getElementById("snakeLength").value);
    canvasSize = document.getElementById("canvasSize").value.toString();
    appleNum = parseInt(document.getElementById("appleNum").value);
    speed = parseInt(document.getElementById("speed").value);
}
function setInfo() {
    localStorage.setItem('snakeLength', snakeLength);
    localStorage.setItem('canvasSize', canvasSize);
    localStorage.setItem('appleNum', appleNum);
    localStorage.setItem('speed', speed);
}

function fadeUI() {
    $(userInterface).fadeOut();
    setInterval(function () {
        $("#canvasDiv").fadeIn();
        $(canvas).fadeIn();
    }, 1000);
}


function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 20) * 20;
}

function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if (didCollide) return true;
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > canvas.width - 20;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > canvas.height - 20;
    return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}



function checkDifficulty(btnVal) {
    if (btnVal == "easy") {
        speed = 500;
        localStorage.setItem('speed', speed);
    }

    else if (btnVal == "medium") {
        speed = 300;
        localStorage.setItem('speed', speed);
    }

    else if (btnVal == "hard") {
        speed = 100;
        localStorage.setItem('speed', speed);
    }
}

function updateMenu() {
    document.querySelector("#snakeLength").value = localStorage.getItem('snakeLength');
    document.querySelector("#canvasSize").value = localStorage.getItem('canvasSize');
    document.querySelector("#appleNum").value = localStorage.getItem('appleNum');
    document.querySelector("#speed").value = localStorage.getItem('speed');

}

//#endregion functions