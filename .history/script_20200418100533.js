const grid = document.querySelector(`#grid-div`)
const resetButton = document.querySelector(`#reset-btn`)
const GRID_PX_SIZE = 840
//resetButton.addEventListener(`click`, resetBoard)
resetButton.classList.add(`shadowed-btn`)
resetButton.addEventListener(`mousedown`, () => {
  console.log(`mouse over btn`)
  resetButton.classList.toggle(`clicked`)
})


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
  do { size = prompt(`How many squares per side?`) } while (isNaN(Number(size)) || size == ``)
  return Number(size)
}

function createCell(size){
  const cell = document.createElement(`div`)
  const pixelsPerSide = GRID_PX_SIZE / size
  cell.addEventListener("mouseenter", () => cell.style.backgroundColor = `red`);
  cell.classList.add(`cell`)
  cell.style.width = pixelsPerSide
  cell.style.height = pixelsPerSide
  grid.appendChild(cell)
}

function goToNewLine(){
  const br = document.createElement(`br`)
  grid.appendChild(br)
}
