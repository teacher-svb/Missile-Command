let player = null;
let playerSpeed = 10;
let explosions = [];
let explosionLife = 100;
let shootTimer = 0;
let shotsPerSecond = 4;


function setup() {
    createCanvas(800, 500);

    player = createSprite(width / 2, height - 100, 20, 20);
    player.draw = DrawPlayer;
}

function draw() {
    background(0, 0, 0);

    MovePlayer();
    Shoot();
    RemoveDeadExplosions();

    drawSprites();
}

function RemoveDeadExplosions() { 
    // kijk na of er nog explosies in de lijst zitten (lengte is groter dan 0)
    // EN kijk na of de eerste explosie in de lijst klaar is (life is gelijk aan 0)
    if (explosions.length > 0 && explosions[0].life == 0) { 
        explosions.shift();     // shift() verwijdert het EERSTE item uit een lijst
    }
}

function Shoot() {
    shootTimer += deltaTime;
    if (keyIsDown(32) && shootTimer >= 1000 / shotsPerSecond) {
        CreateExplosion(player.position.x, player.position.y);
        shootTimer = 0;
    }
}

function CreateExplosion(x, y) {
    let explosion = createSprite(x, y, 1, 1);
    explosion.life = explosionLife;
    explosion.draw = DrawExplosion;
    explosions.push(explosion);
}

function DrawExplosion() {
    circle(0, 0, this.width);
    this.width++;
    this.height++;
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