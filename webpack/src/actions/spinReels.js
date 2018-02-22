
const spinDelay = 100;
const spinTime = 2000;

const spinReels = (dispatch, reelCount) => {
    for (let i=0; i<reelCount; i++) {
        setTimeout(() => dispatch({ type: 'SPIN_REEL', index: i }), (spinDelay * i));
    }
}
export { spinReels }

const stopReels = (dispatch, reelCount) => {
    for (let i=0; i<reelCount; i++) {
        setTimeout(() => dispatch({ type: 'STOP_REEL', index: i }), (spinDelay * i) + spinTime);
    }
}
export { stopReels }
