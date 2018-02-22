const jp = require('jsonpath');
import mockSpinResponses from '../mock_data/spin_responses.json';

const populationOutcomes = (state = defaultState, action) => {
    switch (action.type) {
        case 'PAYTABLE_RECEIVED':
            return state;
        case 'SPIN_RECEIVED':
            return parsePopulationOutcome(action.payload);
        default:
            return state;
    }
}
export default populationOutcomes

const parsePopulationOutcome = (payload) => {
    return payload.responseObject.PopulationOutcome.reduce((map,obj) => {
        obj.Entry = obj.Entry.reduce((map, obj) => {
            map[obj.name] = obj;
            return map;
        }, {});
        map[obj.name] = obj;
        return map;
    } ,{});
}

export const getSimplifiedOutcome = (state, outcomeName) => {
    if (state.populationOutcomes[outcomeName]) {
        return Object.values(state.populationOutcomes[outcomeName].Entry).map((o) => o.Cell);
    }
    return [];
}

const defaultState = parsePopulationOutcome(mockSpinResponses[0]);
