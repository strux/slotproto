import mockSpinResponses from '../mock_data/paytable_response.json';

const stripInfo = (state = defaultState, action) => {
    switch (action.type) {
        case 'PAYTABLE_RECEIVED':
            return parseStripInfo(action.payload);
        default:
            return state;
    }
}
export default stripInfo

const parseStripInfo = (payload) => {
    return payload.responseObject.StripInfo.reduce((map,obj) => {
        if (Array.isArray(obj.Strip)) {
            obj.Strip = obj.Strip.reduce((map, obj) => {
                if (Array.isArray(obj.Stop)) {
                    obj.Stop = obj.Stop.map((s) => s.symbolID);
                }
                map[obj.name] = obj;
                return map;
            }, {});
        }
        map[obj.name] = obj;
        return map;
    } ,{});
}

export const getSimplifiedStripInfo = (state, stripName) => {
    if (state.stripInfo[stripName]) {
        return Object.values(state.stripInfo[stripName].Strip).map((o) => o.Stop);
    }
    return [];
}

const defaultState = parseStripInfo(mockSpinResponses);
