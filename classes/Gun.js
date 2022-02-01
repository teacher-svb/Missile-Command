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
            if (this.GetTimer() >= 1000 / this.GetShootRate()) {
                this.ResetTimer();
                let missile = super.Shoot(this.position.x,
                                          this.position.y,
                                          this.#cursor.position.x,
                                          this.#cursor.position.y,
                                          4,
                                          5);
                missile["name"] = "friendly";
            }
        }
    }
}