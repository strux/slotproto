import { getReelOutcomes } from '../reducers/spin.js';
import { Reel } from '../components/reel.js';

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

        reelOutcomes.forEach((outcome, i) => {
            if (!this._reels[i]) {
                this._reels[i] = new Reel();
                this._reels[i].x = (138 * i) - this.width / 2;
                this._reels[i].y = -this.height / 2;
                this.addChild(this._reels[i]);
            }
            this._reels[i].render(outcome);
        }, this);
    }
}
export { ReelController }
