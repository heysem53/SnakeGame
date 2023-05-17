let inputDirecition = { x: 0, y: 0 };
let lastInputDirecition = { x: 0, y: 0 }

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (lastInputDirecition.y !== 0) break;
            inputDirecition = {x: 0, y: -1};
            break;
            case "ArrowDown":
            if (lastInputDirecition.y !== 0) break;
            inputDirecition = {x: 0, y: 1};
            break;
            case "ArrowLeft":
            if (lastInputDirecition.x !== 0) break;
            inputDirecition = {x: -1, y: 0};
            break;
            case "ArrowRight":
            if (lastInputDirecition.x !== 0) break;
            inputDirecition = {x: 1, y: 0};
            break;
    }
});

export function getInputDirecition() {
    lastInputDirecition = inputDirecition;
    return inputDirecition;
}