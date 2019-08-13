//растяжение полей drag-n-drop
const table = document.querySelector('#excelTable');

function resizeFields(e) {
  let draggable = e.target.closest('.resizable');

  if(!draggable){
    return;
  }
  let
    draggableId = draggable.id,
    coords = draggable.getBoundingClientRect();

  document.onmousemove = e => {

    if (draggable.classList.contains('resizable-x')) {
      let resX = Math.floor(e.pageX - coords.left);
      draggable.style.width = resX + 'px';

      Array.from(document.querySelectorAll(`.${draggableId}`))
        .map(item => {
          item.style.width = resX + 'px';
        });
    } else if (draggable.classList.contains('resizable-y')) {
      let resY = Math.floor(e.pageY - coords.top),
        row = document.querySelector(`.${draggableId}`);

      draggable.style.height = resY + 'px';
      row.style.height = resY + 'px';

    }
  };
}


document.addEventListener('mousedown', resizeFields);
document.removeEventListener('mouseup', quit);
document.addEventListener('click', quit);

function quit() {
  document.onmousemove = null;
  document.onmousedown = null;
}

// const drags = Array.from(document.querySelectorAll('.drag'));
//
// drags.map(drag => {
//
//   drag.addEventListener('mousedown', (e) => {
//     let elem = e.target,
//       draggableId = e.target.dataset['drag'],
//       draggable = document.querySelector(`#${draggableId}`),
//       startWidth = draggable.clientWidth,
//       startHeight = draggable.clientHeight,
//       coords = drag.getBoundingClientRect();
//
//     document.onmousemove = e => {
//       if(elem.classList.contains('dragX')) {
//         let resX = Math.floor(e.pageX - coords.left);
//         draggable.style.width = startWidth+resX+'px';
//       }
//       else if(elem.classList.contains('dragY')) {
//         let resY = Math.floor(e.pageY - coords.top);
//         draggable.style.height = startHeight + resY+'px';
//       }
//     };
//   });
//
//   document.addEventListener('click', quit);
//   // drag.addEventListener('mouseup',quit);
//
//   function quit() {
//     document.onmousemove = null;
//     drag.onmouseup = null;
//   }
//
// });

