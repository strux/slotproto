import { getSimplifiedOutcome } from '../reducers/populationOutcomes.js';
import { TimelineMax, TweenLite } from 'gsap';
import { keyFrameTimeline } from '../util/animation.js'

class Anticipation {

    constructor(sprite, store) {
        this.sprite = sprite;

        this._isAnticipating = false;
        this.sprite.visible = false;

        this.anim = keyFrameTimeline(this.sprite, 'anticipation_fm', [0.1, 0.1, 0.1, 0.1, 0]);

        this.store = store;
        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        if (!this._isAnticipating && state.ui.reels.some((r) => r.isAnticipating)) {
            this._isAnticipating = true;
            this.sprite.visible = true;
            this.anim.play();
        }
        if (this._isAnticipating && !state.ui.reels.some((r) => r.isAnticipating)) {
            this._isAnticipating = false;
            this.sprite.visible = false;
            this.anim.stop();
        }
    }
}
export { Anticipation }
