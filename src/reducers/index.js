import { combineReducers } from 'redux'
import ui from './ui.js'
import stripInfo from './stripInfo.js'
import populationOutcomes from './populationOutcomes.js'
import prizeOutcomes from './prizeOutcomes.js'

const rootReducer = combineReducers({
    ui,
    stripInfo,
    populationOutcomes,
    prizeOutcomes,
});

export default rootReducer
