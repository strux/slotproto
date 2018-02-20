import { CONFIG } from '../constants.js';
import { app } from '../index.js';

class Reel extends PIXI.Container {
    constructor() {
        super();
        this._isSpinning = false;
        this._beginStop = false;
    }

    render(state, stripInfo, outcome) {

        if (!this.visibleSymbols) {
            this.createVisibleSymbols(outcome);
        }

        if (!this.stripSprite) {
            this.createStrip(stripInfo);
            this.addChild(this.stripSprite);
            this.addChild(this.visibleSymbols);
        }

        if (state === 'spinning') {
            this.spin();
        }
        if (state === 'stopping') {
            this.stop(outcome);
        }
        if (state === 'stopped') {
            this.stopped();
        }
    }

    spin() {
        if (this._isSpinning) return;
        app.ticker.add(this._spin, this);
        this._isSpinning = true;
    }

    _spin() {
        if (!this._isStopping && this.visibleSymbols.y < this.visibleSymbols.height) {
            this.visibleSymbols.y += CONFIG.reelSpeed;
        }
        this.stripSprite.tilePosition.y += CONFIG.reelSpeed;
    }

    stop(outcome) {
        if (this._isStopping) return;
        app.ticker.add(this._stop, this);
        this._isStopping = true;
        this.updateVisibleSymbols(outcome);
    }

    _stop() {
        if (!this._beginStop && this.stripSprite.tilePosition.y % CONFIG.cellHeight < 1) {
            this._beginStop = true;
        }
        else if (this._beginStop) {
            if (this.visibleSymbols.y >= 0) {
                this.reelStopped();
            } else {
                this.visibleSymbols.y += CONFIG.reelSpeed;
            }
        }
    }

    stopped() {
        app.ticker.remove(this._stop, this);
        app.ticker.remove(this._spin, this);
        this.visibleSymbols.y = 0;
        this._beginStop = false;
        this._isStopping = false;
        this._isSpinning = false;
    }

    reset() {
        if (!this._isSpinning) return;
        app.ticker.remove(this._spin, this);
        this._isSpinning = false;
        this.stripSprite.tilePosition.y = 0;
    }

    createVisibleSymbols(outcome) {

        this.visibleSymbols = new PIXI.Container();
        outcome.Cell.forEach((symbol, i) => {
            let cell = new PIXI.Sprite();
            cell.width = CONFIG.cellWidth;
            cell.height = CONFIG.cellHeight;
            cell.y = CONFIG.cellHeight * i;
            let frameId = `mainreel_${CONFIG.symbolMap.indexOf(symbol)}_fm0`;
            cell.texture = PIXI.Texture.fromFrame(frameId);
            // debug tinting
            cell.tint = 0.533 * 0xFFFFFF;
            this.visibleSymbols.addChild(cell);
        }, this);
    }

    updateVisibleSymbols(outcome) {
        outcome.Cell.forEach((symbol, i) => {
            let frameId = `mainreel_${CONFIG.symbolMap.indexOf(symbol)}_fm0`;
            this.visibleSymbols.children[i].texture = PIXI.Texture.fromFrame(frameId);
        }, this);
        this.visibleSymbols.y = -this.visibleSymbols.height;
    }

    createStrip(stripInfo) {

        let width = 150;
        let height = stripInfo.length * 112;
        let container = new PIXI.Container();
        stripInfo.forEach((symbol, i) => {
            let cell = new PIXI.Sprite();
            cell.width = 150;
            cell.height = 112;
            cell.y = 112 * i;
            container.addChild(cell);
            let frameId = `mainreel_${CONFIG.symbolMap.indexOf(symbol)}_fm0`;
            cell.texture = PIXI.Texture.fromFrame(frameId);
        }, this);
        let texture = PIXI.RenderTexture.create(width, height);
        app.renderer.render(container, texture);
        this.stripSprite = new PIXI.extras.TilingSprite(texture, width, height);

        var mask = new PIXI.Graphics()
        mask.beginFill(0xFFFFFF)
        mask.drawRect(0, 0, this.visibleSymbols.width, this.visibleSymbols.height)
        mask.endFill()
        this.addChild(mask);

        this.stripSprite.mask = mask;
    }
}
export { Reel }
