import mockSpinResponses from '../mock_data/spin_responses.json';

const prizeOutcomes = (state = defaultState, action) => {
    switch (action.type) {
        case 'SPIN_RECEIVED':
            return parsePrizeOutcome(action.payload);
        default:
            return state;
    }
}
export default prizeOutcomes

const parsePrizeOutcome = (payload) => {
    return payload.responseObject.PrizeOutcome.reduce((map,obj) => {
        if (Array.isArray(obj.Entry)) {
            obj.Entry = obj.Entry.reduce((map, obj) => {
                map[obj.name] = obj;
                return map;
            }, {});
        }
        map[obj.name] = obj;
        return map;
    } ,{});
}

const defaultState = parsePrizeOutcome(mockSpinResponses[0]);
