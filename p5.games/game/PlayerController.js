class PlayerController extends Behaviour {
    #speed;
    constructor(speed) {
        super();
        this.#speed = speed;
    }

    Update() {
        super.Update();

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

        if (this.position.y > height * 2/3) {
            this.position.y -= this.#speed;
        }
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