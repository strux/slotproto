export default class Button extends PIXI.Sprite {

    constructor(frameId, action) {
        super(PIXI.TextureCache[frameId]);
        this.action = action;
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerup', this.onClick);
    }

    onClick() {
        console.log(this.action);
    }

}
