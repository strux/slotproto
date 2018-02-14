import { Button } from './button.js';

class SlotControls extends PIXI.Container {

    constructor(store) {
        super();

        this.store = store;

        let bottomBar = PIXI.Sprite.from('bottom_bar');
        this.btnTest = new Button('btn_spin', this.onSpinClick.bind(this));
        this.addChild(bottomBar);

        this.btnTest.anchor.set(0, 1);
        this.btnTest.x = this.width - this.btnTest.width;
        this.btnTest.y = this.btnTest.height;
        this.addChild(this.btnTest);

        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    render() {
        let state = this.store.getState();
        this.btnTest.disabled = state.spinRequested;
    }


    onSpinClick() {
        this.store.dispatch({ type: 'SPIN_REQESTED' });
        setTimeout(() => this.store.dispatch({ type: 'SPIN_RECEIVED' }), 2000);
    }

}
export { SlotControls }
