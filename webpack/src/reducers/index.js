import { combineReducers } from 'redux'
import ui from './ui.js'
import paytable from './paytable.js'
import spinResult from './spin.js'
import populationOutcomes from './populationOutcomes.js'

const rootReducer = combineReducers({
    ui,
    paytable,
    spinResult,
    populationOutcomes,
});

export default rootReducer
