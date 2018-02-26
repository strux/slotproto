import mockSpinResponses from '../mock_data/spin_responses.json';
import { getSimplifiedOutcome, nextReelIndex } from '../reducers/populationOutcomes.js';
import { TimelineMax } from 'gsap';

let mockIndex = 1;
export const spinReelsMiddleware = store => next => action => {

    next(action);
    let state = store.getState();
    const spinDelay = 300;
    const anticipationDelay = 2000;

    if (action.type === 'SPIN_MACHINE') {
        let reels = state.ui.reels;
        store.dispatch({ type: 'SPIN_REQUESTED' });
        let asyncDelay = 800;
        setTimeout(() => store.dispatch({ type: 'SPIN_RECEIVED', payload: mockSpinResponses[mockIndex++] }), asyncDelay);

        let tl = new TimelineMax();
        reels.forEach((reel, index) => {
            tl.addCallback(() => store.dispatch({ type: 'SPIN_REEL', index: index }), '+=0.1', this);
        }, this);
    }
    if (action.type === 'SPIN_RECEIVED') {
        setTimeout(() => store.dispatch({ type: 'STOP_REEL', index: 0 }), 300);
    }
    if (action.type === 'REEL_STOPPED') {

        let nextIndex = nextReelIndex(state, action.index);
        if (nextIndex > -1) {
            let delay = spinDelay;
            if (shouldAnticipate(state, nextIndex)) {
                delay = anticipationDelay;
                store.dispatch({ type: 'ANTICIPATE_REEL', index: nextIndex });
            }
            setTimeout(() => store.dispatch({ type: 'STOP_REEL', index: nextIndex }), delay);
        }

        let reels = state.ui.reels;
        if (reels[action.index].isAnticipating) {
            store.dispatch({ type: 'STOP_REEL_ANTICIPATION', index: action.index });
        }
    }
}

const shouldAnticipate = (state, index) => {
    let outcome = getSimplifiedOutcome(state, 'BaseGame.Reels');
    let twoKings = outcome[1].some((v) => v === 'F8') && outcome[2].some((v) => v === 'F8');
    return twoKings && index === 3;
}
