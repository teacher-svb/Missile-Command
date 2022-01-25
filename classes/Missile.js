class Missile extends GameObject {
    #speed;
    #goal;
    
    constructor(x, y, size, speed, goalx, goaly) {
        super(x, y, size, size);
        this.#speed = speed;
        this.#goal = createVector(goalx, goaly);
        
        let dir = p5.Vector.sub(this.#goal, createVector(x, y));
        this.setSpeed(this.#speed, degrees(dir.heading()));
        this.rotation = degrees(dir.heading());
    }

    Update() {
        rect(0, 0, this.width, this.height);

        if (p5.Vector.dist(this.position, this.#goal) < this.#speed * 2) {
            new Explosion(this.position.x, this.position.y, 1, 100);
            this.remove();
        }
    }
}