class MissileSpawner extends GameObject {
    #timer;
    #shootRate;
    #missiles;
    constructor(x, y, size) {
        super(x, y, size, size);
        this.#timer = 0;
        this.#shootRate = 4;
        this.#missiles = new Group();
    }

    Shoot(fromx, fromy, goalx, goaly, speed, size) {
        console.log(fromx);

        if (this.#timer >= 1000 / this.#shootRate) {
            this.#timer = 0;
            let missile = new Missile(fromx, fromy, size, speed, goalx, goaly);
            this.#missiles.add(missile);
        }
    }

    GetShootRate()  { return this.#shootRate; }
    GetTimer()      { return this.#timer; }
    
    ResetTimer() { 
        this.#timer = 0; 
    }

    Update() {
        this.#timer += deltaTime;
    }
}