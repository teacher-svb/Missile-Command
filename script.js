let player = null;
let playerSpeed = 5;

function setup() {
    createCanvas(800, 500);

    player = createSprite(width / 2, height - 100, 20, 20);
    player.draw = DrawPlayer;
}

function draw() {
    background(0, 0, 0);

    MovePlayer();

    drawSprites();
}

function DrawPlayer() {
    fill(0);
    stroke(255);
    strokeWeight(2);
    circle(0, 0, this.width);

    line(0, 5, 0, 20);
    line(0, -5, 0, -20);
    line(5, 0, 20, 0);
    line(-5, 0, -20, 0);
}

function MovePlayer() {
    if (keyIsDown(DOWN_ARROW)) {
        player.position.y += playerSpeed;
    }
    if (keyIsDown(UP_ARROW)) {
        player.position.y -= playerSpeed;
    }
    if (keyIsDown(LEFT_ARROW)) {
        player.position.x -= playerSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.position.x += playerSpeed;
    }
}