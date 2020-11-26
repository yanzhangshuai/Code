import React from 'react';
import './App.css';
const LC = require('../node_modules/literallycanvas/lib/js/literallycanvas-core');

let lc = null;
function App() {
  setTimeout(() => {
    lc = LC.init(document.getElementById('main'), {
      imageURLPrefix: '../node_modules/literallycanvas/lib/img',
      tools: [
        LC.tools.Pencil,
        LC.tools.Eraser,
        LC.tools.Line,
        LC.tools.Rectangle,
        LC.tools.Text,
        LC.tools.Eyedropper,
      ],
      toolbarPosition: 'top',
      backgroundColor:'red',
    });
  }, 1000);
  return (
    <div className="App">
      <div class="toobal">
        <button onClick={() => {
          lc.setColor('primary', 'hsl(120,100%,50%,0.3)')
        }}>改变颜色</button>
        <button onClick={() => {
          lc.trigger('setStrokeWidth', 16)
        }}>改变大小</button>
        <button onClick={
          () => {
            let dragging = false;
            document.addEventListener("mousedown", (event) => {
              console.log('onMouseDown')
              dragging = true;
            });
            document.addEventListener("mouseup",  (event) => {
              console.log('mousemove')
              dragging = false;
            });
            document.addEventListener('mousemove', (event) => {
              if (dragging) {
                lc.setPan(event.clientX, event.clientY);
              }
             
            })
          }
        }>移动</button>
        <button></button>
        <button></button>
      </div>
      <div id="main"></div>
    </div>
  );
}

export default App;
