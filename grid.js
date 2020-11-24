import {onSnake} from './snake.js';

const GRID_SIZE = 25;

export function randomPosition(){
    let position;
    while(position == null || onSnake(position))
        position = {x: Math.floor(Math.random()*GRID_SIZE+1),
        y: Math.floor(Math.random()*GRID_SIZE+1)};

    return position;
}

export function outsideGrid(position){
    return (position.x<1 || position.y<1 || position.x>GRID_SIZE || position.y>GRID_SIZE);
}