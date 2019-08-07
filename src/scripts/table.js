const abc = Array(26).fill('').map((e, i) => String.fromCharCode(i + 65));
const theTable = document.querySelector('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
theTable.innerHTML = '';

let fragment = document.createDocumentFragment();
fragment.appendChild(thead);
fragment.appendChild(tbody);

// шапка таблицы
let tHeadRow = thead.insertRow(-1);
tHeadRow.insertCell().innerHTML = `<span id="expandRow" class="expandRow"></span>`;

for (let i = 0; i < 20; i++) {
  tHeadRow.insertCell(-1).innerHTML = abc[i];
}

// таблица
for (let i = 0; i <= 10; i++) {
  let tBodyRow = tbody.insertRow(-1);
  tBodyRow.id = `row-${i}`;

  for (let j = 0; j <= 20; j++) {
    tBodyRow.insertCell(-1).innerHTML = j ? `<input id="${abc[j - 1]}${i}"/>` : i || 'fx';
  }
}

theTable.appendChild(fragment);
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
