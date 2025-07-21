document.querySelector('[name="submitButton"]').addEventListener('click', generateGrid);



function generateGrid(){
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
    newSquare.classList.add("square");

    grid.appendChild(newSquare);
}