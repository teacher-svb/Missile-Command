class EnemyMissileSpawner extends MissileSpawner {
    constructor() {
        super(0, 0, 0);
    }

    Shoot(fromx, fromy, goalx, goaly, speed, size) {
        let missile = new Missile(fromx, fromy, size, speed, goalx, goaly);
        this.Missiles.add(missile);

        return missile;
    }

    Update() {
        super.Update();
        
        if (this.Timer >= 10000 / this.ShootRate) {
            this.ResetTimer();

            let randomXPosStart = random(0, width);
            let randomXPosEnd = random(0, width);

            let missile = this.Shoot(randomXPosStart, 0, randomXPosEnd, height, 2, 5);
            missile["name"] = "enemy";
        }
    }
}