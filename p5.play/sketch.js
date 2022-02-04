let game = null;


function Test() {

}

function setup() {
    createCanvas(800, 400);

    game = Game.GetInstance();
}

function draw() {
    game.Update();
}