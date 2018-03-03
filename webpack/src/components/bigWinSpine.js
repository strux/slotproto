import { Tweenlite } from 'gsap';

class BigWinSpine {

    constructor(anim, store) {

        this.anim = anim;
        this.track = this.anim.state.setAnimation(0, 'bigwin');
        this.listeners = { complete: this.bigWinEnd.bind(this) };
        this.anim.state.addListener(this.listeners);
        this.track.timeScale = 0;
        this.track.trackTime = 0;
        this.anim.visible = true;

        this.store = store;
        this.render();
        this.store.subscribe(this.render.bind(this));
    }


    bigWinEnd() {
        TweenLite.to(this.anim, 0.3, { alpha: 0, onComplete: this.stopBigWin.bind(this) });
    }

    stopBigWin() {
        this.store.dispatch({ type: 'STOP_BIG_WIN' });
        this.track.timeScale = 0;
        this.track.trackTime = 0;
    }

    render() {
        let state = this.store.getState();
        if (this.track.timeScale === 0 && state.ui.bigWinPlaying) {
            this.anim.visible = true;
            this.anim.alpha = 1;
            this.track.trackTime = 0;
            this.track.timeScale = 1;
        }
        if (!state.ui.bigWinPlaying) {
            if (this.track.trackTime > 0) {
                this.bigWinEnd();
            }
        }
    }
}
export { BigWinSpine }
