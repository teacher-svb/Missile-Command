class Cursor extends GameObject {
    #speed;
    constructor(x, y, size, speed) {
        super(x, y, size, size);
        this.#speed = speed;
    }

    Update() {
        noFill();
        stroke(255, 0, 0);

        if (this.overlap(Game.GetInstance().GetCities())) {
            fill(0, 255, 0);
        }
        strokeWeight(2);
        circle(0, 0, 3);
        circle(0, 0, this.width);



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

        // if (this.position.y > height * 2/3) {
        //     this.position.y -= this.#speed;
        // }
        if (this.position.y < 0) {
            this.position.y += this.#speed;
        }
        if (this.position.x > width) {
            this.position.x -= this.#speed;
        }
        if (this.position.x < 0) {
            this.position.x += this.#speed;
        }
    }
}