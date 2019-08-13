const alphabet = Array(26).fill('').map((e, i) => String.fromCharCode(i + 65));
const excelTable = document.querySelector('#excelTable');
const tableNumericColumn = document.querySelector('.table-numeric-column');
const tableHead = document.querySelector('.table-head');
// excelTable.innerHTML = '';

const fragment = document.createDocumentFragment();

function createTable(r=10, c=10, fr) {
  fr.appendChild(createTableNumericColumn(r, tableNumericColumn));
  fr.appendChild(createTableHead(c, tableHead));
  // fr.appendChild(createCells(r, c, tableHead));
  return fr;
}

// function createCells(rows, cols, fr) {
//
//   const cellsFragment =  document.createDocumentFragment();
//
//   for (let i = 0; i <= rows; i++) {
//     let row = document.createElement('div');
//     row.className = 'row';
//
//     for (let j = 1; j <= cols; j++) {
//       let cell = document.createElement('div');
//       cell.className = 'cell';
//       let cellContent = '';
//       if (i && j) {
//         cellContent = `<div id="${alphabet[j - 1]}${i}" contenteditable="true" class="cell-item"></div>`;
//       }
//       if(!i) {
//         cell.classList.add('main-cell');
//         cellContent = `${alphabet[j - 1]}<i data-drag="col-${alphabet[i]}" class="drag dragX"></i>`;
//       }
//
//       cell.innerHTML = cellContent;
//       row.appendChild(cell);
//     }
//     cellsFragment.appendChild(row);
//   }
//   fr.appendChild(cellsFragment);
//
//   return fr;
// }

function createTableCells(rows, cols, fr) {
  for (let i = 0; i <= rows; i++) {
    let row = document.createElement('div');
    row.className = 'row';
  }
}

function createTableHead(cols, fr) {
  let row = document.createElement('div');
  row.className = 'row';

  for (let j = 0; j <= cols; j++) {
    let cell = document.createElement('div');

    cell.className = 'resizable';
    cell.id = `col-${alphabet[j]}`;
    cell.innerHTML = `${alphabet[j]}<i data-drag="col-${alphabet[j]}" class="drag dragX"></i>`;

    row.appendChild(cell);
  }
  fr.appendChild(row);
  return fr;
}


function createTableNumericColumn(rows, fr) {
  const numericCellsFragment = document.createDocumentFragment();

  for (let i = 0; i <= rows; i++) {
    let numerousColumn = document.createElement('div');
    numerousColumn.className = 'resizable';
    numerousColumn.id = `row-${i}`;
    numerousColumn.innerHTML = i ? i : '';
    numericCellsFragment.appendChild(numerousColumn);
  }
  fr.appendChild(numericCellsFragment);
  return fr;
}


excelTable.appendChild(createTable(10, 20, fragment));

