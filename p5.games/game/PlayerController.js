class PlayerController extends Behaviour {
    #speed;
    #movementVector = {
        x: 0,
        y: 0
    };

    #gravity = .01;

    constructor(speed) {
        super();
        this.#speed = speed;
    }

    Collide(collider, other) {
        super.Collide(collider, other);
        this.#movementVector.x *= 0;
        this.#movementVector.y *= -1;

        // this.position.x -= this.#movementVector.x;
        // this.position.y -= this.#movementVector.y + (this.#gravity > 0 ? this.#gravity : .1);

        // if (this.#gravity > 0)
            this.#gravity = 0;

        let renderer = this.gameObject.GetBehaviourOfType(new Renderer2D());
        renderer.color = color(255, 0, 0);
    }

    Update() {
        super.Update();

        this.position.x += this.#movementVector.x;
        this.position.y += this.#movementVector.y + this.#gravity;

        this.#movementVector = {
            x: 0,
            y: 0
        };

        if (keyIsDown(UP_ARROW)) {
            this.#gravity = -3;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.#movementVector.x = -this.#speed * deltaTime;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.#movementVector.x = this.#speed * deltaTime;
        }

        this.#gravity += .05;
        
        let renderer = this.gameObject.GetBehaviourOfType(new Renderer2D());
        renderer.color = color(255);
    }
}