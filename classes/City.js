class City extends GameObject {
    #color;
    constructor(x, size, color) {
        super(x, height, size, size);
        this.shapeColor = color;
        this.setDefaultCollider();
    }

    Update() {
        fill(this.shapeColor);
        rect(0, 0, this.width, this.height);
    }
}