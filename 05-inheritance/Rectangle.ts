import { Shape } from "./Shape";

export class Rectangle extends Shape {

    // constructor
    constructor(x : number, y: number, private _width: number, private _height: number) {
        // call the base class constructor
        super(x, y);
    }

    // getter / setter methods (accessors)
    getInfo(): string {
        return `${super.getInfo()}, width=${this._width}, height=${this._height}`;
    }
}