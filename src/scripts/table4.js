const alphabet = Array(26).fill('').map((e, i) => String.fromCharCode(i + 65));
const tableNumericColumn = document.querySelector('.table-numeric-column');
const tableContent = document.querySelector('.table-content');
const excelTable = document.querySelector('#excelTable');


const fragment = document.createDocumentFragment();
excelTable.appendChild(createTable(30, 20, fragment));
tableContent.addEventListener('click', accentFields);


function createTable(r = 10, c = 10, fr) {
  fr.appendChild(createTableNumericColumn(r, tableNumericColumn));
  fr.appendChild(createTableContent(r, c, tableContent));

  return fr;
}

// контент таблицы с шапкой
function createTableContent(rows, cols, fr) {
  let tableContentFragment = document.createDocumentFragment();

  for (let i = 0; i <= rows; i++) {
    let row = document.createElement('div');
    row.className = `row row-${i}`;

    for (let j = 0; j <= cols; j++) {
      let cell = document.createElement('div');
      let cellContent = '';

      if (i) {
        cell.className = `cell col-${alphabet[j]}`;
        cell.setAttribute('col', alphabet[j]);
        cell.setAttribute('row', i);
        cellContent = `<div id="${alphabet[j]}-${i}" contenteditable="true" class="cell-item"></div>`;
      } else {
        cell.className = 'resizable resizable-x';
        cell.id = `col-${alphabet[j]}`;
        cellContent = alphabet[j];
      }

      cell.innerHTML = cellContent;
      row.appendChild(cell);
    }

    tableContentFragment.appendChild(row);

  }
  fr.appendChild(tableContentFragment);
  return fr;
}

// колонка с цифрами
function createTableNumericColumn(rows, fr) {
  const numericCellsFragment = document.createDocumentFragment();

  for (let i = 0; i <= rows; i++) {
    let numerousColumn = document.createElement('div');
    numerousColumn.className = i ? 'resizable resizable-y' : '';
    numerousColumn.id = `row-${i}`;
    numerousColumn.innerHTML = i ? i : '';
    numericCellsFragment.appendChild(numerousColumn);
  }
  fr.appendChild(numericCellsFragment);
  return fr;
}

// изменение background столбца и ячейки при фокусе на каком-либо поле
function accentFields(e) {
  if (e.target.classList.contains('cell-item')) {
    let bgUnFocus = '#d8e6ce';
    let bgOnFocus = '#6dc4d6';
    let [col, row] = e.target.id.split('-');

    document.querySelector(`#col-${col}`).style.backgroundColor = bgOnFocus;
    document.querySelector(`#row-${row}`).style.backgroundColor = bgOnFocus;

    this.addEventListener('blur', () => {
      document.querySelector(`#col-${col}`).style.backgroundColor = bgUnFocus;
      document.querySelector(`#row-${row}`).style.backgroundColor = bgUnFocus;
    });
  }

}


//ToDo реализовать фиксацию первых row и col при скролле
