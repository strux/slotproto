const defaultState = {
    'spinRequested': false,
    'bigWinPlaying': false,
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
        default:
            return state
    }
}

export default ui
