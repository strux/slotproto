import { Button } from './button.js';
import { reelsStopped } from '../reducers/ui.js';
import { getSimplifiedStripInfo } from '../reducers/stripInfo.js';

class SlotControls extends PIXI.Sprite {

    constructor(frameId, store) {
        super(PIXI.utils.TextureCache[frameId]);

        this.store = store;

        this.spinBtn = this.createSpinButton();
        this.addChild(this.spinBtn);

        this.skipBtn = this.createSkipButton();
        this.addChild(this.skipBtn);

        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        this.spinBtn.disabled = !reelsStopped(state);
        this.skipBtn.visible = state.ui.bigWinPlaying;
    }

    createSpinButton() {

        let btn = new Button('btn_spin');
        btn.onClick = this.onSpinClick.bind(this);
        btn.anchor.set(1,1);
        btn.x = this.width - 10;
        btn.y = this.height - 6;
        return btn;
    }

    createSkipButton() {

        let btn = new Button('btn_skip');
        btn.onClick = this.onSkipClick.bind(this);
        btn.anchor.set(1,1);
        btn.x = this.width - 10;
        btn.y = this.height - 6;
        btn.visible = false;
        return btn;
    }

    onSpinClick() {
        let reelCount = getSimplifiedStripInfo(this.store.getState(), 'BaseGame').length;
        this.store.dispatch({ type: 'SPIN_MACHINE' });
    }

    onSkipClick() {
        this.store.dispatch({ type: 'SKIP_REQUESTED' });
    }
}
export { SlotControls }
