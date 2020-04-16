const grid = document.querySelector(`#grid-div`)
for(let i = 1; i <= 16; i++){
  for(let j = 1; j <= 16; j++){
    const cell = document.createElement(`div`)
    cell.classList.add(`cell`)
    grid.appendChild(`grid`, cell)
  }

}
