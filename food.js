import{onSnake, extendSnake} from './snake.js';
import{randomPosition} from './grid.js';

const GROWTH_RATE = 1;
let food = randomPosition();
let score = 0;

export function update(){
    if(onSnake(food)){
        score ++;
        extendSnake(GROWTH_RATE);
        food = randomPosition();
    }

}

export function getScore(){
    return score;
}

export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.className = 'food';
    gameBoard.appendChild(foodElement);
}

