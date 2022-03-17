class Game {
    static #INSTANCE;
    #gameObjects;
    #colliders;

    static GetInstance() {
        if (Game.#INSTANCE == undefined) {
            Game.#INSTANCE = new Game();
        }
        return Game.#INSTANCE;
    }

    constructor() {
        this.#gameObjects = [];
        this.#colliders = [];
    }

    AddGameObject(value) {
        if (value instanceof GameObject === false) {
            throw `argument ${value.toString()} should be an instance of GameObject`;
        }

        this.#gameObjects.push(value);
    }

    RegisterCollider(value) {
        if (value instanceof Collider2D === false) {
            throw `argument ${value.toString()} should be an instance of Collider2D`;
        }

        this.#colliders.push(value);
    }

    FindCollision(collider) {
        if (collider instanceof Collider2D === false) {
            throw `argument ${collider.toString()} should be an instance of Collider2D`;
        }

        let index = this.#colliders.indexOf(collider);
        for (let i = index + 1; i < this.#colliders.length; ++i) {
            let other = this.#colliders[i];

            if (collider.CollidesWith(other)) {
                console.log("collision found!");
                collider.gameObject.Collide(collider, other);
            }
        }
    }

    Update() {
        this.#gameObjects.forEach(go => go.Update());
    }
}