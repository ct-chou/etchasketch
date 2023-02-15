const container = document.querySelector('#containerGrid');
const dimension = 16; //16x16 grid of square divs

for(i=0;i<256;i++) {
    const miniGrid = document.createElement('div');
    miniGrid.classList.add(`grid`);
    //miniGrid.textContent = `${i}`;
    container.appendChild(miniGrid);    
}

const grids = document.querySelectorAll('.grid');

grids.forEach(grid => {
    grid.addEventListener('mouseover', (e) => {
        grid.classList.add('hover');
    });
});