import { Button } from './button.js';
import { reelsStopped } from '../reducers/ui.js';
import { getSimplifiedStripInfo } from '../reducers/stripInfo.js';
import { findFirstChildWithName } from '../util/spriteUtil.js';
import { ButtonSpine } from '../components/buttonSpine.js';
class SlotControls {

    constructor(spine, store) {

        this.spine = spine;
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

        let btn = new Button(this.spine.skeleton.findSlot('spin').currentSprite);
        btn.onClick = this.onSpinClick.bind(this);
        return btn;
    }

    createSkipButton() {

        let btn = new Button(this.spine.skeleton.findSlot('skip').currentSprite);
        btn.onClick = this.onSkipClick.bind(this);
        return btn;
    }

    onSpinClick() {
        this.store.dispatch({ type: 'SPIN_MACHINE' });
    }

    onSkipClick() {
        this.store.dispatch({ type: 'SKIP_REQUESTED' });
    }
}
export { SlotControls }
