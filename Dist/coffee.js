"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const drink_1 = require("./drink");
class Coffee extends drink_1.Drink {
    constructor(name) {
        super(name);
    }
    hot() {
        return `${this.name} กำลังอุ่นได้พอดี.`;
    }
}
exports.Coffee = Coffee;
