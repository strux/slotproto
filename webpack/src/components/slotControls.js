import { Button } from './button.js';
import { reelsStopped } from '../reducers/ui.js';
import { getSimplifiedStripInfo } from '../reducers/stripInfo.js';

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
        let reelCount = getSimplifiedStripInfo(this.store.getState(), 'BaseGame').length;
        //spinReels(this.store.dispatch, reelCount);
        //fetchSpin(this.store.dispatch, reelCount);
        this.store.dispatch({ type: 'SPIN_MACHINE' });
    }
}
export { SlotControls }
