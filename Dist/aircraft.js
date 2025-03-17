"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aircraft = void 0;
class Aircraft {
    constructor(model, capacity) {
        this.model = model;
        this.capacity = capacity;
    }
    fly() {
        return `${this.model} กำลังบินอยู่ในน่านฟ้านี้.`;
    }
}
exports.Aircraft = Aircraft;
