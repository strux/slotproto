import { Sprite } from '../components/sprite.js';

const map = {};
export const layoutBuilder = (obj, parent) => {
    _layoutBuilder(obj, parent, map);
    return map;
}

export const _layoutBuilder = (obj, parent, map) => {
    for (const [name, data] of Object.entries(obj)) {
        let sprite = new Sprite(data.frame);
        map[name] = sprite;
        sprite.name = name;
        parent.addChild(sprite);
        for (const [key, value] of Object.entries(data)) {
            if (key !== 'children' && key !== 'frame') {
                sprite[key] = value;
            }
        }
        if (data.children) {
            _layoutBuilder(data.children, sprite, map);
        }
    }
    return map;
}
