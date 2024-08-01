//board

class Board{
    constructor(width=500, height=500){
        this.width = width;
        this.height = height;
    }
}
        
//players
class Player{
    constructor(number, board){
        this.width = board.width / 50;
        this.height = this.width * 5;
        this.velocityY = 0;
        if (number == 1){
            this.x = 10;
            this.y = (board.height / 2) - (this.height / 2);
        }
        else{
            this.x = board.width - (this.width * 2);
            this.y = (board.height / 2) - (this.height / 2);
        }
    }
}
                        
//ball
class Ball{
    constructor(board){
        this.width = board.width / 50;
        this.height = board.height / 50;
        this.x = (board.width / 2) - (this.height / 2);
        this.y = (board.height / 2) - (this.height / 2);
        this.velocityX = 1;
        this.velocityY = 2;
    }
}
                                
let context;
let board = new Board(500, 500);
let player1 = new Player(1, board);
let player2 = new Player(2, board);
let ball = new Ball(board);
console.table(player1)
console.table(player2)

window.onload = function() {
    let canvas = document.getElementById("board");
    context = canvas.getContext("2d");

    // draw players
    context.fillStyle = "skyblue";
    canvas.width = board.width;
    canvas.height = board.height;
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

    requestAnimationFrame(update);
    document.addEventListener("keyup", movePlayer);
    // document.addEventListener("keyup", moveDjango);
    }
    
    // function moveDjango(){
//     fetch('/move/',
// 		{
    // 			method: 'POST',
    // 			body:
    // 			{
        // 				'Player1': player1,
        // 				'Content-Type': 'application/json'
        // 			}
        //         })
        // }
        
function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    // draw players
    context.fillStyle = "skyblue";
    if (!outOfBounds(player1.y + player1.velocityY, player1, board)){
        player1.y += player1.velocityY;
    }
    if (!outOfBounds(player2.y + player2.velocityY, player2, board)){
        player2.y += player2.velocityY;
    }
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

    //ball
    context.fillStyle = "White"
    ball.x += ball.velocityX;
    if (ballOutOfBounds(ball.y + ball.velocityY, ball, board)){
        ball.velocityY = ball.velocityY * -1;    
    }
    ball.y += ball.velocityY;
    context.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function outOfBounds(yPosition, player, board) {
    return (yPosition < 0 || yPosition + player.height > board.height)
}

function ballOutOfBounds(yPosition, ball, board) {
    return (yPosition < 0 || yPosition + ball.height > board.height)
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