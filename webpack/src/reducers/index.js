import { combineReducers } from 'redux'
import ui from './ui.js'
import paytable from './paytable.js'
import spinResult from './spin.js'

const rootReducer = combineReducers({
    ui,
    paytable,
    spinResult
});

export default rootReducer
