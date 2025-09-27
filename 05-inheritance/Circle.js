"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_js_1 = require("./Shape.js");
class Circle extends Shape_js_1.Shape {
    // constructor
    constructor(x, y, _radius) {
        // call the base class constructor
        super(x, y);
        this._radius = _radius;
    }
    // getter / setter methods (accessors)
    getInfo() {
        return `${super.getInfo()}, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
