class Game {
    static #INSTANCE;

    static GetInstance() {
        if (Game.#INSTANCE == undefined) {
            Game.#INSTANCE = new Game();
            Game.#INSTANCE.#Init();
        }
        return Game.#INSTANCE;
    }

    #cursor;
    #gun;
    #cities;
    #enemyMissileSpawner;
    #allGameObjects;

    constructor() {}

    #Init() {
        this.#allGameObjects = new Group();
        // new Missile(100, 0, 5, 1, 100, 200);

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

    GetCities() {
        return this.#cities;
    }

    GetCursor() {
        return this.#cursor;
    }

    AddGameObject(gameObject) {
        allSprites.add(gameObject);
        this.#allGameObjects.add(gameObject);
    }

    GetAllGameObjects() {return this.#allGameObjects; }

    Update() {
        background(0);
        this.#allGameObjects.draw();

        // this.#cursor.draw();
    
        // this.#enemyMissileSpawner.Update();
    }
}