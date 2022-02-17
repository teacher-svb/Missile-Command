let cursor = null;
let gun = null;
let ground = null;

let timer = 0;

function setup() {
    createCanvas(800, 400);

    cursor = createSprite(100, 100, 30, 30);
    cursor.shapeColor = color(255, 0, 0);
    cursor.draw = DrawCursor;

    gun = createSprite(width / 2, height - 50, 25, 50);
    gun.shapeColor = color(0, 255, 0);

    ground = createSprite(width / 2, height - 15, width, 30);
    ground.shapeColor = color(138, 84, 59);
}

function draw() {
    timer = timer + 1;

    background(0);

    if (timer > 100) {
        timer = 0;

        let missileStartPos = createVector(random(0, width), 0);
        let missileEndPos =   createVector(random(0, width), height);
        let direction = p5.Vector.sub(missileEndPos, missileStartPos);
        let angle = direction.heading();
        angle = degrees(angle);

        let missile = createSprite(missileStartPos.x, missileStartPos.y, 5, 10);
        missile["goal"] = missileEndPos;
        missile.shapeColor = color(255, 0, 0);
        missile.setSpeed(1, angle);
        missile.rotation = angle + 90;
        missile.draw = DrawMissile;
    }

    drawSprites();
}

function DrawMissile() {
    fill(this.shapeColor);
    rect(0, 0, this.width, this.height);

    let direction = p5.Vector.sub(this.goal, this.position);
    let distanceToGoal = direction.mag();
    if (distanceToGoal < 10) {
        let explosion = createSprite(this.position.x, this.position.y, 1, 1);
        explosion.shapeColor = color(255);
        explosion.draw = DrawExplosion;
        explosion.life = 100;

        this.remove();
    }
    // als afstand tot eindpositie = 0
        // verdwijn
        // creeer ontploffing
}

function DrawExplosion() {
    fill(this.shapeColor);
    circle(0, 0, this.width);

    this.width = this.width + 1;
}

function DrawCursor() {
    stroke(this.shapeColor);
    strokeWeight(2);
    noFill();

    circle(0, 0, this.width);
    line(10,  0,  20, 0);
    line(-10, 0, -20, 0);
    line(0,  10,   0, 20);
    line(0, -10,   0, -20);
}