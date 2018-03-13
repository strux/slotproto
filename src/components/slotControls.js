import { Button } from './button.js';
import { reelsStopped } from '../reducers/ui.js';
import { getSimplifiedStripInfo } from '../reducers/stripInfo.js';
import { findFirstChildWithName } from '../util/spriteUtil.js';
class SlotControls {

    constructor(sprite, store) {

        this.sprite = sprite
        this.store = store;

        this.spinBtn = this.createSpinButton();
        this.skipBtn = this.createSkipButton();

        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        this.spinBtn.disabled = !reelsStopped(state);
        this.skipBtn.visible = state.ui.bigWinStatus !== 'idle';
        this.skipBtn.disabled = state.ui.bigWinStatus !== 'running';
        this.spinBtn.visible = !this.skipBtn.visible;
    }

    createSpinButton() {

        let btn = new Button(findFirstChildWithName(this.sprite, 'spinButton'));
        btn.onClick = this.onSpinClick.bind(this);
        return btn;
    }

    createSkipButton() {

        let btn = new Button(findFirstChildWithName(this.sprite, 'skipButton'));
        btn.onClick = this.onSkipClick.bind(this);
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
