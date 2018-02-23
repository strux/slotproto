import { app } from '../index.js';
import { Reel } from '../components/reel.js';
import { reelsSpinning } from '../reducers/ui.js';

import { getSimplifiedOutcome } from '../reducers/populationOutcomes.js';
import { getSimplifiedStripInfo } from '../reducers/stripInfo.js';

class ReelController extends PIXI.Sprite {

    constructor(frameId, store, config) {
        super(PIXI.utils.TextureCache[frameId]);

        this.store = store;
        this.config = config;
        this._reels = [];

        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        // TODO: 'BaseGame.Reels' should come from the 'director'
        let reelOutcomes = getSimplifiedOutcome(state, 'BaseGame.Reels');
        let stripInfo = getSimplifiedStripInfo(state, 'BaseGame');

        if (this._reels.length === 0) this.createReels(stripInfo);

        this._reels.forEach((reel, i) => {
            reel.render({
                reelState: state.ui.reels[i].state,
                reelOutcome: reelOutcomes[i],
                stripInfo: stripInfo[i]
            });
            reel.reelStoppedCallback = this.reelStoppedFactory(i);
        }, this);
    }

    reelStoppedFactory(index) {
        return () => { this.store.dispatch({ type: 'REEL_STOPPED', index: index }); }
    }

    createReels(stripInfo) {
        stripInfo.forEach((strip, i) => {
            this._reels[i] = new Reel(this.config.cellWidth, this.config.cellHeight, this.config.symbolMap, this.config.cellsPerSecond);
            this._reels[i].x = (this.config.cellWidth * i) - (this.width / 2) + (i * 10) + 27;
            this._reels[i].y = (-this.height / 2) + 23;
            this.addChild(this._reels[i]);
        }, this);
    }
}
export { ReelController }
