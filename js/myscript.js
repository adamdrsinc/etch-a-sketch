window.addEventListener('blur', () => {
    mouseDown = false;
});


let mouseDown = false;
document.addEventListener('mousedown', () => {
    mouseDown = true;
});
document.addEventListener('mouseup', () => {
    mouseDown = false;
});

document.querySelector('[name="submitButton"]').addEventListener('click', generateGrid);

let storedBackgroundColor = "";

function trySketch(e){
    if(mouseDown){
        const target = e.target;
        let color = target.style.backgroundColor;
        const splitColors = color.split(',');
        let leftVal = splitColors[0];

        const colorVal = Number.parseInt(leftVal.substring(4));
        const newColorVal = colorVal - 50 >= 0 ? colorVal - 50 : 0;

        let newColor = `rgb(${newColorVal}, ${newColorVal}, ${newColorVal}`;
        target.style.backgroundColor = newColor;
    }
}

function resetGrid(){
    document.querySelector("#grid").innerHTML = '';
}

function generateGrid(){
    resetGrid();

    const inputWidth = Number.parseInt(document.querySelector('[name="widthInput"]').value);
    const inputHeight = Number.parseInt(document.querySelector('[name="heightInput"]').value);

    if(inputWidth > 100 || inputHeight > 100){
        alert("Grids per side cannot exceed 100.");
        return;
    }

    const containerWidth = document.querySelector("#grid").getBoundingClientRect().width;
    const gridWidth = containerWidth/inputWidth;

    const containerHeight = document.querySelector("#grid").getBoundingClientRect().height;
    const gridHeight = containerHeight/inputHeight;

    for(let i = 0; i < inputHeight; i++){
        for(let j = 0; j < inputWidth; j++){
            addGridSquare(gridWidth, gridHeight);
        }
    }
}

function addGridSquare(gridWidth, gridHeight){
    const newSquare = document.createElement("div");
    const grid = document.querySelector("#grid");

    newSquare.style.width = gridWidth + "px";
    newSquare.style.height = gridHeight + "px";
    newSquare.style.backgroundColor = "rgb(255, 255, 255)";
    newSquare.classList.add("square");

    newSquare.addEventListener('mouseenter', (e) => trySketch(e));
    newSquare.addEventListener('mouseenter', (e) => onSquareHoverEnter(e));
    newSquare.addEventListener('mouseleave', (e) => onSquareHoverExit(e));

    grid.appendChild(newSquare);
}

