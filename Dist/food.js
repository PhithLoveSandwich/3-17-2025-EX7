"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name) {
        this.name = name;
    }
    serve() {
        return `${this.name} เซิฟให้กับลูกค้าแล้ว`;
    }
}
exports.Food = Food;
