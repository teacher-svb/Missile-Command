class Gun extends MissileSpawner {
    #cursor;
    constructor(x, y, size, cursor) {
        super(x, y, size);
        // console.log(this);
        this.#cursor = cursor;
    }

    Update() {
        super.Update();

        rect(0, 0, this.width, this.height);

        let dir = p5.Vector.sub(this.position, this.#cursor.position);

        this.rotation = degrees(dir.heading());

        if (keyIsDown(32)) {
            super.Shoot(this.position.x,
                        this.position.y,
                        this.#cursor.position.x,
                        this.#cursor.position.y,
                        4,
                        5);
        }
    }
}