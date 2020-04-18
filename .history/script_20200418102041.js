const grid = document.querySelector(`#grid-div`)
const resetButton = document.querySelector(`#reset-btn`)
const GRID_PX_SIZE = 840
const MAX_GRID_SIZE = 300
resetButton.addEventListener(`click`, resetBoard)


function createBoard(){
  let size = getSizeFromUser()
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      createCell(size)
    }
    goToNewLine()
  }
}

function resetBoard(){
  deleteBoard()
  createBoard()
}

function deleteBoard(){
  let cells = document.querySelectorAll(`.cell`)
  cells.forEach(cell => grid.removeChild(cell))
  let breaks = document.querySelectorAll(`br`)
  breaks.forEach(br => grid.removeChild(br))
}

function getSizeFromUser() {
  let size
  do { size = prompt(`How many squares per side? (between 0 and 840)`) } while (isNaN(Number(size)) || size == `` || size > 840)
  return Number(size)
}

function createCell(size){
  const cell = document.createElement(`div`)
  const pixelsPerSide = GRID_PX_SIZE / size
  cell.addEventListener("mouseenter", () => cell.classList.add(`hovered-cell`));
  cell.classList.add(`cell`)
  cell.style.width = pixelsPerSide
  cell.style.height = pixelsPerSide
  grid.appendChild(cell)
}

function goToNewLine(){
  const br = document.createElement(`br`)
  grid.appendChild(br)
}
