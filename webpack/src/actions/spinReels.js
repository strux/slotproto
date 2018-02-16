import { CONFIG } from '../constants.js';

const spinDelay = 100;
const spinTime = 2000;

const spinReels = (dispatch) => {
    for (let i=0; i<CONFIG.reelCount; i++) {
        setTimeout(() => dispatch({ type: 'SPIN_REEL', index: i }), (spinDelay * i));
    }
}
export { spinReels }

const stopReels = (dispatch) => {
    for (let i=0; i<CONFIG.reelCount; i++) {
        setTimeout(() => dispatch({ type: 'STOP_REEL', index: i }), (spinDelay * i) + spinTime);
    }
}
export { stopReels }
