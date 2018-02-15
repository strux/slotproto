import mockSpinResponses from '../mock_data/spin_responses.json';

let index = 0;
const fetchSpin = (dispatch) => {
    dispatch({ type: 'SPIN_REQUESTED' });
    // stand in for async api calls
    setTimeout(() => dispatch({ type: 'SPIN_RECEIVED', payload: mockSpinResponses[index++] }), 1000);
}

export { fetchSpin }
