class Shape {
    private color: string = "red";
    private filled: boolean = true;

    constructor(color?: string, filled?: boolean) {
        if (color !== undefined) this.color = color;
        if (filled !== undefined) this.filled = filled;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public isFilled(): boolean {
        return this.filled;
    }

    public setFilled(filled: boolean): void {
        this.filled = filled;
    }

    public toString(): string {
        return `Shape[color=${this.color}, filled=${this.filled}]`;
    }
}

class Circle extends Shape {
    private radius: number = 1.0;

    constructor();
    constructor(radius: number);
    constructor(radius: number, color: string, filled: boolean);
    constructor(radius?: number, color?: string, filled?: boolean) {

        super(color ?? "red", filled ?? false); 

        if (radius !== undefined) {
            this.radius = radius;
        }
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public toString(): string {
        return `Circle[${super.toString()}, radius=${this.radius}]`;
    }
}

class Rectangle extends Shape {
    private width: number = 1.0;
    private length: number = 1.0;

    constructor();
    constructor(width: number, length: number);
    constructor(width: number, length: number, color: string, filled: boolean);
    constructor(width?: number, length?: number, color?: string, filled?: boolean) {
        // super() ต้องมาเป็นคำสั่งแรก
        super(color ?? "NOT FILLED", filled ?? false); // ค่าเริ่มต้นหากไม่มีการกำหนด

        // การตั้งค่า width และ length
        if (width !== undefined) {
            this.width = width;
        }

        if (length !== undefined) {
            this.length = length;
        }
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getArea(): number {
        return this.width * this.length;
    }

    public toString(): string {
        return `Rectangle[${super.toString()}, width=${this.width}, length=${this.length}]`;
    }
}

class Square extends Rectangle {
    constructor();
    constructor(side: number);
    constructor(side?: number, color?: string, filled?: boolean) {
        super(side ?? 0, side ?? 0, color ?? "NOT FILLED", filled ?? false); // ส่ง side เป็น width และ length
        if (side !== undefined) {
            this.setWidth(side);
            this.setLength(side);
        }
    }
    public getSide(): number {
        return this.getWidth();
    }
    public setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    public setWidth(width: number): void {
        super.setWidth(width);
        super.setLength(width);
    }

    public setLength(length: number): void {
        super.setWidth(length);
        super.setLength(length);
    }   

    public toString(): string {
        return `Square[${super.toString()}[color=${this.getColor()}, filled=${this.isFilled()}], width=${this.getWidth()}, length=${this.getLength()}]`;
    }

}

export { Shape, Circle, Rectangle, Square };