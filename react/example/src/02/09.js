//ES5 클래스 표현 방법

function Shape(x, y) {
    this.name = 'Shape';
    this.move(x, y);
}
// static 함수 선언
Shape.create = function (x, y) {
    return new Shape(x, y);
};

// instance 함수 선언
Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
};

Shape.prototype.are = function() {
    return 0;
};

Shape.prototype = {
    move : function(x, y) {
        this.x = x;
        this.y = y;
    },
    area : function() {
        return 0;
    },
};

var s = new Shape(0, 0);
var s2 = Shape.create(0, 0);
s.area(); // 0
console.log(s.area());

//자식 클래스 생성
function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.name = 'Circle';
    this.radius = radius;
}

Object.assign(Circle.prototype, Shape.prototype, { // 부모클래스의 함수 상속
    area : function() { // area 함수는 오버라이드
        return this.radius * this.radius;
    },
});

var c = new Circle(0, 0, 10);
c.area(); // 100
console.log(c.area());