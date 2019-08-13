const alphabet = Array(26).fill('').map((e, i) => String.fromCharCode(i + 65));
const excelTable = document.querySelector('#excelTable');
const container = document.querySelector('.table-container');

excelTable.innerHTML = '';

const fragment = document.createDocumentFragment();

fragment.appendChild(createTable(27, 25, excelTable));
container.appendChild(fragment);


function createTable(rows, cols, table) {

  for (let i = 0; i <= rows; i++) {
    let row = document.createElement('div');
    row.id = `row-${i}`;
    row.className = 'row';

    for (let j = 0; j <= cols; j++) {
      let cell = document.createElement('div');
      cell.className = 'cell';
      let cellContent = '';

      if (i && j) {
        cellContent = `<div id="${alphabet[j - 1]}${i}" contenteditable="true" class="cell-item"></div>`;
      } else {
        cell.classList.add('resizable');

        if (!i) {
          cellContent = alphabet[j - 1] ? `${alphabet[j - 1]}<i data-drag="col-${alphabet[i]}" class="drag dragX"></i>` : '';
        } else if (!j) {
          cellContent = `${i}<i data-drag="col-${alphabet[i]}" class="drag dragY">`;
        }

      }
      cell.innerHTML = cellContent;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
  return table;
}
