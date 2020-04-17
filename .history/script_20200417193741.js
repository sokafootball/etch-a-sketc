const grid = document.querySelector(`#grid-div`)
const resetButton = document.querySelector(`#reset-btn`)
resetButton.addEventListener(`click`, resetBoard)
let squaresPerSide = 0


for (let i = 1; i <= squaresPerSide; i++) {
  for (let j = 1; j <= squaresPerSide; j++) {
    const cell = document.createElement(`div`)
    cell.addEventListener("mouseenter", () => cell.style.backgroundColor = `red`);
    cell.classList.add(`cell`)
    grid.appendChild(cell)
  }
  const br = document.createElement(`br`)
  grid.appendChild(br)
}



function getSizeFromUser() {
  let size
  do { size = Number(prompt(`How many squares per side?`)) }while (isNaN(size) || size == ``)
  return size
}
