"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.Rectangle = exports.Circle = exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this.color = "red";
        this.filled = true;
        if (color !== undefined)
            this.color = color;
        if (filled !== undefined)
            this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}
exports.Shape = Shape;
class Circle extends Shape {
    constructor(radius, color, filled) {
        super(color !== null && color !== void 0 ? color : "red", filled !== null && filled !== void 0 ? filled : false);
        this.radius = 1.0;
        if (radius !== undefined) {
            this.radius = radius;
        }
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    toString() {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}
exports.Circle = Circle;
class Rectangle extends Shape {
    constructor(width, length, color, filled) {
        // super() ต้องมาเป็นคำสั่งแรก
        super(color !== null && color !== void 0 ? color : "NOT FILLED", filled !== null && filled !== void 0 ? filled : false); // ค่าเริ่มต้นหากไม่มีการกำหนด
        this.width = 1.0;
        this.length = 1.0;
        // การตั้งค่า width และ length
        if (width !== undefined) {
            this.width = width;
        }
        if (length !== undefined) {
            this.length = length;
        }
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    toString() {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
    }
}
exports.Rectangle = Rectangle;
class Square extends Rectangle {
    constructor(side, color, filled) {
        super(side !== null && side !== void 0 ? side : 0, side !== null && side !== void 0 ? side : 0, color !== null && color !== void 0 ? color : "NOT FILLED", filled !== null && filled !== void 0 ? filled : false); // ส่ง side เป็น width และ length
        if (side !== undefined) {
            this.setWidth(side);
            this.setLength(side);
        }
    }
    getSide() {
        return this.getWidth();
    }
    setSide(side) {
        this.setWidth(side);
        this.setLength(side);
    }
    setWidth(width) {
        super.setWidth(width);
        super.setLength(width);
    }
    setLength(length) {
        super.setWidth(length);
        super.setLength(length);
    }
    toString() {
        return `Square[${super.toString()}[color=${this.getColor()}, filled=${this.isFilled()}], width=${this.getWidth()}, length=${this.getLength()}]`;
    }
}
exports.Square = Square;
