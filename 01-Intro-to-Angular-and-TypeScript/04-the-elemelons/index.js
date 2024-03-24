var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight) {
        return _super.call(this, weight, "Watermelon") || this;
    }
    Watermelon.prototype.toString = function () {
        console.log("\n            Element: {Water}\n            Sort: ".concat(this.melonSort, "\u201D\n            Element Index: ").concat(this.elementIndex, "\n        "));
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight) {
        return _super.call(this, weight, "Firemelon") || this;
    }
    Firemelon.prototype.toString = function () {
        console.log("\n            Element: {Fire}\n            Sort: ".concat(this.melonSort, "\u201D\n            Element Index: ").concat(this.elementIndex, "\n        "));
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight) {
        return _super.call(this, weight, "Earthmelon") || this;
    }
    Earthmelon.prototype.toString = function () {
        console.log("\n            Element: {Earth}\n            Sort: ".concat(this.melonSort, "\u201D\n            Element Index: ").concat(this.elementIndex, "\n        "));
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight) {
        return _super.call(this, weight, "Airmelon") || this;
    }
    Airmelon.prototype.toString = function () {
        console.log("\n            Element: {Air}\n            Sort: ".concat(this.melonSort, "\u201D\n            Element Index: ").concat(this.elementIndex, "\n        "));
    };
    return Airmelon;
}(Melon));
var watermelon = new Watermelon(10);
var firemelon = new Firemelon(7);
var earthmelon = new Earthmelon(12);
var airmelon = new Airmelon(3);
console.log(watermelon.toString(), firemelon.toString(), earthmelon.toString(), airmelon.toString());
