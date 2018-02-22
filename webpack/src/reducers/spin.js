const jp = require('jsonpath');
import mockSpinResponses from '../mock_data/spin_responses.json';

const defaultState = mockSpinResponses[0];

const spinResult = (state = defaultState, action) => {
    switch (action.type) {
        case 'SPIN_RECEIVED':
            return action.payload
        default:
            return state
    }
}
export default spinResult

const getReelOutcomes = (state) => {
    let reels = jp.query(state, '$..PopulationOutcome[?(@.name=="BaseGame.Reels")].Entry.*').map((r) => r.Cell);
    return reels;
}
export { getReelOutcomes }
