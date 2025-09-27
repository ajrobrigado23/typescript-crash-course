"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_js_1 = require("./Circle.js");
const Rectangle_js_1 = require("./Rectangle.js");
// Accept only Shape objects in the array
let shapes = [];
let myCircle = new Circle_js_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_js_1.Rectangle(0, 0, 3, 7);
shapes.push(myCircle);
shapes.push(myRectangle);
for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(`Area = ${shape.calculateArea()}`);
    console.log();
}
