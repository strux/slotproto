import { getSimplifiedOutcome } from '../reducers/populationOutcomes.js';

const defaultReelState =  {
        state: 'stopped',
        isAnticipating: false,
};

const defaultState = {
    'spinRequested': false,
    'bigWinPlaying': false,
    'reels': [
        { ...defaultReelState },
        { ...defaultReelState },
        { ...defaultReelState },
        { ...defaultReelState },
        { ...defaultReelState },
    ],
}

const ui = (state = defaultState, action) => {
    switch (action.type) {
        case 'SPIN_REQUESTED':
            return {
                ...state,
                spinRequested: true,
            }
        case 'SPIN_RECEIVED':
            return {
                ...state,
                spinRequested: false,
            }
        case 'SPIN_REEL':
            return {
                ...state,
                reels: state.reels.map((item, index) => {
                    if (index === action.index) {
                        return {
                            ...item,
                            state: 'spinning',
                        }
                    } else {
                        return item;
                    }
                }),
            }
        case 'STOP_REEL':
            return {
                ...state,
                reels: state.reels.map((item, index) => {
                    if (index === action.index) {
                        return {
                            ...item,
                            state: 'stopping',
                        }
                    } else {
                        return item;
                    }
                }),
            }
        case 'REEL_STOPPED':
            return {
                ...state,
                reels: state.reels.map((item, index) => {
                    if (index === action.index) {
                        return {
                            ...item,
                            state: 'stopped',
                        }
                    } else {
                        return item;
                    }
                }),
            }
        case 'ANTICIPATE_REEL':
            return {
                ...state,
                reels: state.reels.map((item, index) => {
                    if (index === action.index) {
                        return {
                            ...item,
                            isAnticipating: true,
                        }
                    } else {
                        return item;
                    }
                }),
            }
        case 'STOP_REEL_ANTICIPATION':
            return {
                ...state,
                reels: state.reels.map((item, index) => {
                    if (index === action.index) {
                        return {
                            ...item,
                            isAnticipating: false,
                        }
                    } else {
                        return item;
                    }
                }),
            }
        case 'START_BIG_WIN':
            return {
                ...state,
                bigWinPlaying: true,
            }
        case 'STOP_BIG_WIN':
            return {
                ...state,
                bigWinPlaying: false,
            }
        default:
            return state
    }
}
export default ui

export const reelCount = (state) => {
    return state.ui.reels.length;
}

export const cellCounts = (state) => {
    return state.ui.reels.map((r) => r.length);
}

export const reelsSpinning = (state) => {
    return state.ui.reels.some((r) => r.state === 'spinning');
}

export const reelsStopped = (state) => {
    return state.ui.reels.every((r) => r.state === 'stopped');
}

export const willAnticipate = (index) => {
    return index === 2;
    //return reels[1].some((c) => 'F8') && reels[2].some((c) => 'F8');
}
