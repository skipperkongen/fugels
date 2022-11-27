import * as fugels from './fugels.js';
import * as constants from './constants.js';

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
    fugels.decr(delta);
}

const attach = () => {
    elements.div = document.getElementById('masningDiv');
    elements.div.style.display = 'block'
    elements.counter = document.getElementById('masningCounterSpan');
    elements.incrButton = document.getElementById('masningIncrButton');
    elements.incrButton.addEventListener("click", incr);
    state.loopId = window.setInterval(loop, constants.ms);
    updateView();
    console.log('masning attached');
};

const detach = () => {
    window.clearInterval(state.loopId);
    elements.div.style.display = 'none';
};

export { attach, detach }