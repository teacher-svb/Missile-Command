class Behaviour {
    #gameObject;
    #unique;
    constructor() {
        this.#unique = false;
    }

    get position() {
        return this.#gameObject.position;
    }

    get size() {
        return this.#gameObject.size;
    }

    get scale() {
        return this.#gameObject.scale;
    }

    get rotation() {
        return this.#gameObject.rotation;
    }

    get unique() {
        return this.#unique;
    }

    get boundingBox() {
        return this.#gameObject.boundingBox;
    }

    set unique(value) {
        this.#unique = value;
    }

    set gameObject(value) {
        if (value instanceof GameObject === false) {
            throw `argument ${value.toString()} should be an instance of GameObject`;
        }

        this.#gameObject = value;
    }

    get gameObject() {
        return this.#gameObject;
    }

    Collide(collider, other) {}

    Update() {}
}