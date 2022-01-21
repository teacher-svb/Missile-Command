class Gun extends GameObject {
    #cursor;
    constructor(x, y, size, cursor) {
        super(x, y, size, size);
        this.#cursor = cursor;
    }

    draw() {
        rect(0, 0, this.width, this.height);

        // this.rotation = 45;

        let dir = p5.Vector.sub(this.position, this.#cursor.position);
        // console.log(dir.heading());

        this.rotation = degrees(dir.heading());
    }
}