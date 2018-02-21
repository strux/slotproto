import { Button } from './button.js';
import { fetchSpin } from '../actions/spin.js';
import { spinReels } from '../actions/spinReels.js';
import { reelsSpinning } from '../reducers/ui.js';
import { reelsStopped } from '../reducers/ui.js';

class SlotControls extends PIXI.Sprite {

    constructor(frameId, store) {
        super(PIXI.utils.TextureCache[frameId]);

        this.store = store;

        this.btnTest = new Button('btn_spin');
        this.btnTest.onClick = this.onSpinClick.bind(this);
        this.btnTest.anchor.set(1,1);
        this.btnTest.x = this.width - 10;
        this.btnTest.y = this.height - 6;
        this.addChild(this.btnTest);

        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        this.btnTest.disabled = !reelsStopped(state);
    }

    onSpinClick() {
        spinReels(this.store.dispatch);
        fetchSpin(this.store.dispatch);
    }
}
export { SlotControls }
