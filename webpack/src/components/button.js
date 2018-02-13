let StoreConnected = (superclass) => class extends superclass {

    constructor(frameId) {
        super();
        console.log('connected');
        //counterStore.subscribe(this.update);
    }

    update() {
        console.log(counterStore.getState());
    }
}

//@connectToStore(counterStore)
//class Button extends StoreConnected(PIXI.Sprite) {
class Button extends PIXI.Sprite {

    constructor(frameId, onUpCallback) {
        super(PIXI.utils.TextureCache[frameId]);
        this._diabled = false;
        this.interactive = true;
        this.buttonMode = true;
        this.onUpCallback = onUpCallback;
        this.on('pointerdown', this.onDown);
        this.on('pointerup', this.onUp);
    }

    onDown() {
        this.scale.set(1.2);
    }

    onUp() {
        this.scale.set(1);
        if (this.onUpCallback) {
            this.onUpCallback()
        }
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


const connectedComponent = (Component, store) => {

    Component.getStore = () => {
        return store;
    }

    let update = () => {
        Component.update(store.getState());
    }

    store.subscribe(update);

    return Component
}
export { connectedComponent };
