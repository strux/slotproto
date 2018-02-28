import { TimelineMax, TweenLite } from 'gsap';

class BigWin extends PIXI.Sprite {

    constructor(frameId, width, height, store) {
        super(PIXI.utils.TextureCache[frameId]);

        this._isPlaying = false;
        this.visible = true;

        this.width = width;
        this.height = height;

        this.createTimeline(width, height);

        this.store = store;
        this.render();
        this.store.subscribe(this.render.bind(this));
    }

    createTimeline(width, height) {

        this.mainTl = new TimelineMax();

        this.introTl = new TimelineMax()
        .set(this, { width: 0, height: 0 }, 0)
        .set(this, { alpha: 1 }, 0)
        .to(this, 2, { width: width, height: height }, 0)
        .to(this, 2, { rotation: '+=20', ease: Power0.easeNone }, 0);

        this.loopTl = new TimelineMax({ repeat: 5 })
        .to(this, 1, { width: width * 0.6, height: height * 0.6 }, 0)
        .to(this, 2, { rotation: '+=20', ease: Power0.easeNone }, 0)
        .to(this, 1, { width: width, height: height }, 1)

        this.outroTl = new TimelineMax()
        .to(this, 1, { width: width * 0.1, height: height * 0.1 }, 0)
        .to(this, 1, { alpha: 0 }, 0)
        .to(this, 1, { rotation: '+=10', ease: Power0.easeNone }, 0)

        this.mainTl.add(this.introTl);
        this.mainTl.add(this.loopTl);
        this.mainTl.add(this.outroTl);

        this.mainTl.pause();
    }

    render() {
        let state = this.store.getState();
        if (!this._isPlaying && state.ui.bigWinPlaying) {
            this._isPlaying = true;
            this.visible = true;
            this.mainTl.play();
        }
        if (this._isPlaying && !state.ui.bigWinPlaying) {
            this._isPlaying = false;
            this.visible = false;
            this.mainTl.stop();
        }
    }
}
export { BigWin }
