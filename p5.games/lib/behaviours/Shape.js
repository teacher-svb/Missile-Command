const ShapeType = {
    CIRCLE: 0,
    RECT: 1
}
Object.freeze(ShapeType);


class Shape extends Behaviour {
    #shapeType;
    constructor(shapeType = ShapeType.RECT) {
        super();

        if (Object.values(ShapeType).includes(shapeType) === false) {
            throw `value of argument shapeType ${shapeType} is not a valid shapeType.`;
        }

        this.#shapeType = shapeType;

        this.unique = true;
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
}