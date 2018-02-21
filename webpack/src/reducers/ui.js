const defaultState = {
    'spinRequested': false,
    'bigWinPlaying': false,
    'reels': [
        { state: 'stopped' },
        { state: 'stopped' },
        { state: 'stopped' },
        { state: 'stopped' },
        { state: 'stopped' },
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
        default:
            return state
    }
}
export default ui

export const reelsSpinning = (state) => {
    return state.ui.reels.some((r) => r.state === 'spinning');
}

export const reelsStopped = (state) => {
    return state.ui.reels.every((r) => r.state === 'stopped');
}
