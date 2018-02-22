import { combineReducers } from 'redux'
import ui from './ui.js'
import paytable from './paytable.js'
import populationOutcomes from './populationOutcomes.js'

const rootReducer = combineReducers({
    ui,
    paytable,
    populationOutcomes,
});

export default rootReducer
