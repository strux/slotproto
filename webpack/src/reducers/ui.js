const defaultState = {
    'spinRequested': false,
    'spinReceived': false,
    'bigWinPlaying': false,
}

const ui = (state = defaultState, action) => {
    switch (action.type) {
        case 'SPIN_REQESTED':
            return {
                ...state,
                spinRequested: true,
            }
        case 'SPIN_RECEIVED':
            return {
                ...state,
                spinRequested: false,
                spinReceived: true,
            }
        default:
            return state
    }
}

export default ui
