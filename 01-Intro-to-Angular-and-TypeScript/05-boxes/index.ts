class Box<T> {
    private boxes: T[];

    constructor() {
        this.boxes = [];
    }

    public add(el: T): void {
        this.boxes.push(el);
    }

    public remove(): void {
        this.boxes.splice(0, 1);
    }

    public count(): number {
        return this.boxes.length;
    }
}

let box = new Box<number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count());

let box1 = new Box<string>();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count());
box1.remove();
console.log(box1.count());


