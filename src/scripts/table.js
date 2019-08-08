const abc = Array(26).fill('').map((e, i) => String.fromCharCode(i + 65));
const theTable = document.querySelector('table');
const container = document.querySelector('.container');
theTable.innerHTML = '';

let fragment = document.createDocumentFragment();
fragment.appendChild(theTable);

// шапка таблицы

let tHeadRow = theTable.insertRow(-1);
tHeadRow.insertCell().innerHTML = `<div class="resizable-col"><span id="expandRow" class="expandRow"></span></div>`;

for (let i = 0; i < 20; i++) {
  let tHeadCell = tHeadRow.insertCell(-1);
  tHeadCell.innerHTML = `<div class="resizable-col">${abc[i]}<i class="col-${abc[i]} drag dragX"></i></div>`;
  tHeadCell.id = `col-${abc[i]}`;
}

// таблица
for (let i = 0; i <= 10; i++) {
  let tBodyRow = theTable.insertRow(-1);
  tBodyRow.id = `row-${i}`;

  for (let j = 0; j <= 20; j++) {
    let mark = i ? i : 'fx';
    let tBodyCell = tBodyRow.insertCell(-1);
    tBodyCell.innerHTML = j ? `<textarea id="${abc[j - 1]}${i}"></textarea>` : `<div class="resizable-row row-${i}">${mark}<i class="row-${i} drag dragY"></i></div>`;
  }
}

container.appendChild(fragment);
fragment = null;

const exp = document.querySelector('#expandRow');
const fx = document.querySelector('#row-0');
fx.classList.add('hidden');

exp.addEventListener('click', (e) => {
  if (fx.classList.contains('hidden')) {
    fx.classList.remove('hidden');
  } else {
    fx.classList.add('hidden');
  }
});

