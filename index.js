const containerDiv = document.createElement('div');
containerDiv.id = 'container';

document.body.appendChild(containerDiv);

function createGrid(numDivs){
    containerDiv.style.gridTemplateColumns = `repeat(${numDivs},1fr)`
    containerDiv.style.gridTemplateRows = `repeat(${numDivs},1fr)`

    for (let rows = 0; rows < numDivs; rows++){
        for(let cols = 0; cols < numDivs; cols++){
            let cells = document.createElement('div');
            cells.className = 'child'
            containerDiv.appendChild(cells);

            cells.style.width = '25px'
            cells.style.height = '25px'
        };
    };
};
createGrid(16);

function pixelate(event){
    event.target.style.backgroundColor = 'blue';
};  

let cells = document.querySelectorAll('.child');

for (const cell of cells){
    cell.addEventListener('mouseover', pixelate);
};
