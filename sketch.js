let cursor = null;
let gun = null;

function setup() {
    createCanvas(800, 400);
    background(0);

    circle(50, 50, 100);

    cursor = new Cursor(100, 100, 50, 1);
    gun = new Gun(width/2, height - 50, 50, cursor);

    // cursor.Init();
}

function draw() {
    angleMode(DEGREES);
    background(0);
    drawSprites();
}