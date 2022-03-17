let game = Game.GetInstance();

let timer = 0;
let fr = 0;

function setup() {
    createCanvas(800, 400);
    
    let player = new GameObject(100, 100, 50, 50);
    player.AddBehaviour(new Collider2D());
    player.AddBehaviour(new Shape(ShapeType.CIRCLE));
    player.AddBehaviour(new Renderer2D());
    player.AddBehaviour(new PlayerController(.5));
    player.boundingBox.shapeType = ShapeType.CIRCLE;
    game.AddGameObject(player);
    
    let object = new GameObject(50, 150, 200, 20);
    object.AddBehaviour(new Collider2D());
    object.AddBehaviour(new Shape(ShapeType.RECT));
    object.AddBehaviour(new Renderer2D());
    object.boundingBox.shapeType = ShapeType.RECT;
    game.AddGameObject(object);
}

let x = 100;

function draw() {
    background(0);

    DrawFPSCounter();

    game.Update();
}

function DrawFPSCounter() {
    timer += deltaTime;
    
    if (timer > 200) {
        fr = frameRate();
        timer = 0;
    }
    textSize(12);
    fill(255);
    text(floor(fr), 5, 15);
}