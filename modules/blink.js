import {state} from './model.js';
import {elements} from './view.js';

const frame1 = `
     __))
    /o__o\\
    \\ \\/ /
 '__/    \\
  \\-      )
   \\_____/
_____|_|_______________________________
     " "
`;

const frame2 = `
     __//
    /.__.\\
    \\ \\/ /
 '__/    \\
  \\-      )
   \\_____/
_____|_|_______________________________
     " "
`;

function activate() {
    elements.asciiDiv.style.display = 'block';
    window.setInterval(loop, 150);
}

function loop() {
    if (Math.random() < 0.05) {
        elements.blinkendeKyllingPre.innerHTML = frame2;
    }
    else {
        elements.blinkendeKyllingPre.innerHTML = frame1;
    }
}

export { activate }