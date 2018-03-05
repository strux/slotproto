import mockPaytableResponse from '../mock_data/paytable_response.json';

export const stageMiddleware = store => next => action => {

    next(action);

    if (action.type === 'INITIALIZE_STAGE') {
        store.dispatch({ type: 'PAYTABLE_REQUESTED' });
        // would be async here
        store.dispatch({ type: 'PAYTABLE_RECEIVED', payload: mockPaytableResponse });
    }

}
