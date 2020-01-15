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

const generateClues = (rows, columns, rowId, colId) => {
  for (let y = rowId - 1; y <= rowId + 1; y++) {
    for (let x = colId - 1; x <= colId + 1; x++) {
      let cellId = `y${y}x${x}`;
      let cell = document.getElementById(cellId);
      if (x >= 0 && x < columns && y >= 0 && y < rows && !cell.classList.contains("mine")) {
        cell.innerHTML = 1;
      }
    }
  }
}

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
      generateClues(rows, columns, rowId, colId);
      x++;
    }
  } else {
    alert("The number of mines exceeds the number of cells!")
  }
}

generateMines(15, 15, 30);