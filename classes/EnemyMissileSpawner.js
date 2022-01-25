class EnemyMissileSpawner {
    #timer;
    #shootRate;
    #missiles;
    constructor() {
        this.#timer = 0;
        this.#shootRate = .5;
        this.#missiles = new Group();
    }

    Update() {
        this.#timer += deltaTime;
        if (this.#timer >= 1000 / this.#shootRate) {
            this.#timer = 0;

            let randomXPosStart = random(0, width);
            let randomXPosEnd = random(0, width);

            let missile = new Missile(randomXPosStart, 0, 5, 2, randomXPosEnd, height);
            this.#missiles.add(missile);
        }
    }
}