import {SNAKE_SPEED, 
    update as updateSnake, 
    draw as drawSnake,
    getSnakeHead,
    snakeInterSection,
} from "./snake.js";

import {update as updateFood, draw as drawFood} from "./food.js"

import { outsideGrid } from "./grid.js";

let LastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currenTime) {
    if (gameOver) {
         return alert ("You lose !");
        /* // OR // if (confirm("You Lost. Press Ok to restart.")) {
            window.location = "/";
        } */
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currenTime - LastRenderTime) / 1000;
    
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    LastRenderTime = currenTime;
    
    update();
    draw(); 

}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
    chekDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function chekDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeInterSection();
}