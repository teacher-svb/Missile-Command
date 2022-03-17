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

    get Missiles() { return this.#missiles; }
    get ShootRate()  { return this.#shootRate; }
    get Timer()      { return this.#timer; }
    
    ResetTimer() { 
        this.#timer = 0; 
    }

    Update() {
        this.#timer += deltaTime;
    }
}