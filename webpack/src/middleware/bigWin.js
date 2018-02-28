import { reelsStopped } from '../reducers/ui.js';

export const bigWinMiddleware = store => next => action => {

    next(action);

    let state = store.getState();
    if (action.type === 'REEL_STOPPED') {
        if (reelsStopped(state)) {
            store.dispatch({ type: 'START_BIG_WIN' });
        }
    }
}
