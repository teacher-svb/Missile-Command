let game = Game.GetInstance();

function setup() {
    createCanvas(400, 400);
    let player = new GameObject(100, 100, 50, 50);
    player.GetBehaviourOfType(new Shape()).shapeType = ShapeType.CIRCLE;
    player.AddBehaviour(new PlayerController(5));
    game.AddGameObject(player);
}

function draw() {
    background(0);
    game.Update();
}