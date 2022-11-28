import * as fugels from './fugels.js';
import * as constants from './constants.js';
// import {randomInt} from './utils.js';

let state = {
    loopId: null,
    n: 0,
    glitchProb: 0.1,
};

let elements = {};

function incr(event, x=1) {
    state.n += x;
    updateView();
}

function decr(event, x=1) {
    state.n = Math.min(x, state.n);
    updateView();
}

function updateView() {
    elements.counter.innerHTML = state.n;
}

function loop() {
    // TODO: make more efficient by sampling from binomial distribution
    let delta = [...Array(state.n).keys()].filter(()=>Math.random()>state.glitchProb).length
    fugels.incr(delta);
}

function detach() {
    window.clearInterval(state.loopId);
    elements.div.style.display = 'none';
}

function attach() {
    elements.div = document.getElementById('generatorDiv');
    elements.div.style.display = 'block'
    elements.counter = document.getElementById('generatorCounterSpan');
    elements.incrButton = document.getElementById('generatorIncrButton');
    elements.incrButton.addEventListener("click", incr);
    elements.detachButton = document.getElementById('generatorDetachButton');
    elements.detachButton.addEventListener("click", detach);
    state.loopId = window.setInterval(loop, constants.ms);
    updateView();
    console.log('generator attached');
}

export { attach, detach }