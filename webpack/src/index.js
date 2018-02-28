import * as PIXI from 'pixi.js';
import './style.css';
import { REELS_CONFIG } from './constants.js';
import { SlotControls } from './components/slotControls.js';
import { ReelController } from './components/ReelController.js';
import { Anticipation } from './components/anticipation.js';
import { BigWin } from './components/bigWin.js';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
import { stageMiddleware } from './middleware/stage.js';
import { spinReelsMiddleware } from './middleware/spinReels.js';
import { bigWinMiddleware } from './middleware/bigWin.js';

const store = createStore(reducer,
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                          applyMiddleware(stageMiddleware, spinReelsMiddleware, bigWinMiddleware)
                         );
export { store };



//Create a Pixi Application
const app = new PIXI.Application({
    width: 1024,
    height: 768,
    antialiasing: true,
    transparent: false,
    resolution: 1
});
export { app };

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//load a JSON file and run the `setup` function when it's done
PIXI.loader
.add([
    "./images/slottemplate_slot1.json",
    "./images/slottemplate_slot2.json",
    "./images/slottemplate_slot3.json",
    "./images/slottemplate_slot4.json",
    "./images/slottemplate_slot5.json",
    "./images/slottemplate_slot6.json",
    "./images/slottemplate_slot7.json",
    "./images/slottemplate_common1.json",
    "./images/slottemplate_paytable1.json",
])
.load(setup);

function setup() {

    store.dispatch({ type: 'INITIALIZE_STAGE', stage: 'BaseGame'});

    let bg = PIXI.Sprite.fromFrame("bg_freespin");
    app.stage.addChild(bg);

    let reelController = new ReelController('slotface', store, REELS_CONFIG);
    reelController.anchor.set(0.5);
    reelController.x = app.stage.width / 2;
    reelController.y = (app.stage.height / 2) - 40;
    app.stage.addChild(reelController);

    let anticipation = new Anticipation('anticipation_fm0', store);
    anticipation.anchor.set(0.5);
    anticipation.x = (app.stage.width / 2) + 160;
    anticipation.y = (app.stage.height / 2) - 40;
    anticipation.width = REELS_CONFIG.cellWidth + 45;
    anticipation.height = (REELS_CONFIG.cellHeight * 4) + 40;
    app.stage.addChild(anticipation);

    let bigWin = new BigWin('bigwin_swirl', app.stage.width, app.stage.width, store);
    bigWin.anchor.set(0.5);
    bigWin.x = (app.stage.width / 2);
    bigWin.y = (app.stage.height / 2);
    app.stage.addChild(bigWin);

    let controls = new SlotControls('bottom_bar', store);
    controls.y = 768 - controls.height;
    app.stage.addChild(controls);
}
