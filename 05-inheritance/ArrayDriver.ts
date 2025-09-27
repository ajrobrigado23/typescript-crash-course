import { Shape } from "./Shape";
import { Circle } from "./Circle.js";
import { Rectangle } from "./Rectangle.js";

// Accept only Shape objects in the array
let shapes: Shape[] = [];

let myShape = new Shape(10, 20);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(10, 20, 30, 40);

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for (let shape of shapes) {
    console.log(shape.getInfo());
}