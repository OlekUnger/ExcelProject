//растяжение полей drag-n-drop
const drags = Array.from(document.querySelectorAll('.drag'));
drags.map(drag => {

  drag.addEventListener('mousedown', (e) => {

    var elem = e.target,
      draggableId = e.target.classList[0],
      draggable = document.querySelector(`#${draggableId}`),
      startWidth = draggable.clientWidth,
      startHeight = draggable.clientHeight,
      coords = drag.getBoundingClientRect();

    document.onmousemove = function (e) {

      if(elem.classList.contains('dragX')) {
        let resX = Math.floor(e.pageX - coords.left);
        draggable.style.width = startWidth+resX+'px';
      }
      if(elem.classList.contains('dragY')) {
        let resY = Math.floor(e.pageY - coords.top);
        draggable.style.height = startHeight + resY+'px';
      }
    };
  });

  document.addEventListener('click', quit);
  drag.addEventListener('mouseup', quit);

  function quit() {
    document.onmousemove = null;
    drag.onmouseup = null;
  }
});
