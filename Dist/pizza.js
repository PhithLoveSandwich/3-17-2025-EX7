"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
const food_1 = require("./food");
class Pizza extends food_1.Food {
    constructor(name) {
        super(name);
    }
    topping() {
        return `Pizza: ${this.name} added topping.`;
    }
}
exports.Pizza = Pizza;
