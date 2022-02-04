class Renderer2D extends Behaviour {
    constructor() {
        super();
        this.unique = true;
    }

    Update() {
        let go = this.gameObject;
        let shape = go.GetBehaviourOfType(new Shape());

        push();

        rotate(this.rotation);
        scale(this.scale.x, this.scale.y);


        switch(shape.shapeType) {
            case ShapeType.RECT: 
                rect(this.position.x, this.position.y, this.size.x, this.size.y);
                break;
            case ShapeType.CIRCLE: 
                circle(this.position.x, this.position.y, this.size.x);
                break;
        }

        pop();
    }
}