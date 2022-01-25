class City extends GameObject {
    #color;
    constructor(x, size, color) {
        super(x, height, size, size);
        this.#color = color;
    }

    Update() {
        fill(this.#color);
        if (this.overlap(Game.GetInstance().GetCursor())) {
            fill(0, 255, 0);
        }
        rect(0, 0, this.width, this.height);
    }
}