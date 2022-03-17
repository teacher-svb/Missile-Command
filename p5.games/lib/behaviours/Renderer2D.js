class Renderer2D extends Behaviour {
    #color;
    constructor() {
        super();
        this.unique = true;
        this.#color = color(255);
    }

    set color(value) {
        this.#color = value;
    }

    Update() {
        let go = this.gameObject;
        let shape = go.GetBehaviourOfType(new Shape());

        push();

        fill(this.#color);
        rotate(this.rotation);
        scale(this.scale.x, this.scale.y);

        switch (shape.shapeType) {
            case ShapeType.RECT: 
                beginShape();
                shape.vertices.forEach(v => vertex(this.position.x + v.x, this.position.y + v.y));
                endShape();
                break;
            case ShapeType.CIRCLE: 
                beginShape();
                shape.vertices.forEach(v => vertex(this.position.x + v.x, this.position.y + v.y));
                endShape();
                break;
        }

        pop();
    }
}