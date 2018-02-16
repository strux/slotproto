import mockSpinResponses from '../mock_data/spin_responses.json';
import { stopReels } from './spinReels.js'

let index = 0;
const fetchSpin = (dispatch) => {
    dispatch({ type: 'SPIN_REQUESTED' });
    // stand in for async api calls
    let asyncDelay = 800;
    setTimeout(() => dispatch({ type: 'SPIN_RECEIVED', payload: mockSpinResponses[index++] }), asyncDelay);
    setTimeout(() => stopReels(dispatch), asyncDelay);
}

export { fetchSpin }