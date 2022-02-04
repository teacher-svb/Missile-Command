class Game {
    static #INSTANCE;
    #gameObjects;

    static GetInstance() {
        if (Game.#INSTANCE == undefined) {
            Game.#INSTANCE = new Game();
            Game.#INSTANCE.#Init();
        }
        return Game.#INSTANCE;
    }

    constructor() {
        this.#gameObjects = [];
    }

    AddGameObject(value) {
        if (value instanceof GameObject === false) {
            throw `argument ${value.toString()} should be an instance of GameObject`;
        }

        this.#gameObjects.push(value);
    }

    #Init() {
    }

    Update() {
        this.#gameObjects.forEach(go => go.Update());
    }
}