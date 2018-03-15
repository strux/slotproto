import * as PIXI from 'pixi.js';
import 'pixi-spine';
import './style.css';
import { REELS_CONFIG } from './constants.js';
import { Sprite } from './components/sprite.js';
import { SlotControls } from './components/slotControls.js';
import { ReelController } from './components/ReelController.js';
import { Anticipation } from './components/anticipation.js';
import { BigWin } from './components/bigWin.js';
import { BigWinSpine } from './components/bigWinSpine.js';
import { Rollup } from './components/rollup.js';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
import { layoutBuilder } from './util/layoutBuilder.js';
import { stageMiddleware } from './middleware/stage.js';
import { spinReelsMiddleware } from './middleware/spinReels.js';
import { bigWinMiddleware } from './middleware/bigWin.js';

import baseGameLayoutData from './layout/basegame.json';

const store = createStore(reducer,
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                          applyMiddleware(stageMiddleware, spinReelsMiddleware, bigWinMiddleware)
                         );
export { store };

//Create a Pixi Application
const app = new PIXI.Application({
    //forceCavas: true,
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
    "./images/spritesheet_slot1.json",
    "./images/spritesheet_slot2.json",
    "./images/spritesheet_common1.json",
    "./images/spritesheet_paytable1.json",
])
.add('bigWin', './spine/bigwin.json')
.add('slotLayout', './spine/layout.json')
.load(setup);

function setup(loader, res) {

    store.dispatch({ type: 'INITIALIZE_STAGE', stage: 'BaseGame'});

    let layout = new PIXI.spine.Spine(res.slotLayout.spineData);
    console.log(layout);
    app.stage.addChild(layout);
    layout.x = (app.stage.width / 2);
    layout.y = (app.stage.height / 2);

    let btn = layout.children[4];
    btn.buttonMode = true;
    btn.interactive = true;
    btn.on('pointerdown', () => {
        store.dispatch({ type: 'SPIN_MACHINE' });
        layout.state.setAnimation(0, 'spinDim');
        let listeners = { event: (entry, event) => {
            if (event.data.name === 'myTestEvent') {
                layout.state.setAnimation(1, 'infoButtonJiggle');
            }
        }};
        layout.state.addListener(listeners);
    });

    const spriteById = layoutBuilder(baseGameLayoutData, app.stage.addChild(new PIXI.Container()));


    let anticipation = spriteById.anticipation;
    anticipation.anchor.set(0.5);
    anticipation.x = (app.stage.width / 2) + 125;
    anticipation.y = (app.stage.height / 2) - 130;
    anticipation.width = REELS_CONFIG.cellWidth + 45;
    anticipation.height = (REELS_CONFIG.cellHeight * 4) + 40;

    new Anticipation(anticipation, store);

    /*
    new SlotControls(spriteById.slotControls, store);
    */

    let spineAnim = new PIXI.spine.Spine(res.bigWin.spineData);
    //spriteById.bigWin.addChild(spineAnim);

    spineAnim.x = (app.stage.width / 2);
    spineAnim.y = (app.stage.height / 2);
    app.stage.addChild(spineAnim);

    var style = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'Arial',
      fontSize: 40,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#3AE8BD'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440
    });
    var rollup = new Rollup(style);
    //app.stage.addChild(rollup);

    let bigWin = new BigWinSpine(spineAnim, rollup, store);



    new ReelController(spriteById.slotFace, store, REELS_CONFIG);
}
