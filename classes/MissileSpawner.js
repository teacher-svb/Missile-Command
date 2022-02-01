class MissileSpawner extends GameObject {
    #timer;
    #shootRate;
    #missiles;
    #counter;
    constructor(x, y, size) {
        super(x, y, size, size);
        this.#timer = 0;
        this.#shootRate = 4;
        this.#counter = 0;
        this.#missiles = new Group();
    }

    Shoot(fromx, fromy, goalx, goaly, speed, size) {
        this.#counter = this.#counter + 1;
        let missile = new Missile(fromx, fromy, size, speed, goalx, goaly);
        missile["id"] = this.#counter;
        // this.#missiles.push(missile);
        this.#missiles.add(missile);

        return missile;
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