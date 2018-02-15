import { SYMBOL_MAP } from '../constants.js';

class Reel extends PIXI.Container {
    constructor() {
        super();

        this._cells = [];
    }

    render(outcome) {
        outcome.Cell.forEach((symbol, i) => {
            if (!this._cells[i]) {
                this._cells[i] = new PIXI.Sprite();
                this._cells[i].width = 150;
                this._cells[i].height = 112;
                this._cells[i].y = 112 * i;
                this.addChild(this._cells[i]);
            }
            let frameId = `mainreel_${SYMBOL_MAP.indexOf(symbol)}_fm0`;
            this._cells[i].texture = PIXI.Texture.fromFrame(frameId);
        }, this);
    }
}
export { Reel }
