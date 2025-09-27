import { Shape } from "./Shape.js";

export class Circle extends Shape {

    // constructor
    constructor(x: number, y: number, private _radius: number) {
        // call the base class constructor
        super(x, y);
    }

    // getter / setter methods (accessors)
    getInfo(): string {
        return `${super.getInfo()}, radius=${this._radius}`;
    }
}