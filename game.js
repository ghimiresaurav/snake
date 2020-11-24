import{SNAKE_SPEED, update as updateSnake, draw as drawSnake, snakeHead, snakeIntersection} from './snake.js';
import{update as updateFood, draw as drawFood, getScore} from './food.js';
import{outsideGrid} from './grid.js';

document.querySelector('h1').addEventListener('click', function(){
    document.querySelector('h1').style.color = "blue";
});

let lastRenderTime = 0;
let gameOver = false;
let playAgain = false;
const gameBoard = document.getElementById('game-board');
const scoreBoard = document.getElementById('score-board');
const gameOverBoard = document.getElementById('game-over');
const playButton = document.getElementById('play-again');

function main(currentTime){
    if(gameOver){
        document.querySelector('p').innerHTML  = `You scored ${getScore()} <br><br>Better luck next time.`;
        gameOverBoard.style.opacity = 1;
        gameOverBoard.style.visibility = "visible";
        if(confirm("GAMEOVER. Press OK to restart")){
            window.location = '/snake';        
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender<1/SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    updateScore();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function updateScore(){
    scoreBoard.innerText = `Score:${getScore()}`;
}

function checkDeath(){
    gameOver = outsideGrid(snakeHead()) || snakeIntersection();
}
