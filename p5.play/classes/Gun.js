class Gun extends MissileSpawner {
    #cursor;
    constructor(x, y, size, cursor) {
        super(x, y, size);
        this.#cursor = cursor;
    }

    Shoot(fromx, fromy, goalx, goaly, speed, size) {
        let missile = new Missile(fromx, fromy, size, speed, goalx, goaly);
        this.Missiles.add(missile);

        return missile;
    }

    Update() {
        super.Update();

        rect(0, 0, this.width, this.height);

        let dir = p5.Vector.sub(this.position, this.#cursor.position);

        this.rotation = degrees(dir.heading());

        if (keyIsDown(32)) {
            if (this.Timer >= 1000 / this.ShootRate) {
                this.ResetTimer();
                let missile = this.Shoot(this.position.x,
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