const container = document.querySelector('#containerGrid');
const dimension = 16; //16x16 grid of square divs

for(i=0;i<16;i++) {
    const miniGrid = document.createElement('div');
    miniGrid.classList.add(`grid${i}`);
    miniGrid.textContent = `${i}`;
    container.appendChild(miniGrid);    
}
