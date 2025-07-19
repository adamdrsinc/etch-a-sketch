function generateGrid(gridCountX, gridCountY){
    if(gridCountX > 100 || gridCountY > 100){
        alert("Grids per side cannot exceed 100.");
        return;
    }

    const containerWidth = document.querySelector("#grids").style.width;
    const gridWidth = containerWidth/gridCountX;

    for(let i = 0; i < gridCountY; i++){
        for(let j = 0; j < gridCountX; j++){
            addGridSquare(gridWidth);
        }
    }
}

function addGridSquare(gridWidth){
    const newSquare = document.createElement("div");
    const grid = document.querySelector("#grid");

    newSquare.style.width = gridWidth;
    newSquare.style.height = gridWidth;
    newSquare.style.backgroundColor = "white";
    newSquare.style.border = "1px solid black";

    grid.appendChild(newSquare);
}