import { combineReducers } from 'redux'
import ui from './ui.js'
import spinResult from './spin.js'

const rootReducer = combineReducers({
    ui,
    spinResult
});

export default rootReducer
