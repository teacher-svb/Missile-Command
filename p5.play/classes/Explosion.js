class Explosion extends GameObject {
    #growSpeed;
    
    constructor(x, y, growSpeed, maxSize) {
        super(x, y, 1, 1);
        this.#growSpeed = growSpeed;
        this.life = maxSize;
    }

    Update() {
        this.width += this.#growSpeed;
        this.height += this.#growSpeed;
        circle(0, 0, this.width);
        this.setCollider("circle", 0, 0, this.width / 2);

        this.overlap(MissileCommand.GetAllGameObjects(), this.Collided);
    }

    Collided(me, other) {
        if (other instanceof City) {
            other.shapeColor = "green";
        }
        else if (other instanceof Missile) {
            other.shapeColor = "red";
            other.remove();
        }
    }
}