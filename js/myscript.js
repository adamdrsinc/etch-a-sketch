document.querySelector('[name="submitButton"]').addEventListener('click', generateGrid);

function generateGrid(){
    const inputWidth = Number.parseInt(document.querySelector('[name="widthInput"]').value);
    const inputHeight = Number.parseInt(document.querySelector('[name="heightInput"]').value);

    if(inputWidth > 100 || inputHeight > 100){
        alert("Grids per side cannot exceed 100.");
        return;
    }

    const containerWidth = document.querySelector("#grid").offsetWidth;
    alert(containerWidth);
    const gridHeight = containerWidth/inputWidth;

    for(let i = 0; i < inputHeight; i++){
        for(let j = 0; j < inputWidth; j++){
            addGridSquare(gridHeight);
        }
    }
}

function addGridSquare(gridHeight){
    const newSquare = document.createElement("div");
    const grid = document.querySelector("#grid");

    newSquare.style.width = gridHeight + "px";
    newSquare.style.height = gridHeight + "px";
    newSquare.classList.add("square");

    grid.appendChild(newSquare);
}