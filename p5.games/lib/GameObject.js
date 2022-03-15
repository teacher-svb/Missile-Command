class GameObject {
    #behaviours;
    #transform;
    #boundingBox;

    constructor(x, y, w = 20, h = 20) {
        this.#transform = {
            position: createVector(x, y),
            rotation: 0,
            scale: createVector(1, 1),
            size: createVector(w, h)
        }

        this.#boundingBox = new BoundingBox2D(0, 0, w, h);
        this.#behaviours = [];
    }

    get boundingBox() {
        return this.#boundingBox;
    }

    get position() {
        return this.#transform.position;
    }

    get size() {
        return this.#transform.size;
    }

    get scale() {
        return this.#transform.scale;
    }

    get rotation() {
        return this.#transform.rotation;
    }

    Collide(collider, other) {
        this.#behaviours.forEach(behaviour => {
            behaviour.Collide(collider, other);
        });
    }

    AddBehaviour(behaviour) {
        if (behaviour instanceof Behaviour === false) {
            throw `argument ${behaviour.toString()} should be an instance of Behaviour`;
        }
        if (behaviour.unique == true) {
            this.#behaviours.forEach(existingBehaviour => {
                if (existingBehaviour.constructor === behaviour.constructor) {
                    throw `can not add ${behaviour.toString()}, because another instance of this unique Behaviour was already added.`;
                }
            })
        }

        behaviour.gameObject = this;
        behaviour.Init();

        this.#behaviours.push(behaviour);
    }

    GetBehaviourOfType(behaviour) {
        let result = null;
        this.#behaviours.forEach(existingBehaviour => {
            if (existingBehaviour.constructor === behaviour.constructor) {
                result = existingBehaviour;
                return;
            }
        })
        return result;
    }

    Update() {
        this.#behaviours.forEach(behaviour => {
            behaviour.Update();
        });
    }
}