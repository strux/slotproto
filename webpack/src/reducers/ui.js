const defaultState = {
    'spinRequested': false,
    'bigWinPlaying': false,
    'reels': [
        { spinning: false },
        { spinning: false },
        { spinning: false },
        { spinning: false },
        { spinning: false },
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
                            spinning: true,
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
                            spinning: false,
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

const reelsSpinning = (state) => {
    return state.ui.reels.reduce((prev, curr) => prev || curr.spinning, false);
}
export { reelsSpinning }
