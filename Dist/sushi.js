"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sushi = void 0;
const food_1 = require("./food");
class Sushi extends food_1.Food {
    constructor(name) {
        super(name);
    }
    vasabi() {
        return `Sushi: ${this.name} added vasabi.`;
    }
}
exports.Sushi = Sushi;
