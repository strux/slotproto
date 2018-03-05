import { Tweenlite } from 'gsap';

class BigWinSpine {

    constructor(anim, store) {

        this.anim = anim;
        this.track = this.anim.state.setAnimation(0, 'bigwin');
        this.listeners = { complete: this.stopBigWin.bind(this) };
        this.anim.state.addListener(this.listeners);
        this.track.timeScale = 0;
        this.track.trackTime = 0;

        // NOTE: visibility has strange effects on playback.
        // Should be done in a wrapper node perhaps?

        this.store = store;
        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    stopBigWin() {
        this.store.dispatch({ type: 'STOP_BIG_WIN' });
    }

    bigWinEnd() {
        TweenLite.to(this.anim, 0.3, { alpha: 0, onComplete: this.bigWinIdle.bind(this) });
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
        }
        if (state.ui.bigWinStatus === 'stopping') {
            if (this.track.trackTime > 0) {
                this.bigWinEnd();
            }
        }
        if (state.ui.bigWinStatus === 'idle') {
            this.track.timeScale = 0;
            this.track.trackTime = 0;
        }
    }
}
export { BigWinSpine }
