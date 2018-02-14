import * as PIXI from 'pixi.js';
import './style.css';
import { Button, connectedComponent } from './components/button.js';
import { SlotControls } from './components/slotControls.js';
import { ReelController } from './components/ReelController.js';

import { createStore } from 'redux';
import reducer from './reducers/index.js';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export { store };



//Create a Pixi Application
const app = new PIXI.Application({
    width: 1024,
    height: 768,
    antialiasing: true,
    transparent: false,
    resolution: 1
});

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

    let bg = PIXI.Sprite.fromFrame("bg_freespin");
    app.stage.addChild(bg);

    let name = "Babel";
    console.log(`This should indicate that ${name} is working.`)

    let reelController = new ReelController('slotface', store);
    reelController.anchor.set(0.5);
    reelController.x = app.stage.width / 2;
    reelController.y = (app.stage.height / 2) - 40;
    app.stage.addChild(reelController);

    let controls = new SlotControls('bottom_bar', store);
    controls.y = app.stage.height - controls.height;
    app.stage.addChild(controls);
}
