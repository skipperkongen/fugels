import * as constants from './constants.js';

let state = {
    loopId: null,
    blinkProb: 0.05,
}

let elements = {};

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

function loop() {
    if (Math.random() < state.blinkProb) {
        elements.pre.innerHTML = frame2;
    }
    else {
        elements.pre.innerHTML = frame1;
    }
}


function attach() {
    elements.pre = document.getElementById('blinkendeKyllingPre');
    elements.pre.style.display = 'block'
    state.loopId = window.setInterval(loop, constants.ms);
    console.log('blink attached');
}

export { attach }