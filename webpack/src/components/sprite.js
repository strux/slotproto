export class Sprite extends PIXI.Sprite {

    constructor(frameId) {
        super(PIXI.utils.TextureCache[frameId]);
        this._x = 0;
        this._y = 0;
        this._originXOffset = 0;
        this._originYOffset = 0;
    }

    updateX() {
        super.x = this._x - this._originXOffset;
    }

    updateY() {
        super.y = this._y - this._originYOffset;
    }

    set x(value) {
        this._x = this.parseValue(value, this.parent.width);
        this.updateX();
    }

    set y(value) {
        this._y = this.parseValue(value, this.parent.height);
        this.updateY();
    }

    set originX(value) {
        this._originXOffset = this.parseValue(value, this.width);
        this.updateX();
    }

    set originY(value) {
        this._originYOffset = this.parseValue(value, this.height);
        this.updateY();
    }

    /*
    set width(value) {
        let width = this.parseValue(value, this.parent.width);
        super.width = width;
    }

    get width() {
        return super.width
    }
   */

    parseValue(value, dimension) {
        if (typeof value === 'string') {
            if (value.slice(-1) === '%') {
                let multiplier = parseInt(value) * 0.01;
                value = dimension * multiplier;
            }
            else if (value.slice(-1) === 'R') {
                value = dimension + parseInt(value);
            }
            else {
                value = -parseInt(value);
            }
        }
        return value;
    }
}
