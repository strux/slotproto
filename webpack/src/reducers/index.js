import { combineReducers } from 'redux'
import ui from './ui.js'
import spinResult from './spin_result.js'

const rootReducer = combineReducers({
    ui,
    spinResult
});

export default rootReducer
