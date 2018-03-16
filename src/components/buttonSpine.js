class ButtonSpine {

    constructor(sprite) {
        this.sprite = sprite;
        // XXX: Replace with intelligent search function
        this.spine = this.sprite.parent.parent;

        this.sprite.on('pointerdown', this.onDown, this);
        this.sprite.on('pointerup', this.onUp, this);
        this.disabled = false;
    }

    onDown() {
        this.spine.state.setAnimation(0, 'spin');
        this.spine.state.addAnimation(0, 'spinDisabled', false, 0);
    }

    onUp(callback=null) {
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
        if (disabled) {
            if (disabled !== this._disabled) {
            }
            this.sprite.interactive = false;
            this.sprite.buttonMode = false;
        } else {
            if (disabled !== this._disabled) {
                let track = this.spine.state.setAnimation(0, 'spin');
                track.timeScale = 0;
            }
            //this.sprite.alpha = 1;
            this.sprite.interactive = true;
            this.sprite.buttonMode = true;
        }
        this._disabled = disabled;
    }

    get visible() {
        return this.sprite.visible;
    }

    set visible(visible) {
        if (!visible) {
            console.log('not visible');
            this.spine.state.setAnimation(0, 'spinHide');
        } else {
            this.spine.state.setAnimation(0, 'spinShow');
        }
    }
}
export { ButtonSpine };
