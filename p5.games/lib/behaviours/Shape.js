const ShapeType = {
    CIRCLE: 0,
    RECT: 1,
    LINES: 2,
    POLYGON: 3
}
Object.freeze(ShapeType);


class Shape extends Behaviour {
    #shapeType;
    #vertices = [];
    constructor(shapeType = ShapeType.RECT) {
        super();

        if (Object.values(ShapeType).includes(shapeType) === false) {
            throw `value of argument shapeType ${shapeType} is not a valid shapeType.`;
        }

        this.#shapeType = shapeType;

        this.unique = true;
    }

    Init() { 
        this.#CreateBaseVertices();
    }

    get shapeType() {
        return this.#shapeType;
    }

    get vertices() { 
        return this.#vertices;
    }

    AddVertex(x, y) { 
        this.#vertices.push({ x: x, y: y });
    }

    #CreateBaseVertices() { 
        switch (this.#shapeType) { 
            case ShapeType.CIRCLE:
                for (let i = 0; i < 360; i += 10) {
                    let x = Math.cos(radians(i)) * this.size.x / 2;
                    let y = Math.sin(radians(i)) * this.size.y / 2;
                    this.AddVertex(x, y);
                }
                break;
            case ShapeType.RECT: 
                this.AddVertex((1 * this.size.x), (1 * this.size.y));
                this.AddVertex((1 * this.size.x), (0 * this.size.y));
                this.AddVertex((0 * this.size.x), (0 * this.size.y));
                this.AddVertex((0 * this.size.x), (1 * this.size.y));
                break;
            case ShapeType.LINES: break;
            case ShapeType.POLYGON: break;
        }
    }

    set shapeType(value) {
        if (Object.values(ShapeType).includes(value) === false) {
            throw `value of argument shapeType ${value} is not a valid shapeType.`;
        }

        this.#shapeType = value;
    }
}