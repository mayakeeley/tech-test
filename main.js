const gameArea = document.getElementById("gameArea");

const createMinefield = (rows, columns) => {
  let table, tr, td;
  gameArea.innerHTML = "";

  table = document.createElement("table");

  for (let row = 0; row < rows; row++) {
    tr = document.createElement("tr");

    for (let column = 0; column < columns; column++) {
      td = document.createElement("td");
      td.id = `y${row}x${column}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
  return gameArea.appendChild(table);
}

createMinefield(15, 15);

const generateMines = (rows, columns, mines) => {
  if(mines < rows * columns) {
    let x = 0;
    while (x < mines) {
      let rowId = Math.floor(Math.random() * rows);
      let colId = Math.floor(Math.random() * columns);
      let cellId = `y${rowId}x${colId}`;
      let cell = document.getElementById(cellId);

      if (cell.classList.contains("mine")) {
        continue;
      } 
      cell.classList.add("mine");
      cell.innerHTML = "X";
      x++;
    }
  } else {
    alert("The number of mines exceeds the number of cells!")
  }
}

generateMines(15, 15, 30);

const generateClues = (rows, columns) => {
  let allMineCells = document.querySelectorAll(".mine");
  let allMineIds = [];
  allMineCells.forEach(cell => {
    allMineIds.push(cell.id);
  })
}

generateClues(15, 15);