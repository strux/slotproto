export const findFirstChildWithName = (sprite, childID) => {
    return findChildrenWithName(sprite, childID)[0];
};

export const findChildrenWithName = (sprite, childID) => {
    return sprite.children.filter(function(child) {
        return child.name === childID;
    });
};