let state = {
    n: 0,
    mast_n: 0,
}

let elements = {};

function incr(x=1) {
    state.n += x;
    updateView();
}

function decr(x=1) {
    let delta = Math.min(x, state.n);
    state.n -= delta
    state.mast_n += delta;
    updateView();
}

function updateView() {
    elements.counter.innerHTML = state.n;
    elements.mast.innerHTML = state.mast_n;
}

const attach = () => {
    elements.div = document.getElementById('fugelsDiv');
    elements.div.style.display = 'block'
    elements.counter = document.getElementById('fugelCounterSpan');
    elements.mast = document.getElementById('fugelMastSpan');
    updateView();
    console.log('fugels attached');
};

export { attach, incr, decr }