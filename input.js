let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};

window.addEventListener('keydown', e=>{
    if(e.key === 'ArrowUp' || e.key === 'W' || e.key === 'w'){
        if(lastInputDirection.y !== 0)
            return;
        inputDirection = {x:0, y:-1};
    }
    else if(e.key === 'ArrowDown' || e.key === 'S' || e.key === 's'){
        if(lastInputDirection.y !== 0)
            return;
        inputDirection = {x: 0, y: 1};
    }
    else if(e.key === 'ArrowLeft' || e.key === 'A' || e.key === 'a'){
        if(lastInputDirection.x !== 0)
            return;
        inputDirection = {x: -1, y: 0};
    }
    else if(e.key === 'ArrowRight' || e.key === 'D' || e.key === 'd'){
        if(lastInputDirection.x !== 0)
            return;
        inputDirection = {x:1, y: 0};
    }
    // switch(e.key){
    //     case 'ArrowUp':
    //         if(lastInputDirection.y !== 0) 
    //             break;
    //         inputDirection = {x: 0, y: -1};
    //         break;
    //     case 'ArrowDown':
    //         if(lastInputDirection.y !== 0)
    //             break;
    //         inputDirection = {x: 0, y: 1};
    //         break;
    //     case 'ArrowLeft': 
    //         if(lastInputDirection.x !== 0)
    //             break;
    //         inputDirection = {x: -1, y: 0};
    //         break;
    //     case 'ArrowRight':
    //         if(lastInputDirection.x !== 0)
    //             break;
    //         inputDirection = {x: 1, y: 0};
    //         break;
    // }
})
export function getInputDirection(){
    lastInputDirection = inputDirection;
    return inputDirection;
}