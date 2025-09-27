"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    // default constructor - use the parameter properties shorthand
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // getter / setter methods (accessors)
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    getInfo() {
        return `x=${this._x}, x=${this._y}`;
    }
}
exports.Shape = Shape;
