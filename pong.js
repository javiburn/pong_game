//board

let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

//players
let playerWidth = 10;
let playerHeight = 50;
let playerVelocityY = 0;

let player1 = {
    x : 10,
    y : (boardHeight / 2) - (playerHeight / 2),
    width : playerWidth,
    height : playerHeight,
    velocityY: playerVelocityY,
}

let player2 = {
    x : boardWidth - (playerWidth * 2),
    y : (boardHeight / 2) - (playerHeight / 2),
    width : playerWidth,
    height : playerHeight,
    velocityY: playerVelocityY,
}

//ball
let ballWidth = 10;
let ballHeight = 10;
let ball = {
    x : (boardWidth/2) - (ballHeight / 2),
    y : (boardHeight / 2) - (ballHeight / 2),
    width : ballWidth,
    height : ballHeight,
    velocityX : 1,
    velocityY: 2,
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    // draw players
    context.fillStyle = "skyblue";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

    requestAnimationFrame(update);
    document.addEventListener("keyup", movePlayer);
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    // draw players
    context.fillStyle = "skyblue";
    if (!outOfBounds(player1.y + player1.velocityY)){
        player1.y += player1.velocityY;
    }
    if (!outOfBounds(player2.y + player2.velocityY)){
        player2.y += player2.velocityY;
    }
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

    //ball
    context.fillStyle = "White"
    ball.x += ball.velocityX;
    if (ballOutOfBounds(ball.y + ball.velocityY)){
        ball.velocityY = ball.velocityY * -1;    
    }
    ball.y += ball.velocityY;
    context.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function outOfBounds(yPosition) {
    return (yPosition < 0 || yPosition + playerHeight > boardHeight)
}

function ballOutOfBounds(yPosition) {
    return (yPosition < 0 || yPosition + ballHeight > boardHeight)
}


function movePlayer(e) {
    //player 1
    if (e.code == "KeyW"){
        player1.velocityY = -3;
    }
    else if (e.code == "KeyS"){
        player1.velocityY = 3;
    }

    //player 2
    if (e.code == "ArrowUp"){
        player2.velocityY = -3;
    }
    else if (e.code == "ArrowDown"){
        player2.velocityY = 3;
    }
}