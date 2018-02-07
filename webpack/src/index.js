import * as PIXI from 'pixi.js';
import './style.css';

//Create a Pixi Application
let app = new PIXI.Application({
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
    './images/slottemplate_slot1.json',
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

    let bg = PIXI.Sprite.fromFrame("bg_slot");
    app.stage.addChild(bg);

}
