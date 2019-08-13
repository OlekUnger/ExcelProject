// растяжение полей drag-n-drop

function resizeFields(e) {
  const draggable = e.target.closest('.resizable');

  if (!draggable) {
    return;
  }
  const draggableId = draggable.id;
  const coords = draggable.getBoundingClientRect();

  document.onmousemove = (event) => {
    if (draggable.classList.contains('resizable-x')) {
      const resX = Math.floor(event.pageX - coords.left);
      draggable.style.width = `${resX}px`;

      const asd = Array.from(document.querySelectorAll(`.${draggableId}`));

      asd.forEach((elem, i) => {
        asd[i].style.width = `${resX}px`;
      });
    } else if (draggable.classList.contains('resizable-y')) {
      const resY = Math.floor(event.pageY - coords.top);
      const row = document.querySelector(`.${draggableId}`);

      draggable.style.height = `${resY}px`;
      row.style.height = `${resY}px`;
    }
  };
}

function quit() {
  document.onmousemove = null;
  document.onmousedown = null;
}

document.addEventListener('mousedown', resizeFields);
document.removeEventListener('mouseup', quit);
document.addEventListener('click', quit);
