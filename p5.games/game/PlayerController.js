class PlayerController extends Behaviour {
    #speed;
    constructor(speed) {
        super();
        this.#speed = speed;
    }

    Collide(collider, other) {
        super.Collide(collider, other);

        let renderer = this.gameObject.GetBehaviourOfType(new Renderer2D());
        renderer.color = color(255, 0, 0);
    }

    Update() {
        super.Update();

        if (keyIsDown(DOWN_ARROW)) {
            this.position.y += this.#speed * deltaTime;
        }
        if (keyIsDown(UP_ARROW)) {
            this.position.y -= this.#speed * deltaTime;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.position.x -= this.#speed * deltaTime;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.position.x += this.#speed * deltaTime;
        }

        if (this.position.y > height * 2/3) {
            this.position.y -= this.#speed * deltaTime;
        }
        if (this.position.y < 0) {
            this.position.y += this.#speed * deltaTime;
        }
        if (this.position.x > width) {
            this.position.x -= this.#speed * deltaTime;
        }
        if (this.position.x < 0) {
            this.position.x += this.#speed * deltaTime;
        }
        
        let renderer = this.gameObject.GetBehaviourOfType(new Renderer2D());
        renderer.color = color(255);
    }
}