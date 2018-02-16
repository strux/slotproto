import { CONFIG } from '../constants.js';

const spinReels = (dispatch) => {
    for (let i=0; i<CONFIG.reelCount; i++) {
        setTimeout(() => dispatch({ type: 'SPIN_REEL', index: i }), 500 * i);
    }
}
export { spinReels }
