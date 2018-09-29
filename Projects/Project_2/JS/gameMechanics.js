
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var score = 0;
var food;
var dx = 10;
var dy = 0;
var x = 10;
var y = 10;
var foodX = this.randomTen(0, canvas.width - 10);
var foodY = this.randomTen(0, canvas.height - 10);
var snake = [];
var score = 0;

class Snake {
    constructor(length) {
        this.length = length;
    }
    createSnake() {
        var snakeSize = this.length;

        for (var i = snakeSize; i > 0; i--) {           // Assigns the position for each snake part so illusion of snake body is created
            snake.push({ x: i * 10, y: 10 });
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
            createFood();
            score += 10;
            // Display score on screen
            // document.getElementById('score').innerHTML = score;
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
        const goingUp = dy === -10;
        const goingDown = dy === 10;
        const goingRight = dx === 10;
        const goingLeft = dx === -10;

        if (keyPressed === LEFT_KEY && !goingRight) {
            dx = -10;
            dy = 0;
        }
        if (keyPressed === UP_KEY && !goingUp) {
            dx = 0;
            dy = -10;
        }
        if (keyPressed === RIGHT_KEY && !goingLeft) {
            dx = 10;
            dy = 0;
        }
        if (keyPressed === DOWN_KEY && !goingDown) {
            dx = 0;
            dy = 10;
        }
    }
}


class Apples {
    constructor(quantity) {
        this.quantity = quantity;

    }



}


btns.forEach(function (button) {
    button.addEventListener('click', function () {
        startTheGame();
    })
});

function startTheGame() {       // Creating the function to fade the User interface and open the game

    fadeUI();

    let python = new Snake(2);
    python.createSnake();
    python.drawSnake();

    main();

    createFood();


    document.addEventListener("keydown", python.changeDirection);

    function main() {
        if (didGameEnd()) {
            alert("Game Over!");
            // window.location = 
            return;
        }

        setTimeout(function onTick() {
            python.clearCanvas();
            drawFood();
            python.moveSnake();
            python.drawSnake();
            // Call main again
            main();
        }, 100)
    }
}



function fadeUI() {
    $(userInterface).fadeOut();
    setInterval(function () {
        $(canvas).fadeIn();
    }, 1000);
}

function createPython(length) {

}

function randomTen(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
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

function createFood() {
    foodX = this.randomTen(0, canvas.width - 10);
    foodY = this.randomTen(0, canvas.height - 10);
    snake.forEach(function isOnSnake(part) {
        if (part.x == foodX && part.y == foodY) createFood();
    });
}

function drawFood() {
    context.fillStyle = 'red';
    context.strokestyle = 'darkred';
    context.fillRect(foodX, foodY, 10, 10);
    context.strokeRect(foodX, foodY, 10, 10);
}