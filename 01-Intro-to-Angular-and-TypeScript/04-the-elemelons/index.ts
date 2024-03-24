abstract class Melon {
    public weight: number;
    public melonSort: string;

    public get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
  
    constructor(weight: number) {
        super(weight, "Watermelon");
        
    }

    toString(): void {
        console.log
         (`
            Element: {Water}
            Sort: ${this.melonSort}”
            Element Index: ${this.elementIndex}
        `)
    }
}

class Firemelon extends Melon {
  
    constructor(weight: number) {
        super(weight, "Firemelon");
        
    }

    toString(): void {
        console.log
         (`
            Element: {Fire}
            Sort: ${this.melonSort}”
            Element Index: ${this.elementIndex}
        `)
    }
}

class Earthmelon extends Melon {
  
    constructor(weight: number) {
        super(weight, "Earthmelon");
        
    }

    toString(): void {
        console.log
         (`
            Element: {Earth}
            Sort: ${this.melonSort}”
            Element Index: ${this.elementIndex}
        `)
    }
}

class Airmelon extends Melon {
  
    constructor(weight: number) {
        super(weight, "Airmelon");
        
    }

    toString(): void {
        console.log
         (`
            Element: {Air}
            Sort: ${this.melonSort}”
            Element Index: ${this.elementIndex}
        `)
    }
}

var watermelon: Watermelon = new Watermelon(10);
var firemelon: Firemelon = new Firemelon(7);
var earthmelon: Earthmelon = new Earthmelon(12);
var airmelon: Airmelon = new Airmelon(3);

console.log(watermelon.toString(), firemelon.toString(), earthmelon.toString(), airmelon.toString());
