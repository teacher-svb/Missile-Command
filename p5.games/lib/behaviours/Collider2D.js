class Collider2D extends Behaviour {
    #debug;
    constructor() {
        super();
        this.#debug = true;

        game.RegisterCollider(this);
    }

    set debug(value) {
        this.#debug = value ? true : false;
    }

    get shapeType() {
        return this.boundingBox.shapeType;
    }

    Update() {
        game.FindCollision(this);
    }

    CollidesWith(other) {
        let myPos = createVector(this.position.x + this.boundingBox.position.x, this.position.y + this.boundingBox.position.y);
        let otherPos = createVector(other.position.x + other.boundingBox.position.x, other.position.y + other.boundingBox.position.y);

        if (this.shapeType === ShapeType.RECT) {
            switch (other.shapeType) {
                case ShapeType.RECT: 
                    return collideRectRectVector(myPos, this.boundingBox.size,
                                           otherPos, other.boundingBox.size);
                case ShapeType.CIRCLE: 
                    return collideRectCircleVector(myPos, this.boundingBox.size,
                                             otherPos, other.boundingBox.size.x);
            }
        }
        else if (this.shapeType === ShapeType.CIRCLE) {
            switch (other.shapeType) {
                case ShapeType.RECT: 
                return collideRectCircleVector(otherPos, other.boundingBox.size,
                                         myPos, this.boundingBox.size.x);
                case ShapeType.CIRCLE: 
                return collideCircleCircleVector(otherPos, other.boundingBox.size.x,
                                           myPos, this.boundingBox.size.x);
            }
        }

        return false;
    }
}