import { TimelineMax } from 'gsap';

export const keyFrameTimeline = (sprite, prefix, frameDelays) => {

    let anticipationFrames = [];
    for (let i=0; i<5; i++) {
        anticipationFrames[i] = PIXI.Texture.fromFrame(`${prefix}${i}`);
    }

    let tl = new TimelineMax({repeat: -1});
    anticipationFrames.forEach((frame, i) => {
        tl.to(sprite, frameDelays[i], { texture: frame, ease: SteppedEase.config(1) });
    }, this);

    tl.pause();

    return tl;
}
