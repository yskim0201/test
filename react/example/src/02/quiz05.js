//ES5 클래스
function Box(length, width) {
    this.length = length;
    this.width = width;
}

Box.prototype.calculateArea = function() {
    return this.length * this.width;
}

var box = new Box(2, 2);

box.calculateArea();
console.log(box.calculateArea());

//ES6 클래스

class Box1 {
    static create(length, width) {
        return new Box1(length, width);
    }
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculateArea(length, width) {
        return this.length * this.width;
    }
}

var b = new Box1(2, 2);
b.calculateArea();
console.log(b.calculateArea());