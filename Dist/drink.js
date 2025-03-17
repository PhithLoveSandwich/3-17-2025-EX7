"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    constructor(name) {
        this.name = name;
    }
    serve() {
        return `${this.name} ทำการเสริฟให้กับลูกค้าแล้ว.`;
    }
}
exports.Drink = Drink;
