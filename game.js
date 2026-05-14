var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

var foodX;
var foodY;

var score = 0;
var highScore = 0;
var gameOver = false;
var gameStarted = false;

// Elementy retro UI
var scoreDisplay;
var highScoreDisplay;
var statusDisplay;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width  = cols * blockSize;
    context = board.getContext("2d");

    scoreDisplay     = document.getElementById("scoreDisplay");
    highScoreDisplay = document.getElementById("highScoreDisplay");
    statusDisplay    = document.getElementById("statusDisplay");

    // Wczytaj highscore z localStorage jeśli dostępny
    highScore = parseInt(localStorage.getItem("snakeHighScore")) || 0;
    updateUI();

    placeFood();
    document.addEventListener("keydown", changeDirection);
    setInterval(update, 1000 / 10);
}

function update() {
    if (gameOver) return;
    if (!gameStarted) return; // czekaj na pierwszy ruch

    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    // Jedzenie — czerwone
    context.fillStyle = "#c0392b";
    context.fillRect(foodX, foodY, blockSize - 1, blockSize - 1);

    // Zjedzenie jedzenia
    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        score++;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("snakeHighScore", highScore);
        }
        updateUI();
    }

    // Przesuń ciało
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    // Nowa pozycja głowy
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    // Rysuj ciało
    context.fillStyle = "#e8e8e4";
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize - 1, blockSize - 1);
    }

    // Rysuj głowę (jaśniejsza)
    context.fillStyle = "#ffffff";
    context.fillRect(snakeX, snakeY, blockSize - 1, blockSize - 1);

    // Kolizja ze ścianą
    if (snakeX < 0 || snakeX >= cols * blockSize || snakeY < 0 || snakeY >= rows * blockSize) {
        endGame();
        return;
    }

    // Kolizja z ciałem
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
            endGame();
            return;
        }
    }
}

function endGame() {
    gameOver = true;
    if (statusDisplay) {
        statusDisplay.textContent = "DEAD";
        statusDisplay.classList.remove("active");
        statusDisplay.classList.add("dead");
    }
    // Komunikat na canvas
    context.fillStyle = "rgba(0,0,0,0.75)";
    context.fillRect(0, 0, board.width, board.height);
    context.fillStyle = "#c0392b";
    context.font = "bold 16px 'Press Start 2P', monospace";
    context.textAlign = "center";
    context.fillText("GAME OVER", board.width / 2, board.height / 2 - 16);
    context.fillStyle = "#555";
    context.font = "8px 'Press Start 2P', monospace";
    context.fillText("press any arrow to restart", board.width / 2, board.height / 2 + 12);
}

function updateUI() {
    if (scoreDisplay)     scoreDisplay.textContent     = String(score).padStart(3, "0");
    if (highScoreDisplay) highScoreDisplay.textContent = String(highScore).padStart(3, "0");
}

function changeDirection(e) {
    const arrows = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"];

    if (arrows.includes(e.code)) {
        e.preventDefault();
    }

    // Restart po game over
    if (gameOver) {
        restartGame();
        return;
    }

    if (!gameStarted) {
        gameStarted = true;
        if (statusDisplay) {
            statusDisplay.textContent = "LIVE";
            statusDisplay.classList.add("active");
        }
    }

    if ((e.code === "ArrowUp" || e.code === "KeyW") && velocityY !== 1)  {
        velocityX = 0;  velocityY = -1;
    }
    else if ((e.code === "ArrowDown" || e.code === "KeyS") && velocityY !== -1) {
        velocityX = 0;  velocityY = 1;
    }
    else if ((e.code === "ArrowLeft" || e.code === "KeyA") && velocityX !== 1)  {
        velocityX = -1; velocityY = 0;
    }
    else if ((e.code === "ArrowRight" || e.code === "KeyD") && velocityX !== -1) {
        velocityX = 1;  velocityY = 0;
    }
}

function restartGame() {
    snakeX      = blockSize * 5;
    snakeY      = blockSize * 5;
    velocityX   = 0;
    velocityY   = 0;
    snakeBody   = [];
    score       = 0;
    gameOver    = false;
    gameStarted = false;

    if (statusDisplay) {
        statusDisplay.textContent = "READY";
        statusDisplay.classList.remove("active", "dead");
    }

    updateUI();
    placeFood();

    // Wyczyść canvas
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}