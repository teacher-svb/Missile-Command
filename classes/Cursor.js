class Cursor extends GameObject {
    #speed;
    constructor(x, y, size, speed) {
        super(x, y, size, size);
        this.#speed = speed;
    }

    draw() {
        noFill();
        stroke(255, 0, 0);
        strokeWeight(4);
        circle(0, 0, this.width);

        circle(0, 0, 4);


        if (keyIsDown(DOWN_ARROW)) {
            this.position.y += this.#speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.position.y -= this.#speed;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.position.x -= this.#speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.position.x += this.#speed;
        }
    }
}