//ES6 클래스 표현 방법

class Shape {
    static create(x, y){
        return new Shape(x, y);
    }
    constructor(x, y) {
        this.move(x, y);
        this.name = "Shape";
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}

var s = new Shape(0, 0);
var s1 = Shape.create(0, 0);
s.area();
console.log(s.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y); // 부모클래스의 함수 참조 가능하게 함
        this.radius = radius;
    }
    area() {
        if (this.radius == 0) return super.area();
        return this.radius * this.radius;
    }
}

var c = new Circle(0, 0, 10);
c.area();
console.log(c.area());