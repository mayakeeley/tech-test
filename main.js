const gameArea = document.getElementById("gameArea");

const createMinefield = (rows, columns) => {
  let table, tr, td;
  gameArea.innerHTML = "";

  table = document.createElement("table");

  for(let row=0; row < rows; row++) {
    tr = document.createElement("tr");
    for(let column=0; column < columns; column++) {
      td = document.createElement("td");
      td.id = `${row}${column}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return gameArea.appendChild(table);
}

createMinefield(15, 15);

