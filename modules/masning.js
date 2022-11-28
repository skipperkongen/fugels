import {state} from './model.js';
import {elements} from './view.js';

function activate() {
    elements.masningDiv.style.display = 'block';
    elements.masningIncrButton.addEventListener("click", incrMasning);
    window.setInterval(loop, 150);
}

function incrMasning() {
    state.numMashers++;
}

function loop() {
    let delta = Math.min(state.numFugels, state.numMashers);
    state.numFugels -= delta;
    state.numMashedFugels += delta;
    elements.masningCounterSpan.innerHTML = state.numMashers;
}

export { activate }
