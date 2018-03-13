class Button {

    constructor(sprite) {
        this.sprite = sprite;
        this.interactive = true;
        this.buttonMode = true;
        this.sprite.on('pointerdown', this.onDown, this);
        this.sprite.on('pointerup', this.onUp, this);
    }

    onDown() {
        this.sprite.scale.set(1.2);
    }

    onUp(callback=null) {
        this.sprite.scale.set(1);
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
            this.sprite.alpha = 0.3;
            this.sprite.interactive = false;
            this.sprite.buttonMode = false;
        } else {
            this.sprite.alpha = 1;
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
        }
    }

    get visible() {
        return this.sprite.visible;
    }

    set visible(visible) {
        return this.sprite.visible = visible;
    }
}
export { Button };
