const defaultState = {
    'spinRequested': false,
    'bigWinPlaying': false,
}

const ui = (state = defaultState, action) => {
    switch (action.type) {
        case 'SPIN_REQESTED':
            return {
                ...state,
                spinRequested: true,
            }
        default:
            return state
    }
}

export default ui
