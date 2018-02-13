import * as PIXI from 'pixi.js';
import './style.css';
import { Button, connectedComponent } from './components/button.js';
import { SlotControls } from './components/slotControls.js';

import { createStore } from 'redux';
import counter from './reducers/counter.js';
const counterStore = createStore(counter);
export { counterStore };



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

    let btnTest = new Button('btn_spin', 'INCREMENT');

    //btnTest = connectedComponent(btnTest, counterStore);
    app.stage.addChild(btnTest);

    let controls = new SlotControls(counterStore);
    controls.y = app.stage.height - controls.height;
    app.stage.addChild(controls);
}
