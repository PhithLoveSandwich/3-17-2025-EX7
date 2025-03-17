"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airplane = void 0;
const aircraft_1 = require("./aircraft");
class Airplane extends aircraft_1.Aircraft {
    constructor(model, capacity) {
        super(model, capacity);
    }
    flight() {
        return `${this.model} กำลังออกเที่ยวบินในตอนนี้ และสามารถบรรจุผู้โดยสารได้ทั้งหมด: ${this.capacity}`;
    }
}
exports.Airplane = Airplane;
