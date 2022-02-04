class EnemyMissileSpawner extends MissileSpawner {
    constructor() {
        super(0, 0, 0);
    }

    Update() {
        super.Update();
        
        if (this.GetTimer() >= 10000 / this.GetShootRate()) {
            this.ResetTimer();

            let randomXPosStart = random(0, width);
            let randomXPosEnd = random(0, width);

            let missile = this.Shoot(randomXPosStart, 0, randomXPosEnd, height, 2, 5);
            missile["name"] = "enemy";
        }
    }
}