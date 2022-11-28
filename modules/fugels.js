import {state} from './model.js';
import {elements} from './view.js';

function activate() {
    elements.fugelsDiv.style.display = 'block';
    window.setInterval(loop, 150);
}

function loop() {
    elements.fugelCounterSpan.innerHTML = state.numFugels;
    elements.fugelMastSpan.innerHTML = state.numMashedFugels;
}

export { activate }