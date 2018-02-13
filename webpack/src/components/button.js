let StoreConnected = (superclass) => class extends superclass {

    constructor(frameId, action) {
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

    constructor(frameId, action) {
        console.log('button');
        super(PIXI.utils.TextureCache[frameId]);
        this.action = action;
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerup', this.onClick);
    }

    onClick() {
        this.getStore().dispatch({ type: this.action });
    }

    update(state) {
        console.log(state);
        setTimeout(function() { this.x += 200; }.bind(this), 2000);
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
export { StoreConnected2 };
