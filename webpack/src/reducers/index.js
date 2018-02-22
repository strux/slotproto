import { combineReducers } from 'redux'
import ui from './ui.js'
import stripInfo from './stripInfo.js'
import populationOutcomes from './populationOutcomes.js'

const rootReducer = combineReducers({
    ui,
    stripInfo,
    populationOutcomes,
});

export default rootReducer
