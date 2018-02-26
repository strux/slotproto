import mockSpinResponses from '../mock_data/spin_responses.json';
import { getSimplifiedOutcome } from '../reducers/populationOutcomes.js';
import { TimelineMax } from 'gsap';

let mockIndex = 1;
export const spinReelsMiddleware = store => next => action => {

    next(action);

    if (action.type === 'SPIN_MACHINE') {
        let reels = store.getState().ui.reels;
        store.dispatch({ type: 'SPIN_REQUESTED' });
        let asyncDelay = 800;
        setTimeout(() => store.dispatch({ type: 'SPIN_RECEIVED', payload: mockSpinResponses[mockIndex++] }), asyncDelay);

        let tl = new TimelineMax();
        reels.forEach((reel, index) => {
            tl.addCallback(() => store.dispatch({ type: 'SPIN_REEL', index: index }), '+=0.1', this);
        }, this);
    }
    if (action.type === 'SPIN_RECEIVED') {
        let reels = store.getState().ui.reels;
        let tl = new TimelineMax();

        reels.forEach((reel, index) => {
            let position = '+=0.3';
            if (shouldAnticipate(store.getState(), index)) {
                tl.addCallback(() => store.dispatch({ type: 'ANTICIPATE_REEL', index: index }), position, this);
                position = '+=2';
            }
            tl.addCallback(() => store.dispatch({ type: 'STOP_REEL', index: index }), position, this);
        }, this);
    }
    if (action.type === 'REEL_STOPPED') {
        let reels = store.getState().ui.reels;
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
