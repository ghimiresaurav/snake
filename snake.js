import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [
    {x:13, y:13}
];

let newPieces = 0;

export function update(){
    appendPieces();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    snakeBody.forEach(piece=>{
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = piece.x;
        snakeElement.style.gridRowStart = piece.y;
        snakeElement.className = "snake";
        gameBoard.appendChild(snakeElement);
    })
}

export function extendSnake(factor){
    newPieces += factor;
}

export function onSnake(position, {ignoreHead= false} = {}){
    return snakeBody.some((piece, index) =>{
        if(ignoreHead && index === 0) 
            return false;
        return position.x === piece.x && position.y === piece.y;
    }
    );
}

function appendPieces(){
    for(let i = 0; i < newPieces; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newPieces = 0;
}

export function snakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true});
}