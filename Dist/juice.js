"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juice = void 0;
const drink_1 = require("./drink");
class Juice extends drink_1.Drink {
    constructor(name) {
        super(name);
    }
    fresh() {
        return `${this.name} ดื่มแล้วสดชื่นมาก.`;
    }
}
exports.Juice = Juice;
