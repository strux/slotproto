import { app } from '../index.js';
import { getReelOutcomes } from '../reducers/spin.js';
import { getStripInfo } from '../reducers/paytable.js';
import { reelsSpinning } from '../reducers/ui.js';
import { Reel } from '../components/reel.js';
import { spinReels } from '../actions/spinReels.js';

class ReelController extends PIXI.Sprite {

    constructor(frameId, store) {
        super(PIXI.utils.TextureCache[frameId]);

        this.store = store;
        this._reels = [];

        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        let reelOutcomes = getReelOutcomes(state);
        let stripInfo = getStripInfo(state);

        if (this._reels.length === 0) this.createReels(stripInfo);

        this._reels.forEach((reel, i) => {
            reel.render(state.ui.reels[i].state, stripInfo[i], reelOutcomes[i]);
            reel.reelStopped = this.reelStoppedFactory(i);
        }, this);
    }

    reelStoppedFactory(index) {
        return () => { this.store.dispatch({ type: 'REEL_STOPPED', index: index }); }
    }

    createReels(stripInfo) {
        stripInfo.forEach((strip, i) => {
            this._reels[i] = new Reel();
            this._reels[i].x = (150 * i) - (this.width / 2) + (i * 10) + 27;
            this._reels[i].y = (-this.height / 2) + 23;
            this.addChild(this._reels[i]);
        }, this);
    }
}
export { ReelController }
