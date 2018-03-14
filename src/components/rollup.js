import { TweenMax } from 'gsap';

class Rollup extends PIXI.Text {

    constructor(textStyle) {
        super('', textStyle);
    }

    rollup(start, end) {
        TweenMax.fromTo(this, 5, { text: start }, { text: end });
    }

    set text(val) {
        return super.text = this.ghettoFormatCurrency(val);
    }

    get text() {
        return super.text;
    }

    ghettoFormatCurrency(val) {
        return '$' + Math.ceil(val)
        .toString()
        .split('')
        .reduceRight((p,n) => {
            let len = p.split(',').join('').length;
            p = (len > 0 && len % 3 === 0) ? `,${p}` : p;
            return n+p
        }, '');
    }
}
export { Rollup }
