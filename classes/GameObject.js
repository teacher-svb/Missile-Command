class GameObject {
    constructor(x, y, width, height) {
        console.log(this);

        let protos = [];
        let counter = 0;
        let proto = this.__proto__;
        while (proto && counter < 50) {
            protos.push(proto);
            proto = proto.__proto__;
            counter++;
        }

        proto = this.__proto__;
        for (let i = 0; i < protos.length - 3; ++i) {
            proto = proto.__proto__;
        }

        let obj2 = new Sprite(x, y, width, height);
        let obj = {...obj2};
        Object.setPrototypeOf(obj, obj2.__proto__);
        Object.setPrototypeOf(proto, obj);
        // Object.setPrototypeOf(proto, new Sprite(x, y, width, height));

        // for (var prop in this) {
        //     // if (this[prop] instanceof Object) {
        //     //     console.log(`${prop} ${this[prop]}`);
        //     // }
        //     if (
        //         typeof this[prop] === 'object' &&
        //         !Array.isArray(this[prop]) &&
        //         this[prop] !== null
        //     ) {
        //         console.log(prop);
        //         console.log(this[prop]);
        //     }
        // }

        this.draw = this.Update;
        this.position = createVector(x, y);
        this.newPosition = createVector(x, y);
        this.previousosition = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.touching = {};
        this.touching.left = false;
        this.touching.right = false;
        this.touching.top = false;
        this.touching.bottom = false;
        this.shapeColor = color(random(255), random(255), random(255));

        this.depth = allSprites.maxDepth() + 1;
        Game.GetInstance().AddGameObject(this);
    }

    Update() {
        fill(this.shapeColor);
        rect(0, 0, this.width, this.height);
    }
}


// (function (root, factory) {
//     if (typeof define === 'function' && define.amd)
//       define('p5.play', ['p5'], function (p5) { (factory(p5)); });
//     else if (typeof exports === 'object')
//       factory(require('../p5'));
//     else
//       factory(root.p5);
//   }(this, function (p5) {
//       class Test extends Sprite {}
//   })
// );