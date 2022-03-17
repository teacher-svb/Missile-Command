let game = null;


function Test() {

}

function setup() {
    createCanvas(800, 400);

    game = new MissileCommand();
}

function draw() {
    game.Update();
}