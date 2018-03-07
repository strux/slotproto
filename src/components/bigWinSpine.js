import { Tweenlite } from 'gsap';
import { app } from '../index.js';

class BigWinSpine {

    constructor(anim, rollup, store) {

        this.anim = anim;
        this.rollup = rollup;
        this.track = this.anim.state.setAnimation(0, 'animation');
        this.listeners = { complete: this.stopBigWin.bind(this) };
        this.anim.state.addListener(this.listeners);
        this.track.timeScale = 0;
        this.track.trackTime = 0;

        this.panelBone = this.anim.skeleton.bones.find((b) => b.data.name === 'panel_winnings');

        this.rollup.visible = false;
        this.rollup.x = this.panelBone.worldX;
        this.rollup.y = this.panelBone.worldY;
        this.rollup.anchor.set(0.5);

        // NOTE: visibility has strange effects on playback.
        // Should be done in a wrapper node perhaps?
        // Or maybe we need to reset the state afrer updating visibility?

        this.store = store;
        this.render();
        this.store.subscribe(this.render.bind(this));

        app.ticker.add(this.updateRollupPosition.bind(this));
    }

    updateRollupPosition() {
        this.rollup.x = this.panelBone.worldX;
        this.rollup.y = this.panelBone.worldY;
        this.rollup.scaleX = this.panelBone.scaleX;
        this.rollup.scaleY = this.panelBone.scaleY;
    }

    stopBigWin() {
        this.store.dispatch({ type: 'STOP_BIG_WIN' });
    }

    bigWinEnd() {
        TweenLite.to([this.anim, this.rollup], 0.3, { alpha: 0, onComplete: this.bigWinIdle.bind(this) });
    }

    bigWinIdle() {
        this.store.dispatch({ type: 'BIG_WIN_IDLE' });
        this.track.timeScale = 0;
        this.track.trackTime = 0;
    }

    render() {
        let state = this.store.getState();
        if (this.track.timeScale === 0 && state.ui.bigWinStatus === 'running') {
            this.anim.alpha = 1;
            this.track.trackTime = 0;
            this.track.timeScale = 1;
            this.rollup.alpha = 1;
            this.rollup.visible = true;
            this.rollup.rollup(0, 10000000);
        }
        if (state.ui.bigWinStatus === 'stopping') {
            if (this.track.trackTime > 0) {
                this.bigWinEnd();
            }
        }
        if (state.ui.bigWinStatus === 'idle') {
            this.track.timeScale = 0;
            this.track.trackTime = 0;
            this.rollup.visible = false;
        }
    }
}
export { BigWinSpine }
