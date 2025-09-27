"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    // constructor
    constructor(x, y, _width, _height) {
        // call the base class constructor
        super(x, y);
        this._width = _width;
        this._height = _height;
    }
    // getter / setter methods (accessors)
    getInfo() {
        return `${super.getInfo()}, width=${this._width}, height=${this._height}`;
    }
    // abstract method implementation
    calculateArea() {
        return this._width * this._height;
    }
}
exports.Rectangle = Rectangle;
