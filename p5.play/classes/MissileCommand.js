class MissileCommand extends Game {
    #cursor;
    #gun;
    #cities;
    #enemyMissileSpawner;

    constructor() {
        super();
        
        console.log("MC");

        this.#cursor = new Cursor(100, 100, 30, 8);
        this.#gun = new Gun(width/2, height - 50, 50, this.#cursor);

        this.#cities = new Group();
        this.#cities.add(new City(100, 50, 'red'));
        this.#cities.add(new City(200, 50, 'red'));
        this.#cities.add(new City(300, 50, 'red'));
        this.#cities.add(new City(500, 50, 'cyan'));
        this.#cities.add(new City(600, 50, 'cyan'));
        this.#cities.add(new City(700, 50, 'cyan'));

        this.#enemyMissileSpawner = new EnemyMissileSpawner();
    }
}