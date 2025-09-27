"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_js_1 = require("./Circle.js");
const Rectangle_js_1 = require("./Rectangle.js");
// Accept only Shape objects in the array
let shapes = [];
let myShape = new Shape_1.Shape(10, 20);
let myCircle = new Circle_js_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_js_1.Rectangle(10, 20, 30, 40);
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (let shape of shapes) {
    console.log(shape.getInfo());
}
