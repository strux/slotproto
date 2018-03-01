import { Sprite } from '../components/sprite.js';

export const layoutBuilder = (obj, parent) => {
    for (const [frame, data] of Object.entries(obj)) {
        let sprite = new Sprite(frame);
        parent.addChild(sprite);
        for (const [key, value] of Object.entries(data)) {
            if (key !== 'children') {
                sprite[key] = value;
            }
        }
        if (data.children) {
            layoutBuilder(data.children, sprite);
        }
    }
}
