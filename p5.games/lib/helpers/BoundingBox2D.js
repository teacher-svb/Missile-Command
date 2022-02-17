class BoundingBox2D {
    #transform;
    #shapeType;
    constructor(x, y, w = 20, h = 20, shapeType = ShapeType.RECT) {
        this.#transform = {
            position: createVector(x, y),
            rotation: 0,
            scale: createVector(1, 1),
            size: createVector(w, h)
        }
        this.#shapeType = shapeType;
    }

    get transform() {
        return this.#transform;
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

    get shapeType() {
        return this.#shapeType;
    }

    set shapeType(value) {
        if (Object.values(ShapeType).includes(value) === false) {
            throw `value of argument shapeType ${value} is not a valid shapeType.`;
        }

        this.#shapeType = value;
    }

    Update() {
        switch(this.#shapeType) {
            case ShapeType.RECT: break;
            case ShapeType.CIRCLE: break;
        }
    }
}