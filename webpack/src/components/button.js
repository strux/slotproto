class Button extends PIXI.Sprite {

    constructor(frameId) {
        super(PIXI.utils.TextureCache[frameId]);
        this._diabled = false;
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', this.onDown);
        this.on('pointerup', this.onUp);
    }

    onDown() {
        this.scale.set(1.2);
    }

    onUp(callback=null) {
        this.scale.set(1);
        if (this.onUpCallback) {
            this.onUpCallback();
        }
    }

    set onClick(callback) {
        this.onUpCallback = callback;
    }

    get disabled() {
        return this._disabled;
    }

    set disabled(disabled=true) {
        this._disabled = disabled;
        if (disabled) {
            this.alpha = 0.3;
            this.interactive = false;
            this.buttonMode = false;
        } else {
            this.alpha = 1;
            this.interactive = true;
            this.buttonMode = true;
        }
    }
}
export { Button };
