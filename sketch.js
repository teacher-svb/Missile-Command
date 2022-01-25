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


// class Parent {
//     #privateFoo;
//     constructor() {
//         console.log(this.__proto__);
//         let test = {
//             draw: this.Update
//         };
//         // this.__proto__ = {...this.__proto__};
//         Object.assign(this.__proto__, test);
//         // console.log({...this.__proto__});
//         console.log(this.__proto__);

//         this.#privateFoo = "foo";
//     }

//     GetPrivateFoo() {
//         return this.#privateFoo;
//     }

//     bar() {
//         console.log(this.GetPrivateFoo());
//         console.log("bar");
//     }
// }

// class Child extends Parent {
//     constructor() {
//         super();
//     }

//     bar() {
//         super.bar();
//     }
// }

// let c = new Child();
// c.bar();