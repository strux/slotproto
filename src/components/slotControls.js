import { Button } from './button.js';
import { reelsStopped } from '../reducers/ui.js';
import { getSimplifiedStripInfo } from '../reducers/stripInfo.js';
import { findFirstChildWithName } from '../util/spriteUtil.js';
class SlotControls {

    constructor(sprite, store) {
        this.sprite = sprite

        this.store = store;

        this.spinBtn = this.createSpinButton();
        // this.sprite.addChild(this.spinBtn);

        // this.skipBtn = this.createSkipButton();
        // this.sprite.addChild(this.skipBtn);

        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        // this.skipBtn.visible = state.ui.bigWinStatus !== 'idle';
        // this.skipBtn.disabled = state.ui.bigWinStatus !== 'running';
        this.spinBtn.disabled = !reelsStopped(state);
        //this.spinBtn.visible = !this.skipBtn.visible;
        
    }

    createSpinButton() {

        let btn = new Button(findFirstChildWithName(this.sprite, 'spinButton'));
        btn.onClick = this.onSpinClick.bind(this);
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
