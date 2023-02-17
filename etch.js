const container = document.querySelector('#containerGrid');
let dimension = 16; //16x16 grid of square divs

for(i=0;i<dimension*dimension;i++) {
    const miniGrid = document.createElement('div');
    miniGrid.classList.add(`grid`);
    miniGrid.style.width = `${300/dimension}px`;
    miniGrid.style.height = `${300/dimension}px`;
    container.appendChild(miniGrid);    
}

const grids = document.querySelectorAll('.grid');

grids.forEach(grid => {
    grid.addEventListener('mouseover', (e) => {
        grid.classList.add('hover');
    });
});

function resetGrid(e) {
    dimension = prompt("enter new grid size (side)")
    if(dimension > 100 || dimension < 1) {
        dimension = prompt('Dimension must be > 0 and < 100, please enter again');
    }
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(i=0;i<dimension*dimension;i++) {
        const miniGrid = document.createElement('div');
        miniGrid.classList.add(`grid`);
        miniGrid.style.width = `${300/dimension}px`;
        miniGrid.style.height = `${300/dimension}px`;
        container.appendChild(miniGrid);    
    }
    const grids = document.querySelectorAll('.grid');

    grids.forEach(grid => {
        grid.addEventListener('mouseover', (e) => {
            grid.classList.add('hover');
        });
    });
        
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);
