import { getInputDirecition } from "./input.js";

export const SNAKE_SPEED = 6;
const snakeBody = [
    {x:10, y:11}
    /*{x:11, y:11},
    {x:12, y:11},
    {x:13, y:11},
    {x:14, y:11},*/
];

let newSegment = 0;
 
export function update() {
    addSegments();
    let inputDirecition = getInputDirecition();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirecition.x;
    snakeBody[0].y += inputDirecition.y;
    
}

export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
    
}

export function expandSnake(amount){
    newSegment += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPosition(segment, position);
    });
}   

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeInterSection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
    for(let i = 0; i < newSegment; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
        // or // snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1]}
    }

    newSegment = 0;
}