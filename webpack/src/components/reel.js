import { CONFIG } from '../constants.js';
import { app } from '../index.js';
import { TweenLite } from 'gsap';

class Reel extends PIXI.Container {
    constructor(cellWidth, cellHeight) {
        super();
        this._cellWidth = cellWidth;
        this._cellHeight = cellHeight;
        this._isSpinning = false;
        this._beginStop = false;
        this.reelStoppedCallback = () => {};
    }

    render(state) {
        this.state = state;

        if (!this.visibleSymbols) {
            this.createVisibleSymbols();
        }

        if (!this.stripSprite) {
            this.createStrip();
            this.addChild(this.stripSprite);
        }
        this.addChild(this.visibleSymbols);

        if (this.state.reelState === 'spinning' && !this._isSpinning) {
            this.spin(this.stripSprite);
        }
    }

    spin(stripSprite) {
        if (this.state.reelState === 'stopping') {
            this.stop(stripSprite);
        } else {
            if (!this._isSpinning) {
                TweenLite.to(this.visibleSymbols, (CONFIG.cellCount/CONFIG.cellsPerSecond), {
                    y:`+=${this._cellHeight*CONFIG.cellCount}`,
                    ease:Power0.easeNone,
                });
            }
            TweenLite.to(this.stripSprite.tilePosition, (1/CONFIG.cellsPerSecond), {
                y:`+=${this._cellHeight}`,
                ease:Power0.easeNone,
                onComplete:this.spin.bind(this),
                onCompleteParams:[this.stripSprite],
            });
            this._isSpinning = true;
        }
    }

    stop(stripSprite) {
        this._isSpinning = false;
        this.updateVisibleSymbols();
        TweenLite.to([this.stripSprite.tilePosition, this.visibleSymbols], (CONFIG.cellCount/CONFIG.cellsPerSecond), {
            y:`+=${this._cellHeight*CONFIG.cellCount}`,
            ease:Power0.easeNone,
            onComplete:this.reelStoppedCallback.bind(this),
        });
    }

    createVisibleSymbols() {
        this.visibleSymbols = new PIXI.Container();
        this.state.reelOutcome.forEach((symbol, i) => {
            let cell = new PIXI.Sprite();
            cell.width = this._cellWidth;
            cell.height = this._cellHeight;
            cell.y = CONFIG.cellHeight * i;
            let frameId = `mainreel_${CONFIG.symbolMap.indexOf(symbol)}_fm0`;
            cell.texture = PIXI.Texture.fromFrame(frameId);
            // debug tinting
            cell.tint = 0.533 * 0xFFFFFF;
            this.visibleSymbols.addChild(cell);
        }, this);

        let mask = this.createMask();
        this.addChild(mask);
        this.visibleSymbols.mask = mask;
    }

    updateVisibleSymbols() {
        this.state.reelOutcome.forEach((symbol, i) => {
            let frameId = `mainreel_${CONFIG.symbolMap.indexOf(symbol)}_fm0`;
            this.visibleSymbols.children[i].texture = PIXI.Texture.fromFrame(frameId);
        }, this);
        this.visibleSymbols.y = -this.visibleSymbols.height;
    }

    createStrip() {
        let width = this._cellWidth;
        let height = this.state.stripInfo.length * this._cellHeight;
        let container = new PIXI.Container();
        this.state.stripInfo.forEach((symbol, i) => {
            let cell = new PIXI.Sprite();
            cell.width = this._cellWidth;
            cell.height = this._cellHeight;
            cell.y = this._cellHeight * i;
            container.addChild(cell);
            let frameId = `mainreel_${CONFIG.symbolMap.indexOf(symbol)}_fm0`;
            cell.texture = PIXI.Texture.fromFrame(frameId);
        }, this);
        let texture = PIXI.RenderTexture.create(width, height);
        app.renderer.render(container, texture);
        this.stripSprite = new PIXI.extras.TilingSprite(texture, width, height);

        let mask = this.createMask();
        this.addChild(mask);
        this.stripSprite.mask = mask;
    }

    createMask() {
        let mask = new PIXI.Graphics()
        mask.beginFill(0xFFFFFF)
        mask.drawRect(0, 0, this.visibleSymbols.width, this.visibleSymbols.height)
        mask.endFill()
        return mask;
    }
}
export { Reel }
