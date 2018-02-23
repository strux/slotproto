export const reelAnticipationMiddleware = store => next => action => {

    let anticipationReelIndex = action.index + 1;
    let reelCount = store.getState().ui.reels.length;
    let ui = store.getState().ui;
    if (action.type === 'REEL_STOPPED' && anticipationReelIndex < reelCount && ui.reels[anticipationReelIndex].willAnticipate) {
        store.dispatch({ type: 'ANTICIPATE_REEL', index: anticipationReelIndex });
    }
    let result = next(action);
    return result;
}
