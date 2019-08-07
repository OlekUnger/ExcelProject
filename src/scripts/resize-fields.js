//растяжение полей drag-n-drop
const drags = Array.from(document.querySelectorAll('.drag'));
drags.map(drag=>{

  drag.addEventListener('mousedown', (e)=>{
  //
    var draggable  = drag.parentElement.parentElement,
      clasS = draggable.classList[1],
      startWidth = draggable.clientWidth,
      coords = drag.getBoundingClientRect(),
      x = coords.left,
      rows = Array.from(document.querySelectorAll(`.${clasS}`));

    console.log(draggable, clasS, startWidth);
  //
  //   drag.addEventListener('mouseup',quit);
  //   document.addEventListener('click', quit);
  //
  //   document.onmousemove = function(e) {
  //     e.pageX = coords.left;
  //     var res = Math.floor(e.pageX - x);
  //
  //     draggable.style.width = startWidth+res+'px';
  //
  //     for(row of rows){
  //       row.style.width = draggable.clientWidth+2+'px';
  //     }
  //   };
  //
  //   function quit(){
  //     document.onmousemove = null;
  //     drag.onmouseup = null;
  //   }
  });
});
