var Box = /** @class */ (function () {
    function Box() {
        this.boxes = [];
    }
    Box.prototype.add = function (el) {
        this.boxes.push(el);
    };
    Box.prototype.remove = function () {
        this.boxes.splice(0, 1);
    };
    Box.prototype.count = function () {
        return this.boxes.length;
    };
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count());
var box1 = new Box();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count());
box1.remove();
console.log(box1.count());
