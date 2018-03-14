export const findFirstChildWithName = (sprite, childID) => {
    let children = findChildrenWithName(sprite, childID);
    return children[0];
};

export const findChildrenWithName = (sprite, childID) => {
    return sprite.children.filter((child) => child.name === childID);
};
