import { CONFIG } from '../constants.js';
import { app } from '../index.js';

class Reel extends PIXI.Container {
    constructor() {
        super();
        this._isSpinning = false;
    }

    render(state, stripInfo, outcome) {

        if (!this.visibleSymbols) {
            this.createVisibleSymbols(outcome);
        }

        if (!this.stripSprite) {
            this.createStrip(stripInfo);
        }

        if (state === 'spinning') {
            this.spin();
        }
        if (state === 'stopped') {
            this.reset();
        }
    }

    spin() {
        if (this._isSpinning) return;
        app.ticker.add(this._spin, this);
        this._isSpinning = true;
    }

    _spin() {
        this.stripSprite.tilePosition.y += CONFIG.reelSpeed;
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
            this.visibleSymbols.addChild(cell);
        }, this);
        this.visibleSymbols.y -= this.visibleSymbols.height;
        this.addChild(this.visibleSymbols);
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
        this.addChild(this.stripSprite);

        var mask = new PIXI.Graphics()
        mask.beginFill(0xFFFFFF)
        mask.drawRect(0, 0, this.visibleSymbols.width, this.visibleSymbols.height)
        mask.endFill()
        this.addChild(mask);

        this.stripSprite.mask = mask;
    }
}
export { Reel }
