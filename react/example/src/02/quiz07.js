class Shape {
    static create(x, y) {
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

class Rectangle extends Shape {
    constructor(x, y, length) {
        super(x, y);
        this.length = length;
    }
    area() {
        if (this.length == 0) return super.area();
        return this.length * this.length;
    }
    overlap(rec) {
        var xa = Math.pow((this.x)-(rec.x), 2);
        var xb = Math.pow((this.y)-(rec.y), 2);

        var a = Math.sqrt(xa + xb);
        var b = ((this.length)/2 + (rec.length)/2)*Math.sqrt(2);

        if (0 <= a & a <= b) {
            return true;
        } else {
            return false;
        }
    }        
}


var r1 = new Rectangle(0 ,0, 10);
var r2 = new Rectangle(10, 10, 10);
var r3 = new Rectangle(105, 105, 5);

console.log(r2.overlap(r1));
console.log(r2.overlap(r3));