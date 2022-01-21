class GameObject {
    constructor(x, y, width, height) {
        let temp = new Sprite(x, y, width, height);
        this.__proto__.__proto__ = Object.create(temp);

        this.depth = allSprites.maxDepth() + 1;
        allSprites.add(this);
    }
}