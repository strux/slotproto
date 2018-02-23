import mockSpinResponses from '../mock_data/spin_responses.json';

export const spinReelsMiddleware = store => next => action => {

    if (action.type === 'SPIN_MACHINE') {
        store.dispatch({ type: 'SPIN_REQUESTED' });
        let mockIndex = 1;
        let asyncDelay = 800;
        setTimeout(() => store.dispatch({ type: 'SPIN_RECEIVED', payload: mockSpinResponses[mockIndex++] }), asyncDelay);

        let spinDelay = 100;
        let reelCount = store.getState().ui.reels.length;
        for (let i=0; i<reelCount; i++) {
            setTimeout(() => store.dispatch({ type: 'SPIN_REEL', index: i }), (spinDelay * i));
        }
    }
    if (action.type === 'SPIN_RECEIVED') {
        let stopDelay = 100;
        let reelCount = store.getState().ui.reels.length;
        for (let i=0; i<reelCount; i++) {
            setTimeout(() => store.dispatch({ type: 'STOP_REEL', index: i }), (stopDelay * i));
        }
    }

    let result = next(action);
    return result;
}
