class Explosion extends GameObject {
    #growSpeed;
    #maxSize;
    
    constructor(x, y, growSpeed, maxSize) {
        super(x, y, 1, 1);
        this.#growSpeed = growSpeed;
        this.life = maxSize;
    }

    Update() {
        this.width += this.#growSpeed;
        this.height += this.#growSpeed;
        circle(0, 0, this.width);
    }
}