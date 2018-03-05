import { reelsStopped } from '../reducers/ui.js';

export const bigWinMiddleware = store => next => action => {

    next(action);

    let state = store.getState();
    switch (action.type) {
        case 'REEL_STOPPED':
            if (reelsStopped(state)) {
                store.dispatch({ type: 'START_BIG_WIN' });
            }
        case 'SKIP_REQUESTED':
            if (state.ui.bigWinStatus === 'running') {
                store.dispatch({ type: 'STOP_BIG_WIN' });
            }
        default:
            return state
    }
}
