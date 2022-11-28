import {state} from './model.js';
import {elements} from './view.js';

function activate() {
    elements.generatorDiv.style.display = 'block';
    elements.generatorIncrButton.addEventListener("click", incrGenerators);
    window.setInterval(loop, 150);
}

function incrGenerators() {
    state.numGenerators++;
}

function loop() {
    state.numFugels += state.numGenerators;
    elements.generatorCounterSpan.innerHTML = state.numGenerators;
}

export { activate }