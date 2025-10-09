const generateField = () => {
  const tableEl = document.createElement("table");

  tableEl.className = "table-bordered";
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = "py-2 px-3";
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

const app = () => {
  const field = generateField();
  document.querySelector(".root").append(field);
  const players = ["x", "o"];
  let movesCounter = 0;
  field.addEventListener("click", (e) => {
    const cell = e.target;
    if (cell.textContent !== "s") return;
    const player = movesCounter % players.length;
    cell.textContent = players[player];
    movesCounter += 1;
  });
};

export default app;
